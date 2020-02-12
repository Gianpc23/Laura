const COMMAND_PREFIX = '!';
module.exports = async (client, message) => {
  if(message.content.startsWith(COMMAND_PREFIX)) {
    const command = message.content.split('!').split(" ")[0];
    if(command==='build'){
      var opn = require('opn');
      const champ = message.content.split('!').split(" ")[1];
      await opn(`https://app.mobalytics.gg/champions/${champ}/build`);
      message.reply('Pagina abierta');
    }
    
  }
}