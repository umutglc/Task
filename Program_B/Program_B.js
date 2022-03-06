const SenderB = require('../Sender/Program_B_Sender');
module.exports = {
    PrgoramB : function PrgoramB(number) { 

    for(var i = 0; i<5;i++){
        var rndNumber = Math.floor(Math.random() * 10);
        if(number.toString() === rndNumber.toString()){
            SenderB.PointStoreB();
            break;
        }
    }
    var rndNumber = Math.floor(Math.random() * 10);
    SenderB.NumberStoreB(rndNumber.toString());
    
    }
}