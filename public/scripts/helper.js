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
//xss
// .text().html()
// ${$("<div>").text(tweetData.user.name).html()}
// ${$("<div>").addClass("article-header-right").text(tweetData.user.handle).html()}

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

const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// module.exports = {createTweetElement, renderTweets, loadTweets, escape};