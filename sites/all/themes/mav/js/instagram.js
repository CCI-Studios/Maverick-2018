(function ($) {
	$(function () {
    if ($(".instagram-container").length) {
      $.ajax({
        "type": "GET",
        "url": "https://api.instagram.com/v1/users/self/media/recent?count=4&access_token=3152797019.1677ed0.9b393771eecd4944bd897be69db77dda",
        "success": success,
        "dataType": "jsonp"
      });
    }
	});
	function success (json) {
		if (json && json.data) {
      var html = "";
			for (var i = 0; i < 4; i++) {
				if (json.data[i] && json.data[i].images && json.data[i].images.low_resolution && json.data[i].images.low_resolution.url) {
          var image = json.data[i].images.low_resolution.url;
          var link = json.data[i].link;
					html += "<div class=\"views-row\"><a href=\"" + link + "\" target=\"_blank\" style=\"background-image:url('" + image + "');\"></div>";
				}
      }
      $(".instagram-container").html(html);
		}
	}
}(jQuery));
