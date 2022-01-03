const mySecret = process.env['TOKEN']

const MusicBot = require("./src/structures/MusicClient");
const client = new MusicBot();

client.connect()

module.exports = client; 
