
    var tips;
    var theTop = 353; /*这是默认高度,越大越往下*/
    var old = theTop;
    window.onload=function(){
    	initFloatTips();
    }

    function initFloatTips() {
        tips = document.getElementById('right');
        moveTips();
    };
    function moveTips() {
        var tt = 50;
        if (window.innerHeight) {
            pos = window.pageYOffset
        } else if (document.documentElement && document.documentElement.scrollTop) {
            pos = document.documentElement.scrollTop
        } else if (document.body) {
            pos = document.body.scrollTop;
        }
        pos = pos - tips.offsetTop - 140;
        pos = tips.offsetTop + pos / 10;

        if (pos < theTop) pos = theTop;
        if (pos != old) {
            tips.style.top = pos + "px";
            tt = 10;
        }
        old = pos;
        setTimeout(moveTips, tt);
    }

    // background-image auto


