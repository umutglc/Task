module.exports = {
    PointStoreA :function PointStoreA() { 
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
            const QUEUE = 'PointStoreA'
            channel.assertQueue(QUEUE);
            // Step 4: Send message to queue
            channel.sendToQueue(QUEUE, Buffer.from("1"));
        })
    })
    },
    NumberStoreA :function NumberStoreA(number) { 
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
                // Step 4: Send message to queue
                channel.sendToQueue(QUEUE, Buffer.from(number.toString()));
            })
        })
    }

}