module.exports = {

    Program_A_Reciver :function Program_A_Reciver() { 
        const ProgramA = require('../Program_A/Program_A');
        const amqp = require('amqplib/callback_api');
        const global = require('../global.json');

        // Step 1: Create Connection
        amqp.connect(global.rabbitmqConnectionString, (connError, connection) => {
            console.log("reciver");

            if (connError) {
                throw connError;
            }
            // Step 2: Create Channel
            connection.createChannel((channelError, channel) => {
                if (channelError) {
                    throw channelError;
                }
                // Step 3: Assert Queue
                const QUEUE = 'NumberStoreB'
                channel.assertQueue(QUEUE);
                // Step 4: Receive Messages
                channel.consume(QUEUE, (msg) => {
                    ProgramA.PrgoramA(msg.content.toString())
                },
                
                {
                    noAck: true
                })
            })
        })
    }
}