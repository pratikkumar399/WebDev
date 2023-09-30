const bitcoin = require('bitcoinjs-lib');
const bip39 = require('bip39');
const axios = require('axios');
const ecc = require('tiny-secp256k1')
const { BIP32Factory } = require('bip32')
// You must wrap a tiny-secp256k1 compatible implementation
const bip32 = BIP32Factory(ecc)

// Initialize an empty wallet store.
const wallets = [];

const network = bitcoin.networks.bitcoin;

// Function to create a new wallet and store it.
function createWallet() {
    const mnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const child = root.derivePath("m/44'/0'/0'/0/0"); // BIP44 path for Bitcoin

    const address = bitcoin.payments.p2pkh({ pubkey: child.publicKey }).address;

    const wallet = {
        mnemonic,
        address,
        balance: 0,
        transactions: [],
        child, // Store the child key for future address generation
    };

    wallets.push(wallet);

    return wallet;
}

// Function to import a wallet from a mnemonic.
function importWallet(mnemonic) {
    const seed = bip39.mnemonicToSeedSync(mnemonic);
    const root = bip32.fromSeed(seed, network);
    const child = root.derivePath("m/44'/0'/0'/0/0"); // BIP44 path for Bitcoin

    const address = bitcoin.payments.p2pkh({ pubkey: child.publicKey }).address;

    const wallet = {
        mnemonic,
        address,
        balance: 0,
        transactions: [],
        child, // Store the child key for future address generation
    };

    wallets.push(wallet);

    return wallet;
}

// Function to get the Bitcoin balance of a wallet.
async function getBalance(wallet) {
    try {
        const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${wallet.address}/balance`);
        return response.data.balance;
    } catch (error) {
        console.error('Error fetching balance:', error.message);
        return 0;
    }
}

// Function to get the list of Bitcoin transactions for a wallet.
async function getTransactions(wallet) {
    try {
        const response = await axios.get(`https://api.blockcypher.com/v1/btc/main/addrs/${wallet.address}/full`);
        return response.data.txrefs; // Use txrefs instead of txs for transactions
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        return [];
    }
}

// Function to generate an unused Bitcoin address for a wallet.
function generateUnusedAddress(wallet) {
    const lastUsedIndex = wallet.transactions.length;
    const child = wallet.child.derive(lastUsedIndex);
    const address = bitcoin.payments.p2pkh({ pubkey: child.publicKey }).address;
    return address;
}

// Example usage:
(async () => {
    const newWallet = createWallet();
    console.log('New Wallet:', newWallet);

    const importedWallet = importWallet('your imported mnemonic here');
    console.log('Imported Wallet:', importedWallet);

    const balance = await getBalance(newWallet);
    console.log('Balance of New Wallet:', balance);

    const transactions = await getTransactions(newWallet);
    console.log('Transactions of New Wallet:', transactions);

    const unusedAddress = generateUnusedAddress(newWallet);
    console.log('Unused Address:', unusedAddress);
})();
