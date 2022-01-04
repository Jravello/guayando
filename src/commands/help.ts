import * as Discord from 'discord.js';

export function help(message) {
  const helpList = `🔊 -<play ***argumento,cancion o url*** => Reproduce una Cancion, Playlist, Album, Artista de Spotify o Youtube [No Reproduce Radios, Mixes o Podcasts] \n
                      🔊 -<stop & -<leave => Para al bot, elimina la lista y retira del canal al bot\n
                      🔊 -<skip => Salta a la proxima Canción \n
                      🔊 -<queue => Muestra la Lista de las Canciones `;
  const helpAbList = `\n\n 📣 Abreviaciones 📣 \n\n
                      🔊 -<play => -<p \n
                      🔊 -<stop | -<leave => -<st | -<l\n
                      🔊 -<skip => -<s \n
                      🔊 -<queue => -<q \n\n`;
  const queueHelpEmbed = new Discord.MessageEmbed()
    .setColor(`#0099ff`)
    .setTitle(`🛡️ Lista 🛡️ \n\n`)
    .setDescription(helpList + helpAbList);
  return message.channel.send(queueHelpEmbed);
}
