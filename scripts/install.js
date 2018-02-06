const fs = require('fs');
const appRoot = require('app-root-path').toString()
const { COPYFILE_EXCL } = fs.constants;

fs.copyFile(`${__dirname}/webdash-config.json`, `${appRoot}/webdash.json`, COPYFILE_EXCL, (err) => {
    if (err) {
        //configuration file already exists, we can safely proceed
        return false;
    }
    console.log('Configuration file created at webdash.json');
});