$(function() {
    // setInterval(init, 1000);

    setInterval(function() {
        var time = new Date();
        time.setTime(time.getTime() + 1000);
        var onTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
        // $('.Time')[0].innerText = onTime; //calls time.toString() behintime the scenes
        changeRGB(time);
    }, 1000);

    function changeRGB(time) {
        r = parseInt(time.getHours() / 24 * 255);
        g = parseInt(time.getMinutes() / 60 * 255);
        b = parseInt(time.getSeconds() / 60 * 255);

        var color = 'rgb(' + r.toString() + ',' + g.toString() + ',' + b.toString() + ')';
        // document.body.style.backgroundColor = Color;
        var titles = document.querySelectorAll('.priceText');
        [].slice.call(titles).forEach(function(el){
            el.style.color = color;
        })
    }

});
