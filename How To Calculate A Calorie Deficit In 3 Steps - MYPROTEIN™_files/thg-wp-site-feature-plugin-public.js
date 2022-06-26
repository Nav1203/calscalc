jQuery(document).ready(function($) {
  var image = $("#site-feature-plugin-container>div>img");
  var link = $("#site-feature-plugin-container>div>a");
  var imageSrc = image.attr("data-src");
  if (imageSrc === "") {
    image.hide();
  } else {
    image.attr("src", imageSrc);
  }
  var cookiesRaw = document.cookie;
  var cookiesSplit = cookiesRaw.split(";");
  var cookiesNice = new Array();
  for (var i = 0; i < cookiesSplit.length; i++) {
    var cookiesSplitAgain = cookiesSplit[i].split("=");
    cookiesNice[cookiesSplitAgain[0].replace(" ", "")] = cookiesSplitAgain[1];
  }
  if (cookiesNice["site_feature_dismissed"] === "true") {
    $("#site-feature-plugin-container").hide();
  } else {
    $("#site-feature-plugin-container").css(
      $("#site-feature-plugin-container")
        .attr("class")
        .split(" ")[0],
      "-" + $("#site-feature-plugin-container").height() + "px"
    );
    $("#site-feature-plugin-container").addClass("open");
  }
  $("#site-feature-plugin-container>div").click(function() {
    window.location = link.attr("href");
  });
  $("#site-feature-plugin-container>div>div").click(function(e) {
    e.stopPropagation();
    $(this)
      .parent()
      .fadeOut();
    var dateTime = new Date();
    var dateTimePlus = new Date(
      new Date(dateTime).getTime() + 60 * 60 * 72 * 1000
    );
    document.cookie =
      "site_feature_dismissed=true; expires=Thu, " + dateTimePlus;
  });

  if ($("#site-feature-plugin-container").hasClass("top")) {
    $("#site-feature-plugin-container").insertAfter($("#page-header"));
    $("#page-header").css("margin-bottom", "0px");
    $(".home").css("padding-top", "0px");
    $("#site-feature-plugin-container").css("margin-bottom", "1.5rem");
  } else {
    $("#site-feature-plugin-container").insertAfter($("#tesseract"));
    $('.infinite-loader').css('margin-bottom', $("#site-feature-plugin-container").innerHeight());}
});
