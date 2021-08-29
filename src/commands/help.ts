import * as Discord from 'discord.js';

export function help(message) {
  const helpList = `* -<play => Reproduce una Cancion, Playlist, Album, Artista de Spotify o Youtube [No Reproduce Radios, Mixes o Podcasts] \n\n
                      * -<stop & -<leave => Para al bot, elimina la lista y retira del canal al bot\n\n
                      * -<skip => Salta a la proxima Canción \n\n
                      * -<queue => Muestra la Lista de las Canciones \n\n`;
  const helpAbList = `* -<play => -<p \n\n
                      * -<stop | -<leave => -<st | -<l\n\n
                      * -<skip => -<s \n\n
                      * -<queue => -<q \n\n`;
  const queueHelpEmbed = new Discord.MessageEmbed()
    .setColor(`#0099ff`)
    .setTitle(`🛡️ Lista 🛡️`)
    .setDescription(helpList + helpAbList);
  return message.channel.send(queueHelpEmbed);
}
