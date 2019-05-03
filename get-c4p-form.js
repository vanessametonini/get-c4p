const fetch = require('node-fetch');
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://nordicjs.com/call-for-speakers/signup');
  

  await browser.close();
})();



/* 
fetch('https://nordicjs.com/call-for-speakers/signup')
  .then(
    response => response.text()
  )
  .then(
    document => {
      //getFormLabels(getFormLabels)
    }

  )
 */
const getFormLabels = (document) => {

  const form = document.querySelector('iframe').contentWindow.document;
  const labelList = form.querySelectorAll('label');

  return labelList;
}

const logEachName = (labelList) => {

  for (let label of labelList) 
    return label.innerText
  
}

const logAllNamesOnce = (labelList) => {
  let everything = '';

  for (let label of labelList) {
    everything += label.innerText + '\n'
  }

  return everything;
}
