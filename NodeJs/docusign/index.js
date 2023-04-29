const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();
const docusign = require("docusign-esign");
const fs = require("fs");
const session = require("express-session");

// Initialize the Express application
const app = express();

// Use the body-parser middleware to parse request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Use the express-session middleware to handle user sessions
app.use(session({
    secret: "dfsf94835asda",
    resave: true,
    saveUninitialized: true,
}));

// Handle POST requests to the /form endpoint
app.post("/form", async (request, response) => {
    // Check the user's access token before proceeding
    await checkToken(request);

    // Create an instance of the Envelopes API
    let envelopesApi = getEnvelopesApi(request);

    // Construct an envelope using the user's form data
    let envelope = makeEnvelope(request.body.name, request.body.email, request.body.company);

    // Submit the envelope to DocuSign for processing
    let results = await envelopesApi.createEnvelope(
        process.env.ACCOUNT_ID, { envelopeDefinition: envelope });

    // Log the envelope results to the console
    console.log("envelope results ", results);

    // Generate a recipient view (the signing ceremony) for the user to sign the document
    let viewRequest = makeRecipientViewRequest(request.body.name, request.body.email);
    results = await envelopesApi.createRecipientView(process.env.ACCOUNT_ID, results.envelopeId,
        { recipientViewRequest: viewRequest });

    // Redirect the user to the signing ceremony URL
    response.redirect(results.url);
});

// Helper function to create an instance of the Envelopes API
function getEnvelopesApi(request) {
    let dsApiClient = new docusign.ApiClient();
    dsApiClient.setBasePath(process.env.BASE_PATH);
    dsApiClient.addDefaultHeader('Authorization', 'Bearer ' + request.session.access_token);
    return new docusign.EnvelopesApi(dsApiClient);
}

// Helper function to create an envelope from the user's form data
function makeEnvelope(name, email, company) {
    let env = new docusign.EnvelopeDefinition();
    env.templateId = process.env.TEMPLATE_ID;

    // Create a new text tab using the user's company name
    let text = docusign.Text.constructFromObject({
        tabLabel: "company_name", value: company
    });

    // Combine the existing and new tabs into a single Tabs object
    let tabs = docusign.Tabs.constructFromObject({
        textTabs: [text],
    });

    // Create a new template role for the user
    let signer1 = docusign.TemplateRole.constructFromObject({
        email: email,
        name: name,
        tabs: tabs,
        clientUserId: process.env.CLIENT_USER_ID,
        roleName: 'Applicant'
    });

    // Add the signer to the envelope and set the envelope status to "sent"
    env.templateRoles = [signer1];
    env.status = "sent";

    return env;
}

// Helper function to create a recipient view request for the user
function makeRecipientViewRequest(name, email) {

    let viewRequest = new docusign.RecipientViewRequest();

    viewRequest.returnUrl = "http://localhost:8000/success";
    viewRequest.authenticationMethod = 'none';

    // The recipient information must match the embedded recipient info used to create the envelope
    viewRequest.email = email;
    viewRequest.userName = name;
    viewRequest.clientUserId = process.env.CLIENT_USER_ID;

    return viewRequest
}


async function checkToken(request) {
    if (request.session.access_token && Date.now() < request.session.expires_at) {
        console.log("re-using access_token ", request.session.access_token);
    } else {
        console.log("generating a new access token");
        let dsApiClient = new docusign.ApiClient();
        dsApiClient.setBasePath(process.env.BASE_PATH);
        const results = await dsApiClient.requestJWTUserToken(
            process.env.INTEGRATION_KEY,
            process.env.USER_ID,
            "signature",
            fs.readFileSync(path.join(__dirname, "private.key")),
            3600
        );
        console.log(results.body);
        request.session.access_token = results.body.access_token;
        request.session.expires_at = Date.now() + (results.body.expires_in - 60) * 1000;
    }
}

app.get("/", async (request, response) => {
    await checkToken(request);
    response.sendFile(path.join(__dirname, "main.html"));
});

app.get("/success", (request, resposne) => {
    resposne.send("Success");
});

// https://account-d.docusign.com/oauth/auth?response_type=code&scope=signature%20impersonation&client_id=97fd5315-3046-4d18-a308-107a252d9167&redirect_uri=http://localhost:8000/


// Start the server
app.listen(8000, () => {
    console.log("server has started at port 8000 and the user is", process.env.USER_ID);
});


