//Global API variables for URL, key, and comments endpoint
const apiUrl = "https://project-1-api.herokuapp.com/"
const apiKey = "?api_key=2d7706ea-6452-405f-9861-54da4454201a"
const commentsEndPoint = "comments"

const main = document.querySelector("main");

// function creates an article tag and appends it to <main>
function createElement() {
  const articleTag = document.createElement("article");
  articleTag.classList.add("default-comments");
  main.appendChild(articleTag);
}
createElement();

//function that loops through every API object and creates an element and a class.
// The API data is then passed into the newly created and nested elements returning an array of comments.
function addComment(apiComments) {
  let commentsContainer = document.querySelector(".default-comments");
  commentsContainer.innerHTML = " ";

  apiComments.forEach((entry) => {
    let commentWrap = document.createElement("div");
    commentWrap.classList.add("default-comments__wrap");
    commentsContainer.appendChild(commentWrap);

    // div for avatar img
    let commentImg = document.createElement("div");
    commentImg.classList.add("default-comments__img");
    commentWrap.appendChild(commentImg);

    let commentBody = document.createElement("div");
    commentBody.classList.add("default-comments__body");
    commentWrap.appendChild(commentBody);

    // h4 element for user name
    let commentName = document.createElement("h4");
    commentName.classList.add("default-comments__name");
    commentName.innerText = entry.name;
    commentBody.appendChild(commentName);
    
    // span for comment date
    let commentDate = document.createElement("span");
    commentDate.classList.add("default-comments__date");
    const now = new Date(entry.timestamp);
    commentDate.innerText = now.toLocaleDateString();
    commentBody.appendChild(commentDate);
    
    // p element for user's comment
    let commentP = document.createElement("p");
    commentP.classList.add("default-comments__text");
    commentP.innerText = entry.comment;
    commentBody.appendChild(commentP);
  });
}

///////////////////////GET Comments/////////////

let getComments = () => {
  axios
    .get(`${apiUrl}${commentsEndPoint}${apiKey}`) //All the global variables above are joined together in a string.
    .then((response) => {
      let apiComments = response.data; // The .then is getting the response from the above concocted URL and storing it in a variable.
      apiComments.sort(function (a, b) {
      return b["timestamp"] - a["timestamp"];  //sorting comments by date
      });
      addComment(apiComments); // The variable apiComments is then passed into the addComment function as a parameter
    })
    .catch((error) => {
      console.log("You've made an error" + error);
    });
};
getComments();

///////////// POST Comments///////////
const logComment = document.getElementById("form");
logComment.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInputValue = event.target.userName.value;
  const commentValue = event.target.userComment.value;
  axios.post(`${apiUrl}${commentsEndPoint}${apiKey}`, {
      name: nameInputValue,
      comment: commentValue,
    })
    .then(() => {
      getComments();
    })
    .catch((error) => {
      console.log("You've made an error" + error);
    });
  event.target.reset();
});
