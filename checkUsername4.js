const rp = require('request-promise');
var randomstring = require("randomstring");

async function checkUsername(username) {
    const url = "https://www.instagram.com/"+username+"/"
    const opt = {
        url: url,
		method: 'GET'
    };
    try {
        const account = await rp(opt);
        console.log(username + ' => Found - Sudah terpakai !');
    } catch (e) {
        e = username + ' => Not Found - Bisa dipakai !'
        console.log(e);
    }
}

for(let i = 0; i < 100; i++) {
    var username = randomstring.generate({
        length: 5,
        charset: 'alphabetic',
        capitalization: 'lowercase'
    });
    checkUsername(username);
}
