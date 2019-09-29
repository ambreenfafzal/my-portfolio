$(window).on("load", function() {
  $("#floater").hide();
});

$("#portfolioNav").on("click", function() {
  const portfolio = document.getElementById("showPortfolio");
  portfolio.scrollIntoView({ block: "end", behavior: "smooth" });
  $("#floater").show();
});

$("#floater").on("click", function() {
  $(window).scrollTop(0);
  $("#floater").hide();
});

$("#aboutButton").on("click", function() {
  $(window).scrollTop();
});

$("#contactButton").on("click", function() {
  const portfolio = document.getElementById("foot");
  portfolio.scrollIntoView({ block: "end", behavior: "smooth" });
  $("#floater").show();
});

$("#send-button").on("click", function() {
 
  event.preventDefault();
 var confirmation = document.getElementById("message")
 alert(confirmation);
      });




