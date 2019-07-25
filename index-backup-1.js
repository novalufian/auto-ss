const rp = require('request-promise');
const $ = require('cheerio');
const fs = require("fs");
const puppeteer = require('puppeteer');

const _m_template = require('./app/libs/dfp-template');
const _m_t = new _m_template();

var chanel = "merdeka";

const url = `https://m.${chanel}.com`;

var gotoscreenshot = rp(url)
  .then(function(html){
    //success!
    var _html =  split_html(html, chanel);
    run_puppeteer(_html)

  })
  .catch(function(err){
    //handle error
    console.log('connection to slow ')
  });




function run_puppeteer(html) {
  (async () => {
    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();

    await page.setViewport({ width: 360, height: 740 });
    // set content html string
    await page.setContent(html)
    // take screen shot
    await page.screenshot({path: `ss/KLY-${chanel}-screenshot-${Math.floor(Math.random(1000, 10000) * 100000)}.png`});

    await browser.close();
  })();
}

function split_html(html, chanel) {
    switch (chanel) {
      case "kapanlagi":
        var a = html.split("var PWT = {}");
        var b = a[1].split("<style>");
        var c = b.split("</body>")
        return a[0] + "</script><style>" + c[0] + c[1]; 
        break;

      case "merdeka":
        var a = html.split("var PWT = {}");
        // var b = a[1].split("<style>");
        var b = a[1].split("insertion-oop\")});");
        var c = b[1].split("</body>")
        return a[0] + "</script>" + c[0] +_m_t.bottomframe()+"</body>"+ c[1]; 
        break;
      
      case "fimela":
        var a = html.split("var PWT={}");
        var b = a[1].split("templateID : 99 ");
        return a[0] + "</script>" + b[1]; 
        break;

      case "otosia":
        var a = html.split("String.prototype.klyFiltering");
        var b = a[1].split("</script>");
        return a[0] + "</script><style>" + b[1]; 
        break;

      case "liputan6":
        var a = html.split("String.prototype.klyFiltering");
        var b = a[1].split("googletag.display('div-gpt-ad-liputan6-dfp-exposer-oop');");
        var c = b[1].split("</body>")
        return a[0] + "</script>" + c[0] +_m_t.bottomframe()+"</body>"+ c[1]; 
        break;

      case "bolacom":
        var a = html.split("String.prototype.klyFiltering");
        var b = a[1].split("</script></div><div class=\"channel-ad");
        return a[0] + "</script></div><div class=\"channel-ad" + b[1]; 
        break;

      case "bolanet":
        break;

       case "dream":
        var a = html.split("String.prototype.klyFiltering");
        var b = a[1].split("ogletag.display(\"div-gpt-ad-dream-insertion-oop\")});");
        // var c = b[1].split("</body>");

        // return a[0] + "</script>" + c[0] + "</body>" + c[1] ; 
        return a[0] + "</script>" + b[1] ; 
        break;

      default:
        // statements_def
        break;
    }
}