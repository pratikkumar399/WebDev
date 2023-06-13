import React from 'react';

const jobs = [
    {
        "job_id": "1001",
        "job_title": "Frontend Developer",
        "job_category": "Information Technology",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We're seeking a skilled frontend developer to work on our web and mobile apps.",
        "entry_level": false
    },
    {
        "job_id": "1002",
        "job_title": "Backend Developer",
        "job_category": "Information Technology",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We're looking for a talented backend developer to build and maintain our server-side applications.",
        "entry_level": false
    },
    {
        "job_id": "1003",
        "job_title": "Product Manager",
        "job_category": "Business Development",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We need an experienced product manager to oversee the development of our new product line.",
        "entry_level": false
    },
    {
        "job_id": "1004",
        "job_title": "Sales Representative",
        "job_category": "Sales",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We're seeking a dynamic sales representative to promote our products and services.",
        "entry_level": true
    },
    {
        "job_id": "1005",
        "job_title": "Graphic Designer",
        "job_category": "Design",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We're looking for a creative graphic designer to create visually appealing designs for our marketing materials.",
        "entry_level": false
    },
    {
        "job_id": "1006",
        "job_title": "Data Analyst",
        "job_category": "Analytics",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We need a data analyst to collect, analyze, and interpret complex data sets to help drive business decisions.",
        "entry_level": true
    },
    {
        "job_id": "1007",
        "job_title": "Customer Support Representative",
        "job_category": "Customer Service",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We're seeking a friendly and customer-focused support representative to help resolve customer issues.",
        "entry_level": true
    },
    {
        "job_id": "1008",
        "job_title": "Marketing Coordinator",
        "job_category": "Marketing",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We need a marketing coordinator to assist in the planning and execution of our marketing campaigns.",
        "entry_level": true
    },
    {
        "job_id": "1009",
        "job_title": "Human Resources Manager",
        "job_category": "Human Resources",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We're seeking an experienced HR manager to oversee all aspects of our human resources department.",
        "entry_level": false
    },
    {
        "job_id": "1010",
        "job_title": "Content Writer",
        "job_category": "Marketing",
        "company_image": "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "job_description": "We're looking for a talented content writer to create",
        "entry_level": false
    }
]

const JobCard = ({ job }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full h-40 bg-cover" style={{ backgroundImage: `url(${job.company_image})` }}></div>
            <div className="p-4">
                <h2 className="font-bold text-2xl mb-2">{job.job_title}</h2>
                <p className="text-gray-700">{job.job_category}</p>
                <p className="text-gray-700 text-sm mt-2">{job.job_description}</p>
                <p className="text-gray-700 text-sm mt-2">Entry level: {job.entry_level ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
};

const JobsList = () => {
    return (
        <div className="container mx-auto flex flex-wrap py-6">
            {jobs.map(job => <div className="w-full md:w-1/2 lg:w-1/3 px-2 mb-4"><JobCard key={job.job_id} job={job} /></div>)}
        </div>
    );
};

export default JobsList;
