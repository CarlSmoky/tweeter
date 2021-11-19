/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  loadTweets();

  $("form").on("submit", function(event) {
    event.preventDefault();
    $('.errorContainer').empty();

    //Error display
    const val = $("#tweet-text").val();
    if (val === "" || !val) {
      $('.errorContainer').empty();
      const errorMsg = '<p class="errorMsg"><i class="fas fa-exclamation-triangle"></i>You need input something.<i class="fas fa-exclamation-triangle"></i></p>';
      $('.errorContainer').append(errorMsg);
      return;
    }
    if (val.length > 140) {
      $('.errorContainer').empty();
      const errorMsg = '<p class="errorMsg"><i class="fas fa-exclamation-triangle"></i>Too long!! You can input 140 letters maximum.<i class="fas fa-exclamation-triangle"></i></p>';
      $('.errorContainer').append(errorMsg);
      return;
    }
    
    let url = "/tweets";
    let tweet = $("#tweet-text");
    const tweetText = tweet.serialize();

    $.ajax({
      url: url,
      method: "POST",
      data: tweetText
    }).then(()=> {
      $(this).find('textarea').val("");
    });
    $.get("http://localhost:8080/tweets", (data) => {
      const newtweets = data.slice(-1).pop();
      const newTweetElement = createTweetElement(newtweets);
      $('#tweets-container').prepend(newTweetElement);
    });
  });
});