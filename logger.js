const {format} = require('date-fns');
const path = require('path');
const {v4: uuid} = require('uuid');
const fs = require('fs');

const logEvents = (message) =>{  
    const dateTime = `${format(new Date(), 'yyyymmdd\tHH:mm:ss')}` 
    const logItem = `${uuid()}\t${dateTime}\t${message}\n`

    if (!fs.existsSync(path.join(__dirname, 'logs'))){
     fs.mkdir(path.join(__dirname, 'logs'), (err) =>{
        if (err) console.log(err)
        }
    )}
        
    
    fs.appendFile(path.join(__dirname, 'logs', 'log-events.txt'), 
    logItem,(err) => {
        if (err) console.error(err);
    })




}

logEvents('sup nibba');
