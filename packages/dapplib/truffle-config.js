require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski struggle cost remain collect hover process sure gesture'; 
let testAccounts = [
"0xd97839ef1de19be011d0c63dba8728824c72d1a32a217c79f1d96b2199095984",
"0x2bf6f9c66e25481cdcf7c5a815b78b90e2972aee20d55aa9f672530c65805453",
"0x1a82047435ada01f317a027ee10b6ad8de0910f0ecc2c4853b64cab964e931be",
"0xe6401da4c888a087b336f8aff4d999dbd7bc4e79a6efcad2c510064cdb17d08f",
"0x915ceef86bd120ba70e0896785bd965d3551c9ca797c2811184fd4a8d0824f93",
"0x12acde62d1f94de58ba8dbf4dd819f49fdd1c10765472cf17dfe201113b59317",
"0x434745b66aa8b061ee4dcaeb221e7087c77a1e7ef351dc24fb538eb8f46fb8ab",
"0x383661bf63daa4a11a04f6fac35752a3ab502eb0352fc64a39cee8063cb01778",
"0xb2b124d810723d4073a6100b60d8209216da7cb691942f912ffcabc84c6fec62",
"0x0214a158674aa273f7f245c790482fc5ed463412e173d7b1f7982222b7287ef1"
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
            version: '^0.5.11'
        }
    }
};
