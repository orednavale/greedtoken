
//doughnut
var ctxD = document.getElementById("myChart").getContext('2d');
var myLineChart = new Chart(ctxD, {
    type: 'doughnut',
    data: {
        labels: ["Initial Token Sale", "Airdrops", "Second Token Sale", "Bounty/Community Pool", "Future Founders/Advisors Share", "Founders' Share"],
        datasets: [
            {
                data: [10, 35, 40, 5, 8, 2],
                backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360", "#E86528"],
                hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774", "#FC793C"]
            }
        ]
    },
    options: {
        responsive: true
    }    
});

$(document).on('click', '.navbar-nav li', function() {
       $(".navbar-nav li").removeClass("active");
       $(this).addClass("active");
   });

$(document).ready(function() {
  $('.collapse.in').prev('.panel-heading').addClass('active');
  $('#accordion, #bs-collapse')
    .on('show.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').addClass('active');
    })
    .on('hide.bs.collapse', function(a) {
      $(a.target).prev('.panel-heading').removeClass('active');
    });
});

$(function () {
    setNavigation();
});

function setNavigation() {
    var path = window.location.pathname;

    $(".navbar-nav a").each(function () {
        var href = $(this).attr('href');
        var sstr = path.substr(path.indexOf("#"));

        if (sstr.localeCompare(href) == 0) {
            $(this).closest('li').addClass('active');
        }
    });
}

var copyGreedAddress = document.querySelector('#btnCopyAddress');  
copyGreedAddress.addEventListener('click', function(event) {  
  // Select the email link anchor text  
  var addressContract = document.querySelector('#greedAddress');  
  var range = document.createRange();  
  range.selectNode(addressContract);  
  window.getSelection().addRange(range);  

  document.execCommand('copy');  

  // Remove the selections - NOTE: Should use
  // removeRange(range) when it is supported  
  window.getSelection().removeAllRanges();  
});

$(window).scroll(function () {
if ($(window).scrollTop() >= 50) {
$('nav').css('background','#772953');
} else {
$('nav').css('background','transparent');
}
});
