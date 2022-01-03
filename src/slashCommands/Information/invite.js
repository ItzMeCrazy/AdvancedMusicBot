const { MessageEmbed, CommandInteraction, Client, MessageButton, MessageActionRow } = require("discord.js")

module.exports = {
    name: "invite",
    description: "get my invite link",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
    const row = new MessageActionRow()
			.addComponents(
        new MessageButton()
    .setLabel("Invite")
    .setStyle("LINK")
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot`),
			new MessageButton()
    .setLabel("Youtube")
    .setStyle("LINK")
    .setURL("https://youtube.com/channel/UCNsN0YD5FG2EoK4fEHtcEyA"),
    new MessageButton()
    .setLabel("Support")
    .setStyle("LINK")
    .setURL("https://discord.gg/gfcv94hDhv")
			);

          const mainPage = new MessageEmbed()
            .setAuthor('Candy Music', 'https://media.discordapp.net/attachments/915250217891270656/926747329573290035/images_4.jpeg')           .setThumbnail('https://media.discordapp.net/attachments/915250217891270656/926747329573290035/images_4.jpeg')
             .setColor("WHITE")
            .addField('invite Candy Music', `[Here](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=36768832&scope=applications.commands%20bot)`, true)
           await interaction.followUp({embeds: [mainPage], components: [row]})
    }
		}