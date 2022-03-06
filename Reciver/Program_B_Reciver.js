module.exports = {

    Program_B_Reciver :function Program_B_Reciver() { 

        const ProgramB = require('../Program_B/Program_B');
        const amqp = require('amqplib/callback_api');
        const global = require('../global.json');

        // Step 1: Create Connection
        amqp.connect(global.rabbitmqConnectionString, (connError, connection) => {
            if (connError) {
                throw connError;
            }
            // Step 2: Create Channel
            connection.createChannel((channelError, channel) => {
                if (channelError) {
                    throw channelError;
                }
                // Step 3: Assert Queue
                const QUEUE = 'NumberStoreA'
                channel.assertQueue(QUEUE);
                // Step 4: Receive Messages
                channel.consume(QUEUE, (msg) => {
                    ProgramB.PrgoramB(msg.content.toString())
                },
                
                {
                    noAck: true
                })
            })
        })
    }
}