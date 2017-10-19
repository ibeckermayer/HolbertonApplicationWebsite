document.addEventListener("DOMContentLoaded", function(event) {
  var thumbnailElement = document.getElementById("smart_thumbnail");
  thumbnailElement.addEventListener("click", function() {
    if (thumbnailElement.className == "hoverimage") {
      thumbnailElement.className = "small hoverimage";
    }
    else {
      thumbnailElement.className = "hoverimage";
    }
  });
});
