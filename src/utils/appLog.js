const expressWinston = require('express-winston');
const { transports, format } = require('winston');

exports.appLog = expressWinston.logger({
    transports: [
        new transports.Console({
        format: format.combine(
            format.colorize(),
            format.simple(),
            format.prettyPrint(),
            format.timestamp()

        ,)
    })],
   
    });

    exports.stream = {
        write: function(message){
            logger.info(message);
            console.log('message =', message);
        }
    }
