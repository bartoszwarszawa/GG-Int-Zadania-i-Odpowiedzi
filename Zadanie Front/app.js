$(document).ready( () => {
    
    function countdown() {

        var endTime = new Date("03-12-2021 12:23");			
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var dateDifference = endTime - now;

        var days = Math.floor(dateDifference / 86400);
        var hours = Math.floor((dateDifference - (days * 86400)) / 3600);
        var minutes = Math.floor((dateDifference - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((dateDifference - (days * 86400) - (hours * 3600) - (minutes * 60)));

        var lessThanADay = days == 0;

        $("#counter-title-1").html(lessThanADay ? "hours" : "days")
        $("#counter-1").html(lessThanADay ? hours : days)

        $("#counter-title-2").html(lessThanADay ? "minutes" : "hours")
        $("#counter-2").html(lessThanADay ? minutes : hours)

        $("#counter-title-3").html(lessThanADay ? "seconds" : "minutes")
        $("#counter-3").html(lessThanADay ? seconds : minutes)

    }

    setInterval(() => { countdown() },  1000);
})


