require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hover enrich sun food charge razor mushroom proof gown light army gather'; 
let testAccounts = [
"0xd66031d5870cda941c569632e43aaa6768f6cb74361d6ff03da3468f1b307f99",
"0x60777aa044896bceae1e77f70ee52dd4ea60ebd4955d342d6eb20bf43dcee102",
"0x30b6bd45e4e6c96537f10d5335014438ecc19c44d2c279dd4ea4b2b3d78e74b9",
"0x72e63e4ff570240d092c366b230282d59df93e561e93fe731a1ad8d077c72ad0",
"0x729f40c774bcd2abc317fc572216ae188589bdd7a318ed8a7b6dcdd17d4ae9fa",
"0xe209540dec31a923b9550873893ebc8f33138a1f76422267a6b7a30753f7dada",
"0x7ae05d1c29b525f016b68f17e25dc5650464df7a9e672b6c9e742579e5c04537",
"0x7e1fbb1462c1c97a0d233610603d1438e641520ba52bf0c3b8609106fb1f15e5",
"0x1ff7d9b3c91c317d6f4f91d34b31756ab27c6b3bd49800e9d47d34458c38d8be",
"0x51553d66cbb1ba8a3b602487ff6ae5a532d0b1fdba94bfc6ce87ab61651d3612"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

