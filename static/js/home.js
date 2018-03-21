$(function() {
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
});