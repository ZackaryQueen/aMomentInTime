
const chalk = require('chalk');

var moment = require('moment');
var myDate = new Date();
console.log(chalk.red(moment().format('dddd'))); // gives day
console.log(chalk.yellow(moment().format('LT')));  // gives hour
Time = myDate.getHours();

if(Time >= 12 && Time <= 5){
    console.log(chalk.blue.underline("Good Afternoon!"));

}
else if (Time > 0 && Time < 12){
    console.log(chalk.blue.underline("Good Morning!"));
}
else {
    console.log(chalk.blue.underline("Good Evening!"));
}