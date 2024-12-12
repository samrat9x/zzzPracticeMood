const fs = require('fs');
const ourReadStream = fs.createReadStream(`${__dirname}/randomtext.txt`);

ourReadStream.on('data', (chunk) => {
    console.log(chunk.toString());
});
