const puppeteer = require('puppeteer');
var assert = require('assert');

//async function getBunny(){
const browser = await puppeteer.launch({
    headless : false
 });
 
var pixelTrackingRecorder = require('./watools/pixelTrackingRecorder');
var toolBox = require('./watools/toolBox');






pixelTrackingRecorder.start();
const page = await browser.newPage();
await page.on('request', request => {

    if (toolBox.isAnalyticsUrl(request.url()))
      pixelTrackingRecorder.addRecord(request.url());

      //do somthing;
     // console.log(request.url());
  });



const urltotest ='https://www.lancome.fr/maquillage/teint/fonds-de-teint/teint-idole-ultra-wear/A00235-LAC.html';
//const urltotest ='http://perdu.com';



page.goto(urltotest);
await toolBox.waitForPixelTracking(pixelTrackingRecorder,pixelTrackingRecorder.getNumberOfPixelTracking());

//}

//getBunny();