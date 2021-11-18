/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//<--------Helper functions------------->
const createTweetElement = function(tweetData) {
  const $html = `<article class="tweet">
  <header>
  <div class="article-header-left">
  <img src=${tweetData.user.avatars}>
  <span>${escape(tweetData.user.name)}</span>
  </div>
  <span class="article-header-right">${escape(tweetData.user.handle)}</span>
  </header>
  <p class="textTweet">${escape(tweetData.content.text)}</p>
  <footer>
  <span>${timeago.format(tweetData.created_at)}</span>
  <div class="icons">
  <i class="fas fa-flag"></i>
  <i class="fas fa-retweet"></i>
  <i class="fas fa-heart"></i>
  </div>
  </footer>
  </article>`;
  return $html;
};

const renderTweets = function(tweets) {
  // loops through tweets
  $.each(tweets, (key) => {
    // calls createTweetElement for each tweet
    let $tweet = createTweetElement(tweets[key]);
    // takes return value and appends it to the tweets container
    $('#tweets-container').prepend($tweet);
  });
};

const loadTweets = () => {
  $.ajax('/tweets', { method: "GET" })
    .then((data) => {
      renderTweets(data);
    });
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
//<--------Helper functions------------->

$(document).ready(function() {

  loadTweets();

  $("form").on("submit", function(event) {
    event.preventDefault();
    $('.errorContainer').empty();
    let url = "/tweets";

    const val = $("#tweet-text").val();
    console.log(val);
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
    let tweet = $("#tweet-text");
    const tweetText = tweet.serialize();

    $.ajax({
      url: url,
      method: "POST",
      data: tweetText
    }).then(()=> {
      $('#tweets-container').empty();
      loadTweets();
      console.log(event);
    });
    
  });
});