const { ApiPromise, WsProvider } = require("@polkadot/api");
const wsProvider = new WsProvider('wss://rococo-rpc.polkadot.io');
module.exports.API = ApiPromise.create({ provider: wsProvider });

this.API.then(async (api) => {
    const chain = await api.rpc.system.chain();
    const lastHeader = await api.rpc.chain.getHeader();
    
     console.log(
      `Connected to ${chain.toHuman()} with genesis Hash: ${api.genesisHash.toHex()}, latest block #${
        lastHeader.number
      } has hash ${lastHeader.hash}`
    );
});

