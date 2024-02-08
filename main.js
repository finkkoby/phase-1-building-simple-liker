// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMessage = document.querySelector("#modal");
errorMessage.className = "hidden";
let hearts = document.querySelectorAll("span.like-glyph");
for(let heart of hearts) {
  heart.addEventListener("click", function(event) {
    if(heart.innerText === "♡") {
      mimicServerCall().then(() => {
        heart.className = "activated-heart";
        heart.innerText = "♥"
      })
      .catch(() => {
        errorMessage.className = "";
        setTimeout(() => {
          errorMessage.className = "hidden";
        }, 3000)
      })
    } else {
      heart.className = "";
      heart.innerText = "♡"
    }
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
