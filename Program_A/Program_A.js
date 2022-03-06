const SenderA = require('../Sender/Program_A_Sender');
module.exports = {
    PrgoramA : function PrgoramA(number) { 

    for(var i = 0; i<5;i++){
        var rndNumber = Math.floor(Math.random() * 10);
        if(number.toString() === rndNumber.toString()){
            SenderA.PointStoreA();
            break;
        }
    }
    var rndNumber = Math.floor(Math.random() * 10);
    SenderA.NumberStoreA(rndNumber.toString());
    
    }
}