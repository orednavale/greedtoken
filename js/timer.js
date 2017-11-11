
// Set the date we're counting down to

/// utility methods
const toEthString = wei => parseFloat((wei / 10**18).toFixed(4));

/// constants
const abi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"EXCHANGE_RATE","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"vestSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"icoWallet","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"icoFinished","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"icoSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"endICO","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalTokensSold","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_subtractedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"icoOpen","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"durationSeconds","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"bonusMultiplier","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"vestContract","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRaised","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_addedValue","type":"uint256"}],"name":"increaseApproval","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"startTimestamp","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalContributors","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"},{"indexed":true,"name":"spender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Transfer","type":"event"}];  
const targetApi = 'https://mainnet.infura.io/';
const contractAddress = '0xbc9395973bd35a3b4bd924f050d2778c07506ecb';

/// getting contract
var web3 = new Web3(new Web3.providers.HttpProvider(targetApi));
var GreedTokenIco = web3.eth.contract(abi).at(contractAddress);

var startDate = new Date("Nov 11, 2017 11:11:11 UTC");

var numSaleDays = 1000;
var BonusDays1 = 1;
var BonusDays2 = 2;
var BonusDays3 = 3;
var BonusDays4= 4;
var BonusDays5 = 5;

var endDate = new Date("Dec 12, 2017 12:12:12 UTC");

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
var finished = false; 
var firsttime = true;
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
		document.getElementById("stats").innerHTML = "";
		document.getElementById("progressBar").style.display = "none";
	} else if (endDate.getTime() > now && !finished) {
		    document.getElementById("contrib").innerHTML = contribButton1;
			document.getElementById("contribButt").innerHTML = contribButton3;
			distance = endDate.getTime() - now;
			elapsed = now - startDate.getTime(); 
			tmlf = timeleft(distance);			
			endingText = endText + tmlf[0] + " Days " + tmlf[1] + " Hours " + tmlf[2] + " Mins " + tmlf[3] + " Secs";
			document.getElementById("timer").innerHTML = "<strong>" + endingText + "</strong>";
			document.getElementById("tiles").innerHTML = "<span>" + tmlf[0] + "</span><span>" +  tmlf[1] + "</span><span>" + tmlf[2] + "</span><span>" + tmlf[3] + "</span>"; 
			document.getElementById("cd-title").innerHTML = "<strong>WORLD'S BIGGEST ICO BONUS IS NOW LIVE</strong><br><br>";
			if (now % 60 == 0 || firsttime) {
			var alltime = endDate.getTime() - startDate.getTime();
			var timePercent = parseFloat((100 * (elapsed / alltime)).toFixed(2));
			var raisedPercent = parseFloat((100 * (GreedTokenIco.totalTokensSold() / GreedTokenIco.icoSupply())).toFixed(2));
			var percent = Math.max(timePercent, raisedPercent);

				document.getElementById("stats").innerHTML = '<h5 align="center"><strong>Current Bonus : ' + toEthString(GreedTokenIco.bonusMultiplier()) + 'x&emsp;Total Tokens Sold : ' + toEthString(GreedTokenIco.totalTokensSold()) + '&emsp;Total ETHs Raised : ' + toEthString(GreedTokenIco.totalRaised()) + '</strong><br><br></h5>';
				document.getElementById("progressBar").style.display = "block";
				progressBar(percent, $('#progressBar'));
				finished = GreedTokenIco.icoFinished();
				firsttime = false;
			}
	} else {
			clearInterval(x);
			document.getElementById("contrib").innerHTML = '';
			document.getElementById("contribButt").innerHTML = '';
			document.getElementById("timer").innerHTML = "<strong>" + finishText + "</strong>";
			document.getElementById("tiles").innerHTML = "<span>0</span><span>0</span><span>0</span><span>0</span>";
			document.getElementById("cd-title").innerHTML = "<strong>TOKEN SALE IS FINISHED. THANK YOU CONTRIBUTORS!</strong><br><br>";
			document.getElementById("stats").innerHTML = '<h5 align="center"><strong>Last Bonus : ' + toEthString(GreedTokenIco.bonusMultiplier()) + 'x&emsp;Total GREEDs Sold : ' + toEthString(GreedTokenIco.totalTokensSold()) + '&emsp;Total ETHs Raised : ' + toEthString(GreedTokenIco.totalRaised()) + '</strong><br><br></h5>';
			document.getElementById("progressBar").style.display = "none";
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

function progressBar(percent, $element) {
	var progressBarWidth = percent * $element.width() / 100;
	$element.find('div').animate({ width: progressBarWidth }, 500).html("<strong>" + percent + "%&nbsp;Completed&nbsp;</strong>");
}
