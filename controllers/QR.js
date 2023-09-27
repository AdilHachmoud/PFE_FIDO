const path = require('path');
const qr = require('qrcode');


const createQR = async(req, res,next) => {


    // Text to encode in the QR code
    let credential = " uvuiviuv";


    // Options for the QR code generator
    const options = {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        quality: 0.92,
        margin: 1,
    };

    // Generate the QR code and save it to a file
    qr.toFile('./qrcode.png', credential, options, (err) => {
        if (err) throw err;
        console.log('QR code created!');
    });
    next();
}


module.exports = { createQR }