$(document).ready(function () {
  const $tweetText = $("#tweet-text");
  $tweetText.keyup(function () {
    const max = 140;
    const characterCount = $(this).val().length;
    const displayCount = max - characterCount;
    const $counter = $(".counter");
    $counter.text(displayCount);
    if (characterCount > max) {
      $counter.addClass("alert");
    }
    if (characterCount < max) {
      $counter.removeClass("alert");
    }
  });
});