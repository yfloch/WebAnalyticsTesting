
const assert = require('assert');
const puppeteer = require('puppeteer');

describe('basic test',  function(){
    this.timeout(5000);
    it('should produce data', async function(){

        const browser = await puppeteer.launch({
            headless : false
         });
         
        var pixelTrackingRecorder = require('../watools/pixelTrackingRecorder');
        var toolBox = require('../watools/toolBox');
        
        
        
        
        
        
        pixelTrackingRecorder.start();
        const page = await browser.newPage();
        await page.on('request', request => {
        
            if (toolBox.isAnalyticsUrl(request.url()))
              pixelTrackingRecorder.addRecord(request.url());
          });
        
        const urltotest ='https://www.lancome.fr/maquillage/teint/fonds-de-teint/teint-idole-ultra-wear/A00235-LAC.html';
        //const urltotest ='http://perdu.com';
        
        page.goto(urltotest);
        await toolBox.waitForPixelTracking(pixelTrackingRecorder,pixelTrackingRecorder.getNumberOfPixelTracking());
        assert.equal(pixelTrackingRecorder.getValueForTheKeyForTheLastRecord('sr'),'1920x1081');
        browser.close();




    //    assert.ok(1===1,'1 is not equal to 1')
    
    });




        
     
});
