var config = require('./config.json'); 
class mobile_dfp_template {

    constructor(type, site, placement) {
        this.placementDiv = config.kly_config[type][site][placement];
        this.site = site;
        this.placement = placement;
    }

    init(){
        switch (this.placement) {
            case "topframe":
                return this.topframe();
                break;
            case "bottomframe":
                return this.bottomframe();
                break;
            case "showcase":
                return this.showcase();
                break;
            case "wallboard":
                return this.wallboard();
                break;
            case "headline":
                return this.headline();
                break;
            case "headline_grow":
                return this.headline_grow();
                break;
            case "exposer":
                return this.exposer();
                break;
            case "liftads":
                return this.liftads();
                break;
            case "floating_pin":
                return this.floating_pin();
                break;
            case "seamless":
                return this.seamless();
                break;
            default:
                // statements_def
                break;
        }
    }

    topframe(){
        var template = `
            <script>
                setTimeout(function () {
                    document.documentElement.scrollTop = document.getElementById("`+this.placementDiv+`").offsetTop - 100;
                    var _tid = document.getElementById("`+this.placementDiv+`");
                    var _t = document.getElementById("preview-template-`+this.placementDiv+`");
                    _tid.appendChild(_t);
                }, 500)
            </script>
            <div id="preview-template-`+this.placementDiv+`">
                <style>
                    #div-gpt-ad-kapanlagi-topfrm-oop {
                        background: none !important;
                    }
                </style>
                <style>
                    #topframe {
                        position: relative;
                        overflow: hidden;
                        width: 100%;
                    }

                    #topframe-ox {
                        position: relative;
                        text-align: center;
                        width: 100%;
                        height: 0;
                        overflow: hidden;
                        transition: padding .5s .25s;
                        -webkit-transition: padding .5s .25s;
                        -moz-transition: padding .5s .25s;
                        -o-transition: padding .5s .25s;
                        z-index: 1;
                    }

                    #topframe.expand #topframe-ox {
                        transition: padding .5s;
                        -webkit-transition: padding .5s;
                        -moz-transition: padding .5s;
                        -o-transition: padding .5s;
                    }

                    #topframe-img-container-absolute {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        z-index: -99;
                    }

                    #topframe-img-container {
                        position: fixed;
                        left: 0;
                        z-index: -99;
                        width: 100%;
                        overflow: hidden;
                        transform: translate3d(0, 0, 0);
                        -webkit-transform: translate3d(0, 0, 0);
                        -moz-transform: translate3d(0, 0, 0);
                        -o-transform: translate3d(0, 0, 0);
                        -webkit-transition: top .5s .25s;
                        -moz-transition: top .5s .25s;
                        -o-transition: top .5s .25s;
                        transition: top .5s .25s;
                    }

                    #topframe.expand #topframe-img-container {
                        -webkit-transition: top .5s;
                        -moz-transition: top .5s;
                        -o-transition: top .5s;
                        transition: top .5s;
                    }

                    .topframe-img {
                        position: relative;
                        margin: 0 auto;
                        max-width: 100%;
                        display: block;
                    }

                    #topframe-close-btn {
                        background-color: #F44336;
                        color: #fff;
                        height: 42px;
                        padding: 0;
                        margin: 0;
                        font-size: 0;
                        width: 42px;
                        box-sizing: border-box;
                        position: absolute;
                        bottom: -150px;
                        right: 0;
                        white-space: nowrap;
                        font-family: arial, sans-serif;
                        z-index: 2;
                        text-align: center;
                        transition: bottom .5s;
                        -webkit-transition: bottom .5s;
                        -moz-transition: bottom .5s;
                        -o-transition: bottom .5s;
                    }

                    #topframe-close-btn:after {
                        content: "";
                        display: inline-block;
                        vertical-align: middle;
                        width: 0;
                        height: 100%;
                        padding: 0;
                        margin: 0;
                        position: relative;
                    }

                    #topframe-close-btn img {
                        width: 18px;
                        display: inline-block;
                        vertical-align: middle;
                    }

                    #topframe.expand #topframe-close-btn {
                        bottom: 0;
                        transition: bottom .5s .25s;
                        -webkit-transition: bottom .5s .25s;
                        -moz-transition: bottom .5s .25s;
                        -o-transition: bottom .5s .25s;
                    }

                    #topframe-desturl {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        z-index: 1;
                    }

                    #topframe-img-wrapper-small {
                        position: relative;
                    }

                    #topframe-img-small {
                        width: 100%;
                    }

                    .dfp-tf-animate {
                        left: 0px !important;
                        -webkit-transform: scale(1) !important;
                        transform: scale(1) !important;
                    }
                </style>
                <div id="topframe"> <a id="topframe-desturl" target="_blank" href="https://m.merdeka.com"> </a> <a id="topframe-close-btn"> <img class="img-color" id="topframe-close-btn-img" src="https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/img/close-new.png" alt="" style="filter: grayscale(0%); opacity: 1;"> </a>
                    <div id="topframe-ox" style="padding-bottom: 31.25%;">
                        <div id="topframe-img-container-absolute">
                            <div id="topframe-img-container" style="top: 0px;">
                                <div id="topframe-img-wrapper-small"> <img class="img-color" src="https://www.newshub.id/ads-gallery/media/mobile/top-frame-parallax/top-frame-paralax.jpg" id="topframe-img-small" alt="" style="filter: grayscale(0%); opacity: 1; max-height: unset;" border="0"> </div>
                            </div>
                        </div>
                        <div id="beacon_topframe" style="position: absolute; left: 0px; top: 0px; visibility: hidden;"> <img class="img-color" src="" style="display: none; visibility: hidden; filter: grayscale(0%); opacity: 1;" width="0" height="0"> </div>
                    </div>
                </div>
            </div>
        `;
        return template;
    }

    bottomframe() {
        var template = `
            <div id="dfp-bframe-cont" class="dfp-bframe-cont" style="bottom: 0px; max-height: 50px; left: 50%; margin-left: -160px; position: fixed; z-index: 99999;">
                <center>
                    <div id="div-gpt-ad-kapanlagi-bottomfrm" style="text-align: center; width: 320px; margin: 0 auto;" data-google-query-id="">
                     <img src="https://via.placeholder.com/320x50/f54291/f69314?text=ads">
                    </div>
                </center>
            </div>
        `
        return template;
    }

    showcase(){
        var template = `
            <script>
                setTimeout(function () {

                    document.documentElement.scrollTop = document.getElementById("`+this.placementDiv+`").offsetTop - 100;
                    var _tid = document.getElementById("`+this.placementDiv+`");
                    var _t = document.getElementById("preview-template-`+this.placementDiv+`");
                    _tid.appendChild(_t);
                    
                    console.log(kmklabs.site)
                    if (kmklabs.site == "liputan6" || kmklabs.site == "bola.com") {
                        var a = document.querySelectorAll(".articles__page.js-page__articles");
                        a.forEach(function (el, i) {
                            if (i > 0) {
                                el.remove();
                            }  
                        })
                    }

                }, 1000)

            </script>

            <div id="preview-template-`+this.placementDiv+`">
                <img src="https://via.placeholder.com/300x250/f54291/f69314?text=ads" alt="" />
            </div>
        `;
        return template;
    }

    wallboard(){
        var template = `
            <script>
                document.getElementById("`+this.placementDiv+`").style = "";
                setTimeout(function () {
                    document.documentElement.scrollTop = document.getElementById("`+this.placementDiv+`").offsetTop - 200;
                    var _tid = document.getElementById("`+this.placementDiv+`");
                    var _t = document.getElementById("wallboard");
                    _tid.appendChild(_t);
                }, 1000)

                if (kmklabs.site == "liputan6" || kmklabs.site == "bola.com") {
                    var a = document.querySelectorAll(".articles__page.js-page__articles");
                    a.forEach(function (el, i) {
                        if (i > 0) {
                            el.remove();
                        }  
                    })
                }
            </script>

            <div id="wallboard">
                <a class="wallboard_link" href="https://www.merdeka.com" target="_blank">
                    <img class="wallboard_img img-color" src="https://www.newshub.id/ads-gallery/media/mobile/wallboard/wallboard.jpg" style="filter: grayscale(0%); opacity: 1;">
                </a>
                <div id="beacon_%%CACHEBUSTER%%" style="position: absolute; left: 0px; top: 0px; visibility: hidden;">
                  <img id="wallboard-impression" src="   " style="display:none;visibility:hidden" width="0" height="0">
                </div>
            </div>

            <style>
                #wallboard .wallboard_img{max-height : unset !important;}#div-gpt-ad-liputan6-sc{height : unset !important;}#wallboard{width: 100%;margin-left: 0px ; margin-bottom : 1em;}.wallboard_link{display: block; width: 100%;}.wallboard_img{width:100%; margin: -1em auto;display: block;}
            </style>
        `;
        return template;
    }

    headline(){
        var template = `
            <script>
                setTimeout(function () {
                    document.documentElement.scrollTop = document.getElementById("`+this.placementDiv+`").offsetTop - 200;
                    var _tid = document.getElementById("`+this.placementDiv+`");
                    var _t = document.getElementById("preview-template-`+this.placementDiv+`");
                    _tid.appendChild(_t);
                }, 1000)
            </script>

            <div id="preview-template-`+this.placementDiv+`">
                <img src="https://via.placeholder.com/320x50/f54291/f69314?text=ads" alt="" />
            </div>
        `;
        return template;
    }

    headline_grow(){
        var template = `
            <script>
                setTimeout(function () {
                    document.documentElement.scrollTop = document.getElementById("`+this.placementDiv+`").offsetTop - 200;
                    var _tid = document.getElementById("`+this.placementDiv+`");
                    var _t = document.getElementById("preview-template-`+this.placementDiv+`");
                    _tid.appendChild(_t);
                }, 1000)
            </script>

            <div id="preview-template-`+this.placementDiv+`" style="text-align:center;background-color: #ECECEC;">
                <div id="div-gpt-ad-kapanlagi-hlexpand" style="text-align: center; width: auto; margin: 0px auto;">
                    <div id="healine-expand" style="display: block; height: 360px;">
                        <div id="headline-small-image-wrapper" style="margin-top: -50px;"> <img class="img-color" id="headline-small-image" src="https://www.newshub.id/ads-gallery/media/mobile/headline-grow/headline-grow-minimized.jpg" alt="" style="filter: grayscale(0%); opacity: 1;"> </div>
                        <div id="headline-expand-image-wrapper"> <img class="img-color" src="/ads-gallery/media/mobile/headline-grow/close.png" alt="" id="headline-close" style="filter: grayscale(0%); opacity: 1;"> <img class="img-color" id="headline-expand-image" src="https://www.newshub.id/ads-gallery/media/mobile/headline-grow/headline-grow.jpg" alt="" style="filter: grayscale(0%); opacity: 1;"> </div>
                    </div>
                    <style>
                        div#healine-expand {
                            position: relative;
                            overflow: hidden;
                            transition: all .75s ease;
                            background: #fff;
                        }

                        div#headline-small-image-wrapper,
                        div#headline-expand-image-wrapper {
                            display: block;
                            margin: 0 auto;
                            transition: all .75s ease;
                            position: relative;
                            width: 360px;
                        }

                        img#headline-small-image {
                            margin: 0 auto;
                            width: 320px;
                            display: block;
                        }

                        img#headline-close {
                            position: absolute;
                            right: 5px;
                            top: 5px;
                            width: 20px;
                            z-index: 1;
                        }

                        @media (max-width: 320px) {

                            div#headline-small-image-wrapper,
                            div#headline-expand-image-wrapper {
                                width: 320px;
                            }

                            img#headline-expand-image {
                                width: 100%;
                            }
                        }
                    </style>
                    <script>
                        var headlineExpand = document.getElementById("healine-expand");
                        var headlineImgSmallWrapper = document.getElementById("headline-small-image-wrapper");
                        var headlineImgSmall = document.getElementById("headline-small-image");
                        var headlineImgExpandWrapper = document.getElementById("headline-expand-image-wrapper");
                        var headlineImgExpand = document.getElementById("headline-expand-image");
                        var headlineImgClose = document.getElementById("headline-close");
                        var healdineExpandLandingPage = "https://kapanlagi.com";
                        var headlineExpandCloseTracker = "";
                        expandHeadlineOrientation();
                        expandHeadline(false);
                        headlineImgClose.addEventListener("click", function() {
                            expandHeadline(false);
                            var myimg = document.createElement("img");
                            myimg.setAttribute("src", headlineExpandCloseTracker);
                            document.body.appendChild(myimg);
                        });
                        headlineImgSmall.addEventListener("click", hlExpandLandingPage);
                        headlineImgExpand.addEventListener("click", hlExpandLandingPage);
                        window.addEventListener("scroll", headlineExpandScrollEvent);
                        window.addEventListener("orientationchange", expandHeadlineOrientation);

                        function headlineExpandScrollEvent() {
                            if (isHeadlineExpandInViewport()) {
                                expandHeadline(true);
                                window.removeEventListener("scroll", headlineExpandScrollEvent);
                            }
                        }

                        function hlExpandLandingPage() {
                            window.open(healdineExpandLandingPage, "_blank");
                        }

                        function expandHeadline(expand) {
                            if (expand) {
                                headlineExpand.style.height = "360px";
                                headlineImgSmallWrapper.style.marginTop = '-50px';
                            } else {
                                headlineExpand.style.height = "50px";
                                headlineImgSmallWrapper.style.marginTop = '0px';
                            }
                        }

                        function isHeadlineExpandInViewport() {
                            var el = headlineExpand;
                            var rect = el.getBoundingClientRect();
                            var istrue = (rect.top >= 75 && rect.left >= 0 && rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) - 250) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
                            return istrue;
                        }

                        function expandHeadlineOrientation() {
                            var isIos = navigator.platform.match(/iPhone|iPod|iPad/);
                            var angel = (isIos) ? window.orientation : screen.orientation.angle;
                            if (angel == "0") {
                                headlineExpand.style.display = "block";
                            } else {
                                headlineExpand.style.display = "none";
                            }
                        }
                    </script>
                </div>
                <div id="div-gpt-ad-kapanlagi-hlexpand" style="text-align: center; width: auto; margin: 0px auto; display: none;">
                    <div id="healine-expand">
                        <div id="headline-small-image-wrapper"> <img class="img-color" id="headline-small-image" src="/ads-gallery/media/mobile/headline-grow/headline-grow-minimized.jpg" alt="" style="filter: grayscale(0%); opacity: 1;"> </div>
                        <div id="headline-expand-image-wrapper"> <img class="img-color" src="/ads-gallery/media/mobile/headline-grow/close.png" alt="" id="headline-close" style="filter: grayscale(0%); opacity: 1;"> <img class="img-color" id="headline-expand-image" src="/ads-gallery/media/mobile/headline-grow/headline-grow.jpg" alt="" style="filter: grayscale(0%); opacity: 1;"> </div>
                    </div>
                    <style>
                        div#healine-expand {
                            position: relative;
                            overflow: hidden;
                            transition: all .75s ease;
                            background: #fff;
                        }

                        div#headline-small-image-wrapper,
                        div#headline-expand-image-wrapper {
                            display: block;
                            margin: 0 auto;
                            transition: all .75s ease;
                            position: relative;
                            width: 360px;
                        }

                        img#headline-small-image {
                            margin: 0 auto;
                            width: 320px;
                            display: block;
                        }

                        img#headline-close {
                            position: absolute;
                            right: 5px;
                            top: 5px;
                            width: 20px;
                            z-index: 1;
                        }

                        @media (max-width: 320px) {

                            div#headline-small-image-wrapper,
                            div#headline-expand-image-wrapper {
                                width: 320px;
                            }

                            img#headline-expand-image {
                                width: 100%;
                            }
                        }
                    </style>
                    <script>
                        var headlineExpand = document.getElementById("healine-expand");
                        var headlineImgSmallWrapper = document.getElementById("headline-small-image-wrapper");
                        var headlineImgSmall = document.getElementById("headline-small-image");
                        var headlineImgExpandWrapper = document.getElementById("headline-expand-image-wrapper");
                        var headlineImgExpand = document.getElementById("headline-expand-image");
                        var headlineImgClose = document.getElementById("headline-close");
                        var healdineExpandLandingPage = "https://kapanlagi.com";
                        var headlineExpandCloseTracker = "";
                        expandHeadlineOrientation();
                        expandHeadline(false);
                        headlineImgClose.addEventListener("click", function() {
                            expandHeadline(false);
                            var myimg = document.createElement("img");
                            myimg.setAttribute("src", headlineExpandCloseTracker);
                            document.body.appendChild(myimg);
                        });
                        headlineImgSmall.addEventListener("click", hlExpandLandingPage);
                        headlineImgExpand.addEventListener("click", hlExpandLandingPage);
                        window.addEventListener("scroll", headlineExpandScrollEvent);
                        window.addEventListener("orientationchange", expandHeadlineOrientation);

                        function headlineExpandScrollEvent() {
                            if (isHeadlineExpandInViewport()) {
                                expandHeadline(true);
                                window.removeEventListener("scroll", headlineExpandScrollEvent);
                            }
                        }

                        function hlExpandLandingPage() {
                            window.open(healdineExpandLandingPage, "_blank");
                        }

                        function expandHeadline(expand) {
                            if (expand) {
                                headlineExpand.style.height = "360px";
                                headlineImgSmallWrapper.style.marginTop = '-50px';
                            } else {
                                headlineExpand.style.height = "50px";
                                headlineImgSmallWrapper.style.marginTop = '0px';
                            }
                        }

                        function isHeadlineExpandInViewport() {
                            var el = headlineExpand;
                            var rect = el.getBoundingClientRect();
                            var istrue = (rect.top >= 75 && rect.left >= 0 && rect.bottom <= ((window.innerHeight || document.documentElement.clientHeight) - 250) && rect.right <= (window.innerWidth || document.documentElement.clientWidth));
                            return istrue;
                        }

                        function expandHeadlineOrientation() {
                            var isIos = navigator.platform.match(/iPhone|iPod|iPad/);
                            var angel = (isIos) ? window.orientation : screen.orientation.angle;
                            if (angel == "0") {
                                headlineExpand.style.display = "block";
                            } else {
                                headlineExpand.style.display = "none";
                            }
                        }
                    </script>
                </div>
                <div id="div-gpt-ad-kapanlagi-hl" style="text-align: center; width: 320px; margin: 0px auto; display: none;"></div>
            </div>
        `;
        return template;
    }

    exposer(){
        var template = `
            <script>
                setTimeout(function () {
                    document.documentElement.scrollTop = document.getElementById("`+this.placementDiv+`").offsetTop - 200;
                    var _tid = document.getElementById("`+this.placementDiv+`");
                    var _t = document.getElementById("exposer-ad-dfp-exposer");
                    _tid.appendChild(_t);
                }, 1000)
            </script>

            <div data-info="ad" id="exposer-ad-dfp-exposer">
                <style id="exposer-css" media="screen">
                    .artikel-list-img .exposer-bucket.still{margin-left:-5px}.main-detail-paging .artikel-list-img .exposer-bucket.still{margin-left:-10px}.vemale-section .article-column .exposer-bucket.still{margin-left:-10px}.main-kl.main-detail .deskrip-img .exposer-bucket.still{margin-left:-15px}#mdk-body .exposer{right:0}.mdk-container div:nth-child(2){z-index:2!important}.exposer-bucket :after,.exposer-bucket :before{box-sizing:initial!important}.exposer-bucket *{width:100%;height:auto;float:none;visibility:visible;font-family:arial;margin:0;padding:0;line-height:normal;border:0;box-sizing:border-box;background:0 0;font-size:100%;text-decoration:none;background-repeat:no-repeat;vertical-align:baseline;color:inherit;font-weight:inherit;letter-spacing:inherit;-webkit-tap-highlight-color:transparent}.exposer-bucket{left:0;top:0;margin:0;position:relative;display:block;z-index:999999}.exposer-bucket.still{z-index:999}.exposer-bucket.exp-close,.exposer-bucket.still,.exposer-wrapper{-webkit-transition:width 1s,height 1s,top 1s,left 1s,margin 1s;-moz-transition:width 1s,height 1s,top 1s,left 1s,margin 1s;-ms-transition:width 1s,height 1s,top 1s,left 1s,margin 1s;transition:width 1s,height 1s,top 1s,left 1s,margin 1s}.exposer-bucket .exposer-top-text{color:#fff;text-transform:uppercase;font:normal 9px arial;left:0;margin:0;width:100%;height:18px;line-height:20px;background:#696868;letter-spacing:1.01px;text-align:center}.exposer-bucket .exposer{width:100%;height:100%;z-index:1;position:relative;min-width:0}.exposer-bucket .exposer-wrapper{overflow:hidden;display:block;width:100%;position:relative;left:0;right:auto;top:0;bottom:auto;height:200px;background:#000}.exposer-bucket .exposer-fix{position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;margin:0;padding:0;clip:rect(auto auto auto auto);-webkit-clip-path:inset(0 0 0 0);background:#000}.exposer-bucket .exposer-banner{position:fixed;top:0;left:0;width:100%;height:100%;margin:0;padding:0;transform:translateZ(0)}.exposer-bucket .exposer-data{overflow:hidden;display:block;width:100%;height:100%;position:absolute;left:0;right:auto;top:0;bottom:auto;background-size:contain;background-color:#000}.exposer-bucket .exposer-bottom-text{line-height:1;width:100%;font:bold 13px arial;color:#fff;z-index:9;text-align:left;z-index:9;position:absolute;height:42px;line-height:41px;left:0;bottom:0;text-shadow:0 0 5px #000,0 0 5px #000,0 0 5px rgba(0,0,0,.5);text-transform:uppercase;-webkit-transform:translate3d(0,0,0)}.exposer-bucket .exposer-bottom-text .pulse_holder{display:block;position:absolute;top:14px;left:20px}.exposer-bucket .exposer-bottom-text .pulse_holder .pulse_marker{width:12px;height:12px;background:#fff;border-radius:12px;-webkit-box-shadow:0 0 15px 1px rgba(0,0,0,.5);-moz-box-shadow:0 0 15px 1px rgba(0,0,0,.5);box-shadow:0 0 15px 1px rgba(0,0,0,.5);position:relative}.exposer-bucket .exposer-bottom-text .pulse_holder .pulse_rays{margin:0 auto;border-radius:100px;position:absolute;right:-22px;top:-22px;z-index:10;background-color:transparent;opacity:.1;width:52px;height:52px;border:2px solid #fff;-webkit-border-radius:100px;-moz-border-radius:100px;-o-border-radius:100px;-ms-border-radius:100px;border-radius:100px;-webkit-animation:aff-inc-pulse 1.3s linear infinite;-moz-animation:aff-inc-pulse 1.3s linear infinite;border-image:initial;-webkit-box-shadow:0 0 5px 2px rgba(0,0,0,.5);-moz-box-shadow:0 0 5px 2px rgba(0,0,0,.5);box-shadow:0 0 5px 2px rgba(0,0,0,.5)}.main-kl .artikel-detail-headline #div-gpt-ad-kapanlagi-dfp-exposer-slot1{margin-top:-40px;padding-bottom:20px}.exposer-bucket .exposer-bottom-text .click-expose{position:absolute;left:50px;bottom:13px}.exposer-bucket .sound-expose{position:absolute;left:10px;bottom:80px;background:url(https://cdns.klimg.com/d.kapanlaginetwork.com/banner/preview/2017/08/03/exposer/mute.png);background-size:200% 100%;background-repeat:no-repeat;z-index:99;width:35px;height:35px;opacity:0;display:none}.exposer-bucket .sound-expose.unmute{background-position:0 0;opacity:1}.exposer-bucket .sound-expose.muted{background-position:-35px 0;opacity:1}@-webkit-keyframes aff-inc-pulse{0%{transform:scale(0);opacity:0}8%{transform:scale(0);opacity:0}15%{transform:scale(.1);opacity:1}30%{transform:scale(.3);opacity:1}100%{opacity:0;-webkit-transform:scale(.7)}}.exposer-close{width:30px!important;height:30px!important;position:absolute!important;margin-top:-11px!important;top:20px;right:10px;z-index:999999;display:none}.exposer-link{z-index:9999;display:none;position:fixed;width:100%;height:100%;top:0}.exposer-img-a{width:100%!important;height:auto;z-index:99;position:absolute;opacity:0;top:0;left:0}.exposer-img-b{width:100%!important;height:auto;z-index:999;position:absolute;top:0;left:0;opacity:1}.fadeOut{animation:fadeOut .5s ease-in 1 forwards}@keyframes fadeOut{to{opacity:0}}.fadeIn{animation:fadeIn .5s ease-in 1 forwards}@keyframes fadeIn{to{opacity:1}}@media screen and (orientation:landscape){body.exposer-native{position:static!important}body{overflow:visible!important}#exposer-ad,#exposer-ad *{height:1px;visibility:hidden}.exposer-img-a{display:none}.exposer-bucket,.exposer-bucket.still{display:none}}#div-gpt-ad-liputan6-dfp-exposer-oop{margin-left:-15px !important;}
                </style>
                <div id="dfp-exposer" class="exposer-bucket still" style="width: 900px;">
                    <div class="exposer-top-text">Commercial Break</div>
                    <div class="exposer">
                        <div class="exposer-wrapper">
                            <div class="exposer-bottom-text">
                                <div class="pulse_holder">
                                    <div class="pulse_marker">
                                        <div class="pulse_rays"></div>
                                    </div>
                                </div>
                                <div class="click-expose">Click to expose</div>
                            </div>
                            <div class="exposer-fix">
                                <img class="exposer-close img-color" src="https://cdns.klimg.com/d.kapanlaginetwork.com/banner/preview/2017/07/21/exposer/close-button.png" alt="" style="filter: grayscale(0%); opacity: 1;">
                                <div class="exposer-banner">
                                    <div class="exposer-data">
                                        <img class="exposer-img-a img-color" src="https://www.newshub.id/ads-gallery/media/mobile/exposer/exposer.jpg" style="height: 1440px; filter: grayscale(0%); opacity: 1;">
                                        <img class="exposer-img-b img-color" src="https://www.newshub.id/ads-gallery/media/mobile/exposer/exposer.jpg" style="filter: grayscale(0%); opacity: 1;">
                                        <a class="exposer-link" target="_blank"></a>
                                    </div>
                                </div>
                                <div class="sound-expose"></div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        `;
        return template;
    }

    liftads(){
        var template = `
            <script>
                setTimeout(function () {
                    document.documentElement.scrollTop = 600;
                })
            </script>
            <div>
                <style>
                    #liftads{position:fixed;top:0;left:0;width:0;height:0;z-index:92147483000;visibility:hidden;-webkit-transform:translateZ(10px);-ms-transform:translateZ(10px);transform:translateZ(10px)}#liftads.active{width:100%;height:100%;visibility:visible;-webkit-overflow-scrolling:touch;-webkit-transform:translateZ(10px);-ms-transform:translateZ(10px);transform:translateZ(10px)}#liftads.shown{width:0;height:0;background:0 0}#liftads-wrapper{position:absolute;left:0;top:100%;width:100%;-webkit-transform:translateZ(10px);-ms-transform:translateZ(10px);transform:translateZ(10px);-webkit-transition:top 1s ease,opacity .5s;-o-transition:top 1s ease,opacity .5s;transition:top 1s ease,opacity .5s}#liftads-wrapper.notransition{-webkit-transition:none;-o-transition:none;transition:none}#liftads-content{position:absolute;top:44px;left:0;width:100%;margin-top:-1px}#liftads-content img{max-width:100%;max-height:100%}#liftads-scroll-trigger{position:absolute;bottom:-10000px;width:100%;height:10px}#title-liftads{position:relative;display:block;text-align:left;margin:0;line-height:24px;font-size:14px;padding:10px 40px 10px 10px;box-sizing:border-box;font-family:Arial,Helvetica,sans-serif;font-weight:400;color:#fff;background:#000;z-index:999999}#title-liftads.active{top:0;-webkit-transition:top .5s;-o-transition:top .5s;transition:top .5s}#liftads-close{position:absolute;top:50%;margin-top:-11px;right:10px;width:22px;height:22px}@media(max-width:360px){#title-liftads{font-size:12px}}
                </style>
                <div id="liftads" class=" active kl">
                    <div id="liftads-wrapper" style="top: 70.5px;" class="notransition">
                        <h6 id="title-liftads">Sponsored - Scroll ke atas untuk melanjutkan<img class="img-color" id="liftads-close" src="https://cdns.klimg.com/d.kapanlaginetwork.com/banner/asset/img/close-lift-ads.png" alt="" style="filter: grayscale(0%); opacity: 1;"></h6> <a href="https://www.kapanlagi.com" target="_blank" id="liftads-link">
                            <div id="liftads-content"> <img class="img-color" id="liftads-img" src="https://www.newshub.id/ads-gallery/media/mobile/lift-ads/lift-ads.jpg" alt="" style="filter: grayscale(0%); opacity: 1;"> </div>
                        </a>
                    </div>
                    <div id="liftads-scroll-trigger"></div>
                    <div id="beacon_%%CACHEBUSTER%%" style="position: absolute; left: 0px; top: 0px; visibility: hidden;"> <img class="img-color" id="liftads-impression" src="" style="visibility: hidden; filter: grayscale(0%); opacity: 1;" width="0" height="0"> </div>
                </div>
            </div>
        `;
        return template;
    }

    floating_pin(){
        var template = `
            <div id="wrapper-divgpt-ad-dfp-overlay-oop" class="adsgallery_text-center" style="line-height: 0;">
                <div>
                    <style>
                        #floating-pin{position:fixed;top:1000px;left:0;width:0;height:0;z-index:999999999;visibility:hidden;overflow:hidden}#floating-pin.active{top:0;visibility:visible;overflow:visible;-webkit-transition:top 1s;-o-transition:top 1s;transition:top 1s}#floating-pin.landscape{display:none}#floating-pin-toggler{position:absolute;width:66px;height:66px;left:20px;visibility:hidden}#floating-pin-toggler img{width:100%}#floating-pin-toggler.active{visibility:visible}#floating-pin-dialogbox-wrapper{position:absolute;top:0;left:0;width:0;height:0;background:0 0;overflow:hidden;visibility:hidden}#floating-pin-dialogbox-wrapper.active{background:rgba(0,0,0,.65);visibility:visible}#floating-pin-dialogbox{position:absolute;display:block;border-radius:5px;overflow:hidden;-webkit-transform:translateY(900px);-ms-transform:translateY(900px);-o-transform:translateY(900px);transform:translateY(900px);-webkit-transition:transform .7s;-o-transition:transform .7s;transition:transform .7s}#floating-pin-dialogbox-wrapper.active #floating-pin-dialogbox{-webkit-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0);-webkit-transition:transform .7s;-o-transition:transform .7s;transition:transform .7s}#floating-pin-no,#floating-pin-yes{display:block;width:100%;font-family:"Open Sans",arial,sans-serif;font-weight:500;font-size:16px;text-decoration:none;text-align:center;padding:20px 0;border-bottom:1px solid #d0d0d0;background:#fff}#floating-pin-yes{margin-top:-5px}.kl #floating-pin-yes{color:#f39812}.mdk #floating-pin-yes{color:#f70100}#floating-pin-no{color:#7a7a7a}#floating-pin-dialogbox.portrait img{max-width:100%;max-height:100%}#floating-pin-btn-wrapper{margin-top:5px}
                    </style>
                    <div id="floating-pin" class="active"> <a onclick="togglePopup();" id="floating-pin-toggler" class="" style="top: 274px;"><img id="floating-pin-toggler-img" src="" alt="" style="border: medium none;"></a>
                        <div id="beacon_toggler" style="position: absolute; left: 0px; top: 0px; visibility: hidden;"> <img class="img-color" id="floating-pin-toggler-impr-img" src="" style="display: none; visibility: hidden; filter: grayscale(0%); opacity: 1;" width="0" height="0"> </div>
                        <div id="floating-pin-dialogbox-wrapper" style="width: 360px; height: 100vh;" class="active">
                            <div id="floating-pin-dialogbox" class="portrait" style="width: 270px; left: 45px; top: 131px;"> <img class="img-color" id="floating-pin-img" src="https://www.newshub.id/ads-gallery/media/mobile/floating-pin/floating-pin-image.jpg" alt="" style="filter: grayscale(0%); opacity: 1;">
                                <div id="beacon_dialogbox" style="position: absolute; left: 0px; top: 0px; visibility: hidden;"> <img id="floating-pin-dialogbox-impr-img" src="" style="display:none; visibility:hidden;" width="0" height="0"> </div>
                                <div id="floating-pin-btn-wrapper"> <a onclick="togglePopup(true);" href="https://m.merdeka.com" target="_blank" id="floating-pin-yes">Ya, Pesan Sekarang</a> <a onclick="togglePopup(true,true);" id="floating-pin-no">Tidak</a> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return template;
    }

    seamless(){
        var template = `
            <script>
                setTimeout(function () {
                    var _tid = document.getElementById("`+this.placementDiv+`");
                    var _t = document.getElementById("seamless-banner");
                    _tid.appendChild(_t);
                    document.documentElement.scrollTop = document.getElementById("`+this.placementDiv+`").offsetTop - 100;
                }, 500)
            </script>
            <div id="seamless-banner" style="width: calc(100% + 10px); margin-left: -5px; height: 495px;">
                <style type="text/css">
                    div#div-gpt-ad-fimela-dfp-exposer-slot1-oop {
                        margin-bottom: 30px !important;
                    }

                    div#div-gpt-ad-bola-dfp-exposer-slot1-oop .seamless-Parallax {
                        margin-top: -1px;
                    }

                    .parallaxA {
                        width: 100%;
                        /*height: 495px;*/
                        height: 100%;
                        position: relative;
                        max-width: 360px;
                        margin: 0 auto;
                    }

                    .parallaxA_abs {
                        width: 100%;
                        max-width: 520px;
                        height: 100%;
                        position: absolute;
                        top: 0;
                        left: 0;
                        clip: rect(auto, auto, auto, auto);
                        -webkit-clip-path: inset(0px 0px 0px 0px);
                    }

                    .parallaxA_fix {
                        width: 100%;
                        height: 100%;
                        position: fixed;
                        top: 0px;
                        -moz-transform: translateZ(0);
                        -webkit-transform: translateZ(0);
                        -ms-transform: translateZ(0);
                        -o-transform: translateZ(0);
                        transform: translateZ(0);
                        margin: 0 auto;
                    }

                    .seamless-Parallax {
                        width: 360px;
                        height: 495px;
                        margin: 0 auto;
                    }

                    .seamless-Parallax img {
                        width: 100%;
                    }

                    .parallaxA_ads2 .owl-carousel .item {
                        position: relative;
                    }

                    .owl-item .item img {
                        width: 100%;
                    }

                    @media all and (max-width:359px) {
                        .parallaxA_fix {
                            width: 100% !important;
                            left: 0px;
                        }

                        .seamless-Parallax {
                            width: 100% !important;
                        }
                    }
                </style> 
                <div id="beacon_%%CACHEBUSTER%%" style="position: absolute; left: 0px; top: 0px; visibility: hidden;"> <img class="seamless-imp" src="#" style="visibility:hidden;" width="0" height="0"> </div>
                <div class="parallaxA" id="parralax-wrapper">
                    <div class="parallaxA_abs">
                        <div class="parallaxA_fix" style="width: 360px;">
                            <div class="parallaxA_ads2">
                                <div class="seamless-Parallax"> <img class="img-color" src="https://www.newshub.id/ads-gallery/media/mobile/seamless/seamless.jpg" style="filter: grayscale(0%); opacity: 1;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
        return template;
    }



}

module.exports = mobile_dfp_template;