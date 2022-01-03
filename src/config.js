module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    ownerID: process.env.OWNERID || "820928134886326272", //your discord id
    SpotifyID: process.env.SPOTIFYID || "590f57260df4421dace95899e48b36a0", // spotify client id
    SpotifySecret: process.env.SPOTIFYSECRET || "eb05bc23a18b43e08ea7191dfa7eb16a", // spotify client secret
    mongourl: process.env.MONGO_URI || "mongodb+srv://rlx:rlx@rlx4.lxsal.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", // MongoDb URL
    embedColor: process.env.COlOR || "WHITE", // embed colour
    logs: process.env.LOGS || "919252829531680799", // channel id for guild create and delete logs 

  nodes: {
     
      host: "disbotlistlavalink.ml",
      port: 443,
      password: "LAVA",
      id: "DisBotlist Lavalink",
      retryDelay: 3000,
      secure: true
    
    },
 
}
