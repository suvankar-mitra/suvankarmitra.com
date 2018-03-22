$(function() {
    /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
    particlesJS.load('particles-js', '/static/assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
    $("#press-enter").hover(()=>{
        console.log("mouse in");
        $("#press-enter").css("opacity",0.5);
    },()=>{
        console.log("mouse out");
        $("#press-enter").css("opacity",0.2);
    });
    $(document).keypress(function(e) {
        if(e.which == 13) {
            console.log("Enter key pressed");
            $("#readme").removeAttr('hidden');
            $("#press-enter").hide();
        }
    });
    // var progressBarOptions = {
    //     startAngle: -1.55,
    //     size: 50,
    //     value: 0.75,
    //     fill: {
    //         gradient: ["#F1F2B5", "#135058"]
    //     },
    //     insertMode: "append",
    //     animation: false
    // }
    
    // $('.circle')
    //     .circleProgress(progressBarOptions);
    
    // $('#circle-b').circleProgress({
    //     value : 0.9,
    //     fill: {
    //         gradient: ["red", "orange"]
    //     }
    // });

    function startTime() {
        var today = new Date();
        var h = today.getHours();
        var m = today.getMinutes();
        var s = today.getSeconds();
        var sf = parseFloat(s/60);
        var hf = parseFloat((h-12)/12);
        var mf = parseFloat(m/60);

        // $('#second-text').html(s);
        // $('#minute-text').html(m);
        // $('#hour-text').html(h);
        $('#circle-h').circleProgress({
            value : hf,
            startAngle: -1.55,
            size: 70,
            animation: false,
            fill: {
                gradient: ["#7b4397", "#dc2430"]
            }
        });
        $('#circle-m').circleProgress({
            value : mf,
            startAngle: -1.55,
            size: 50,
            animation: false,
            fill: {
                gradient: ["#00bf8f", "#001510"]
            }
        });
        $('#circle-s').circleProgress({
            value : sf,
            startAngle: -1.55,
            size: 30,
            animation: false,
            fill: {
                gradient: ["#43cea2", "#185a9d"]
            }
        });
    }
    window.setInterval(startTime, 1000);
});

//https://vincentgarreau.com/particles.js/