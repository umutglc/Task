console.log("hello");
const Program_A_Reciver = require('./Reciver/Program_A_Reciver');
const Program_B_Reciver = require('./Reciver/Program_B_Reciver');
const Program_A_Sender = require('./Sender/Program_A_Sender');

Program_A_Reciver.Program_A_Reciver();
Program_B_Reciver.Program_B_Reciver();
Program_A_Sender.NumberStoreA("7");
