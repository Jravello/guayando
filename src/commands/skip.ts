import {
  messageErrorVoiceChannel,
  messageQueueEmpty,
} from '../utils/message/messages';

export function skip(message, serverQueue) {
  if (!message.member.voice.channel) {
    return messageErrorVoiceChannel(message);
  }
  if (!serverQueue) {
    return messageQueueEmpty(message);
  }
  if (serverQueue.songs.length == 1) {
    return messageQueueEmpty(message);
  } else {
    serverQueue.connection.dispatcher.end();
  }
}
