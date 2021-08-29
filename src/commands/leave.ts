import { queue } from '../index';
import * as Discord from 'discord.js';
import { messageErrorVoiceChannel } from '../utils/message/messages';

export function leave(message, serverQueue) {
  if (!serverQueue) {
    return messageErrorVoiceChannel(message);
  }
  serverQueue.voiceChannel.leave();
  queue.delete(message.guild.id);
  const leaveEmbed = new Discord.MessageEmbed()
    .setColor(`#000022`)
    .setTitle(`👋 Nos vemos! 👋`);
  return serverQueue.textChannel.send(leaveEmbed);
}
