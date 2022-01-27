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
    var counter = 0;
    // Log puppeter page notifications
    pevents.forEach((peventName) => {
        page.on('response', async (plistenerFunc) => {
            //console.log({ peventName, plistenerFunc });
            if (peventName == 'response') {
                await plistenerFunc.text()
                    .then((textBody) => {
                        if (whatIsIt(textBody) == 'String' && textBody.substring(0, 10) == '{"globalOb') {
                           if(counter==1) console.log(textBody);
                           counter++;
                        } 
                    }, (err) => {
                        // console.error(plistenerFunc, err);
                        // console.log(plistenerFunc, err);
                    })
                    ;
            }
        });
    });
    var args = process.argv.slice(2);
    await page.goto('https://twitter.com/explore', { waitUntil: 'networkidle2' });
    await page.waitForSelector('Input');

    const searchInput = await page.$('Input');
    await searchInput.type(args[0]);
    page.keyboard.press('Enter');
    await page.waitForNetworkIdle();
    browser.close();
})();