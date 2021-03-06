const puppeteer = require('puppeteer');
const pevents = [
    'response'
];

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    var stringConstructor = "test".constructor; 
    function whatIsIt(object) { 
        if (object.constructor === stringConstructor) {
            return "String";
        } 
    }
    // Log puppeter page notifications
    pevents.forEach((peventName) => {
        page.on('response', async (plistenerFunc) => {
            //console.log({ peventName, plistenerFunc });

            if (peventName == 'response') {
                await plistenerFunc.text()
                    .then((textBody) => {
                       if (whatIsIt(textBody)=='String' && textBody.substring(0,10)=='{"globalOb') console.log( textBody);
                        //console.log('textBody :', textBody);
                    }, (err) => {
                       // console.error(plistenerFunc, err);
                       // console.log(plistenerFunc, err);
                    })
                    ;
            }
        });
    });

    await page.goto('https://twitter.com/explore/tabs/trending', { waitUntil: 'networkidle2' });
    browser.close();
})();