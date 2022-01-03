const { MessageEmbed, MessageActionRow, MessageButton, CommandInteraction, Client } = require("discord.js");

module.exports = {
    name: "help",
    description: "Return all commands, or one specific command",
    owner: false,

    /**
     * @param {Client} client
     * @param {CommandInteraction} interaction
     */

    run: async (client, interaction, prefix) => {
        await interaction.deferReply({
          ephemeral: false
        });
  const embed = new MessageEmbed()
    .setTitle(`${client.user.username} Help`)
    .setDescription(`Hello **<@${interaction.member.user.id}>**, I am <@${client.user.id}>.  \n\nA Discord Music Bot With Many Awesome Features, \nSupport Many Sources \n\n\<a:musiccrazy:926743240596668437>\ ・ Music\n\<a:informationD:886168903934439465>\ ・ information\n\<:form:887572159734620220>\ ・ Config\n\n *Choose an category below button to see commands  <a:TickDEP:914432290623475723>* \n\n`)
    .setThumbnail(client.user.displayAvatarURL())
    .setColor(client.embedColor)
    .setTimestamp()
    .setFooter(`Requested by: ${interaction.member.user.username}`, interaction.member.user.displayAvatarURL({ dynamic: true}))
    
    let but1 = new MessageButton().setCustomId("home").setEmoji("🏠").setLabel("Home").setStyle("SECONDARY")
  
    let but2 = new MessageButton().setCustomId("music").setEmoji("926743240596668437").setLabel("Music").setStyle("SECONDARY")
  
    let but3 = new MessageButton().setCustomId("info"). setEmoji("886168903934439465").setLabel("Info").setStyle("SECONDARY");

    let but4 = new MessageButton().setCustomId("config"). setEmoji("887572159734620220").setLabel("Config").setStyle("SECONDARY");

     let _commands;
     let editEmbed = new MessageEmbed();
     
     await interaction.editReply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] });

    const collector = interaction.channel.createMessageComponentCollector({
      filter: (b) => {
      if(b.user.id === interaction.member.user.id) return true;
       else {
     b.reply({ ephemeral: true, content: `Only **${interaction.member.user.tag}** can use this button, if you want then you've to run the command again.`}); return false;
           };
      },
      time : 60000,
      idle: 60000/2
    });
    collector.on("end", async () => {
        await interaction.editReply({ components: [new MessageActionRow().addComponents(but1.setDisabled(true), but2.setDisabled(true), but3.setDisabled(true), but4.setDisabled(true))] }).catch(() => {});
     });
    collector.on('collect', async (b) => {
        if(b.customId === "home") {
           return await interaction.editReply({ embeds: [embed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
        if(b.customId === "music") {
         _commands = client.slashCommands.filter((x) => x.category && x.category === "Music").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(`
> 24/7
> join
> leave
> play
> filters
> pause 
> queue
> clearqueue 
> remove
> resume
> loop
> seek
> shuffle
> skip
> skipto
> stop
> volume
> nowplaying 
`).setTitle("Music Commands")
 
           return await interaction.editReply({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
        }
         if(b.customId == "info") {
         _commands = client.slashCommands.filter((x) => x.category && x.category === "Information").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(`
> about
> help
> invite 
> node
> ping
> status`).setTitle("Information Commands")
          return await interaction.editReply({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         }
         if(b.customId == "config") {
         _commands = client.slashCommands.filter((x) => x.category && x.category === "Config").map((x) => `\`${x.name}\``);
             editEmbed.setColor(client.embedColor).setDescription(`> setprefix`).setTitle("Config Commands")
          return await interaction.editReply({ embeds: [editEmbed], components: [new MessageActionRow().addComponents(but1, but2, but3, but4)] })
         
        }
     });
   }
 }
