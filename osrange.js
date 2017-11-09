// osrange.js
// author：七八个星天怪
// LICENSE：MIT

'use strict';
(function (f) {
    if (typeof module === "object" && typeof module.exports === "object"){
        module.exports = f;
    }
    else{
        window.osrange = f;
    }
})(function (mycfg) {
    function extend(t,o) {
        for(var n in o){
            t[n]=o[n] ;
        }
    }
    function createDiv() {
        return document.createElement('div');
    }
    function css(el,obj) {
        for(var k in obj){
            el.style[k] = obj[k];
        }
    }

    var cfg = {
        id:null,
        range:[0,1],
        value:0,
        control:true,
        callback:null
    };
    extend(cfg,mycfg);

    var bg = document.getElementById(cfg.id);
    bg.style.cursor = 'default';
    var min = cfg.range[0];
    var max = cfg.range[1];
    var value = cfg.value;
    var cb = cfg.callback;

    var dv = max - min;
    var p = (value - min) / dv;

    function getVal() {
        return (value = p * dv + min);
    }

    var progress = createDiv();

    function setW() {
        progress.style.width = p * 100 + '%';
    }
    css(progress,{
        position:'relative',
        height: 'inherit',
    });
    setW();
    cb && cb(getVal());

    if(cfg.control){
        bg.style.cursor = 'pointer';

        var ball = createDiv();
        var h = bg.clientHeight;
        var ballWH = h * 2;

        css(ball,{
            position:'absolute',
            width: ballWH + 'px',
            height: ballWH + 'px',
            right: -ballWH / 2 + 'px',
            top: (h - ballWH) / 2 + 'px'
        });

        progress.appendChild(ball);

        ball.onmousedown = bg.onmousedown = function (e) {
            e.stopPropagation();
            var rect = bg.getBoundingClientRect();

            document.onmousemove = (function handle(e) {
                p = (e.clientX - rect.left) / rect.width;
                p = p < 0 ? 0 : p > 1 ? 1 : p;
                setW();
                cb && cb(getVal());
                return handle;
            })(e);
            document.onmouseup = function () {
                document.onmousemove = null;
            };
        };
    }

    bg.appendChild(progress);

    this.setValue = function (val) {
        value = val < min ? min : val > max ? max : val;
        p = (value - min) / dv;
        setW();
    };
    this.getValue = function () {
        return value;
    };
});

