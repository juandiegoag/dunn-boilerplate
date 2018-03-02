const chalk = require('chalk');
const figlet = require('figlet');
const args = require('minimist')(process.argv.slice(2));

/**
 * According to the arguments, do something:
 */
const actionPicker = () => {
  if (args.h || args.help) {
    console.log(chalk.yellow(figlet.textSync('Dunn', { horizontalLayout: 'full' }))); // console title
    require('./commands/help/help').help();
  } else if (args.p || args.preview) {
    require('./commands/preview/preview').preview();
  } else if (args.b || args.build) {
    require('./commands/build/build').build();
  } else if (args.d || args.deploy) {
    require('./commands/deploy/deploy').deploy();
  } else {
    console.log(chalk.yellow(figlet.textSync('Dunn', { horizontalLayout: 'full' })));// console title
    require('./commands/help/help').help();
  }
};

module.exports = {
  actionPicker,
};
