module.exports = {
    PointStoreB :function PointStoreB() { 
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
            const QUEUE = 'PointStoreB'
            channel.assertQueue(QUEUE);
            // Step 4: Send message to queue
            channel.sendToQueue(QUEUE, Buffer.from("1"));
        })
    })
    },
    NumberStoreB :function NumberStoreB(number) { 
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
                const QUEUE = 'NumberStoreB'
                channel.assertQueue(QUEUE);
                // Step 4: Send message to queue
                channel.sendToQueue(QUEUE, Buffer.from(number.toString()));
            })
        })
    }

}