let opn = require('opn');

const COMMAND_PREFIX = '!';

module.exports = async (_, message) => {
  if(message.content.startsWith(COMMAND_PREFIX)) {
    let command = message.content.split('!').split(" ")[0];
    if(command==='build'){
      let champ = message.content.split(" ")[1];
      opn(`https://app.mobalytics.gg/champions/${champ}/build`);
    }
  }
}