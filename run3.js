require('dns').lookup('https://www.google.com',function(err) {
    if (err && err.code == "ENOTFOUND") {
        console.log(err)
    } else {
        console.log('is good')
    }
})