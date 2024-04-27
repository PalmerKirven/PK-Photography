document.addEventListener("DOMContentLoaded", function () {
    // Social Media Sharing Functions
    function shareOnFacebook() {

        const urlToShare = 'https://palmerkirven.github.io/PK-Photography/';
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlToShare)}`;
    window.open(facebookShareUrl, 'Share on Facebook', 'width=600,height=400');
    }
    function shareOnTwitter() {

    const urlToShare = 'your-https://palmerkirven.github.io/PK-Photography/-url';
    const textToShare = 'your-text';
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(urlToShare)}&text=${encodeURIComponent(textToShare)}`;
    window.open(twitterShareUrl, 'Share on Twitter', 'width=600,height=400');
    }
    // Event listeners for social media sharing buttons
    const shareFacebookButton = document.getElementById("share-facebook");
    const shareTwitterButton = document.getElementById("share-twitter");
    shareFacebookButton.addEventListener("click", shareOnFacebook);
    shareTwitterButton.addEventListener("click", shareOnTwitter);
    });
    