import * as Discord from 'discord.js';
import {
  messageErrorVoiceChannel,
  messageQueueEmpty,
} from '../utils/message/messages';

export function queueList(message, serverQueue) {
  if (!serverQueue) {
    return messageErrorVoiceChannel(message);
  }
  if (serverQueue.songs.length == 1) {
    return messageQueueEmpty(message);
  } else {
    const list = buildQueue(serverQueue)
    const queueEmbed = new Discord.MessageEmbed()
      .setColor(`#0099ff`)
      .setTitle(`🎶 Lista 🎶 `)
      .setDescription(list);
    return message.channel.send(queueEmbed);
  }
}

function buildQueue(serverQueue) {
  let list = `🎵 - Solo se muestran las primeras **50** canciones - 🎵 \n\n`;
  let count = 0;
  for (let songs of serverQueue.songs) {
    count += 1;
    if (count < 51) {
      list += `${count}.- 🎵 ${songs.title} 🎵 \n`;
    }
  }
  return list;
}
