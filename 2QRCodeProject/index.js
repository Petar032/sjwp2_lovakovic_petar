/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

const questions = [
    {
        type: 'input',
        name: 'url',
        message: 'Enter a URL to generate a QR code:'
    }
];

inquirer.prompt(questions).then(answers => {
    const url = answers.url;
    
    // Generate QR code
    const qrCode = qr.image(url, { type: 'png' });
    
    // Save QR code image
    qrCode.pipe(fs.createWriteStream('qrcode.png'));
    
    // Save URL to a text file
    fs.writeFile('url.txt', url, (err) => {
        if (err) throw err;
        console.log('URL saved to url.txt');
    });
});
