
// Set the date we're counting down to

var startDate = new Date("Nov 5, 2017 11:11:11 UTC");

var numSaleDays = 1000;
var BonusDays1 = 1;
var BonusDays2 = 2;
var BonusDays3 = 3;
var BonusDays4= 4;
var BonusDays5 = 5;

var endDate = (addMinutes(startDate, numSaleDays)).getTime();

var firstBonusEndDate = (addMinutes(startDate, BonusDays1)).getTime();
var secondBonusEndDate = (addMinutes(startDate, BonusDays2)).getTime();
var thirdBonusEndDate = (addMinutes(startDate,BonusDays3)).getTime();
var fourthBonusEndDate = (addMinutes(startDate,BonusDays4)).getTime();
var fifthBonusEndDate = (addMinutes(startDate,BonusDays5)).getTime();

var startText = "TOKEN SALE STARTS IN: ";
var endText   = "TOKEN SALE ENDS IN  : ";
var finishText = "TOKEN SALE IS FINISHED. <br>THANK YOU VERY MUCH TO THOSE WHO CONTRIBUTED!";
var contribButton0 = '<button type="button" class="btn btn-deep-orange" data-toggle="modal" data-target="#contribute"><strong>How To Contribute</strong></button>';
var contribButton1 = '<button type="button" class="btn btn-deep-orange" data-toggle="modal" data-target="#contribute"><strong>Contribute NOW!</strong></button>';
var contribButton2 = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#contribute" style="background:#772953"><strong>How To Contribute</strong></button>';
var contribButton3 = '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#contribute" style="background:#772953"><strong>Contribute Now!</strong></button>';
// Update the count down every 1 second

var x = setInterval(function() {

    // Get todays date and time
    var nowdate = new Date();
    
    // Find the distance between now an the count down date
    var now = nowdate.getTime();
    var distance = startDate.getTime() - now;
	var tmlf = timeleft(distance);	

    
    if (startDate.getTime() > now) {
		document.getElementById("timer").innerHTML = "<strong>" + startText + tmlf[0] + " Days " + tmlf[1] + " Hours " + tmlf[2] + " Mins " + tmlf[3] + " Secs" + "</strong>";
		document.getElementById("contrib").innerHTML = contribButton0;
		document.getElementById("tiles").innerHTML = "<span>" + tmlf[0] + "</span><span>" +  tmlf[1] + "</span><span>" + tmlf[2] + "</span><span>" + tmlf[3] + "</span>"; 
		document.getElementById("cd-title").innerHTML = "<strong>WORLD'S BIGGEST ICO BONUS (1000X) STARTS IN</strong><br><br>";
		document.getElementById("contribButt").innerHTML = contribButton2;
	} else if (endDate > now) {
		    document.getElementById("contrib").innerHTML = contribButton1;
			document.getElementById("contribButt").innerHTML = contribButton3;
			distance = endDate - now;
			tmlf = timeleft(distance);			
			endingText = endText + tmlf[0] + " Days " + tmlf[1] + " Hours " + tmlf[2] + " Mins " + tmlf[3] + " Secs";
			document.getElementById("timer").innerHTML = "<strong>" + endingText + "</strong>";
			document.getElementById("tiles").innerHTML = "<span>" + tmlf[0] + "</span><span>" +  tmlf[1] + "</span><span>" + tmlf[2] + "</span><span>" + tmlf[3] + "</span>"; 
			document.getElementById("cd-title").innerHTML = "<strong>WORLD'S BIGGEST ICO BONUS ENDS IN</strong><br><br>"
	} else {
			clearInterval(x);
			document.getElementById("contrib").innerHTML = '';
			document.getElementById("contribButt").innerHTML = '';
			document.getElementById("timer").innerHTML = "<strong>" + finishText + "</strong>";
			document.getElementById("tiles").innerHTML = "<span>0</span><span>0</span><span>0</span><span>0</span>";
			document.getElementById("cd-title").innerHTML = "<strong>TOKEN SALE IS FINISHED. THANK YOU CONTRIBUTORS!</strong><br><br>" 
	}
	
    // Output the result in an element with id="demo"
    
}, 1000);

function timeleft(dist) {
	d = Math.floor(dist / (1000 * 60 * 60 * 24));
	h = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	m = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
	s = Math.floor((dist % (1000 * 60)) / 1000);
	
    return [pad(d),pad(h),pad(m),pad(s)];
}

function addMinutes(oldDate, numMinutes) {
	var retDate = new Date();
	
	retDate.setTime(oldDate.getTime());
	
	retDate.setMinutes(retDate.getMinutes() + numMinutes);
	
	return retDate;
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}


