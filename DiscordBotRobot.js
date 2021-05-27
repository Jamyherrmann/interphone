const { Client, MessageEmbed } = require("discord.js");
const { TouchBarSpacer } = require("electron");
// const fs = require("fs");
//const robot = require("robotjs");

class DiscordBotRobot {
  constructor(token, win) {
    console.log("Bot start");

    this.win = win;
    this.client = new Client();
    this.client.on("ready", this.onReady.bind(this));
    this.client.on("message", this.onMessage.bind(this));
    this.client.login(token);
  }

  onReady() {
    console.log("BOT READY");
  }

  onMessage(message) {
    const receivedEmbed = message.embeds[0];
    if (receivedEmbed) {
      this.win.webContents.send("messageDiscord", receivedEmbed);
    } else {
      this.win.webContents.send("messageDiscord", message.content);

      // START centrer pour commencer la partie
      if (message.content.includes("start")) {
      }

      //->
      if (
        message.content.includes("0") ||
        message.content.includes("1") ||
        message.content.includes("2") ||
        message.content.includes("3") ||
        message.content.includes("4") ||
        message.content.includes("5") ||
        message.content.includes("6") ||
        message.content.includes("7") ||
        message.content.includes("8") ||
        message.content.includes("9")
      ) {
        let messageClean = message.content.replace(/^\D+/g, "");
        let number = parseInt(messageClean);
        console.log("message reçu");
      }
    }
  }
}

module.exports = { DiscordBotRobot };
