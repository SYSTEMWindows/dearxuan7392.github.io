var binft = function (r) {
    var isTransparent = true;
    function getRandomColor() {
        if(isTransparent){
            isTransparent = false;
            return "rgba(255,255,255,0)"
        }else{
            isTransparent = true;
            return "rgba(255,255,255,1)"
        }
    }  
    function n(r) {
        for (var n = document.createDocumentFragment(), i = 0; r > i; i++) {
            var oneword = document.createElement("span");
            oneword.textContent = "_";
            oneword.style.color = getRandomColor();
            n.appendChild(oneword);
        }
        return n
    }
    function i() {
        var t = wordList[c.skillI];
        c.step ? c.step-- : (c.step = refreshDelayTime, c.prefixP < l.length ? (c.prefixP >= 0 && (c.text += l[c.prefixP]), c.prefixP++) : "forward" === c.direction ? c.skillP < t.length ? (c.text += t[c.skillP], c.skillP++) : c.delay ? c.delay-- : (c.direction = "backward", c.delay = showTotalWordDelayTime) : c.skillP > 0 ? (c.text = c.text.slice(0, -1), c.skillP--) : (c.skillI = (c.skillI + 1) % wordList.length, c.direction = "forward")), r.textContent = c.text, r.appendChild(n(c.prefixP < l.length ? Math.min(maxLength, maxLength + c.prefixP) : Math.min(maxLength, t.length - c.skillP))), setTimeout(i, d)
    }
    var l = "",
    wordList = [ 
            "有花堪折直需折，莫待无花空折枝。",//Flower Dance
            "闲居少邻并，草径入荒园。鸟宿池边树，僧敲月下门。",//夜的钢琴曲
            "侯门一入深如海，从此萧郎是路人。",//梦中的婚礼
            "才见岭头云似盖，已惊岩下雪如尘。",//雪之梦
            "人间万事消磨尽，只有清香似旧时。",//神秘园之歌
            "日暮酒醒人已远，满天风雨下西楼。",//Here We Are Again
            "落灯花，棋未收，叹新丰逆旅淹留。",//寂静之声
            "软风吹过窗纱，心期便隔天涯。",//The Right Path
            "迷惑失故路，薄暮无宿栖。",//Journey
            "不见白头相携老，只许与君共天明。",//卡农
            "晓迎秋露一枝新，不占园中最上春。",//秋日的私语
            "荷尽已无擎雨盖，菊残犹有傲霜枝。",//幻昼
            "春未绿，鬓先丝。人间别久不成悲。",//樱花泪
            "江东子弟多才俊，卷土重来未可知。",//You
            "莫听穿林打叶声，何妨吟啸且徐行。",//Last Reunion
            "在天愿作比翼鸟，在地愿为连理枝。",//夜,萤火虫和你
        ].map(function (r) {
    return r + ""
    }),
    showTotalWordDelayTime = 2,
    refreshDelayTime = 1,
    maxLength = 1,
    d = 75,
    c = {
        text: "",
        prefixP: -maxLength,
        skillI: 0,
        skillP: 0,
        direction: "forward",
        delay: showTotalWordDelayTime,
        step: refreshDelayTime
    };
    i()
};
binft(document.getElementById('binft'));