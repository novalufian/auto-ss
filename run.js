const puppeteer = require('puppeteer');
const rp = require('request-promise');
const fs = require("fs");

// 
const _template = require('./app/libs/dfp-template');
const _config = require('./app/libs/config.json');


// init 
get_config("mobile","liputan6","liftads")

function get_config(type , site, placement) {

    var url = get_url(type, site);
    // config.kly_config["type"]["site"]
    var template = new _template(type, site, placement);
    var creative = template.init();
    // console.log(template.init())

    rp(url)
        .then( function(html){
            //success!
            var _html =  split_html(html, site, creative);
            run_puppeteer(_html, site, type, placement)

            fs.writeFile(`chanel/${site}.html`, _html, (err) => {
                if (err) console.log(err);
                console.log(`Successfully Written to File ${site}.`);
            });
        })
        .catch(function(err){
            console.log(err)
        });

}

function get_url(type ,site) {
    switch (site) {
        case "kapanlagi":
            return (type == "mobile") ? "https://m.kapanlagi.com" : "https://www.kapanlagi.com"
            break;
        case "merdeka":
            return (type == "mobile") ? "https://m.merdeka.com" : "https://www.merdeka.com"
            break;
        case "otosia":
            return (type == "mobile") ? "https://m.otosia.com" : "https://www.otosia.com"
            break;
        case "liputan6":
            return (type == "mobile") ? "https://m.liputan6.com" : "https://www.liputan6.com"
            break;
        case "fimela":
            return (type == "mobile") ? "https://m.fimela.com" : "https://www.fimela.com"
            break;
        case "bolacom":
            return (type == "mobile") ? "https://m.bola.com" : "https://www.bola.com"
            break;
        case "bolanet":
            return (type == "mobile") ? "https://m.bola.net" : "https://www.bola.net"
            break;
        case "dream":
            return (type == "mobile") ? "https://m.dream.co.id" : "https://www.dream.co.id"
            break;
    }
}

function run_puppeteer(html, site, type, placement) {
    (async () => {
        const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
        const page = await browser.newPage();
        await page.setViewport({ width: 360, height: 740 });
        // set content html string
        await page.setContent(html)
        // take screen shot
        console.log(html)
        await page.screenshot({path: `ss/KLY__${type}__${site}__${placement}__screenshot-${Math.floor(Math.random(1000, 10000) * 100000)}.png`});

        await browser.close();
    })();
}

function split_html(html, site, creative) {
    switch (site) {
        case "kapanlagi":
            var a = html.split("var PWT = {}");
            var b = a[1].split("<style>");
            var c = b[1].split("</body>");
            return a[0] + "</script><style>" + c[0]+ creative + c[1]; 
            break;

        case "merdeka":
            var a = html.split("var PWT = {}");
            var b = a[1].split("insertion-oop\")});");
            var c = b[1].split("</body>")
            return a[0] + "</script>" + c[0] +creative+"</body>"+ c[1]; 
            break;

        case "fimela":
            var a = html.split("var PWT={}");
            var b = a[1].split("templateID : 99 ");
            var c = b[1].split("</body>")
            return a[0] + "</script>" + c[0] +creative+"</body>"+ c[1]; 
            break;

        case "otosia":
            var a = html.split("String.prototype.klyFiltering");
            var b = a[1].split("</script>");
            var c = b[1].split("</body>")
            return a[0] + "</script><style>" + c[0] +creative+"</body>"+ c[1];; 
            break;

        case "liputan6":
            var a = html.split("String.prototype.klyFiltering");
            var b = a[1].split("googletag.display('div-gpt-ad-liputan6-dfp-exposer-oop');");
            var c = b[1].split("</body>")
            return a[0]  + c[0] +creative+"</body>"+ c[1]; 
            break;

        case "bolacom":
            var a = html.split("String.prototype.klyFiltering");
            var b = a[1].split("</script></div><div class=\"channel-ad");
            var c = b[1].split("</body>")
            return a[0] + "</script></div><div class=\"channel-ad" + c[0] +creative+"</body>"+ c[1]; 
            break;

        case "bolanet":
            break;

        case "dream":
            var a = html.split("String.prototype.klyFiltering");
            var b = a[1].split("ogletag.display(\"div-gpt-ad-dream-insertion-oop\")});");
            var c = b[1].split("</body>");
            return a[0] + "</script>" + c[0] +creative+"</body>"+ c[1]; ; 
            break;

    }
}