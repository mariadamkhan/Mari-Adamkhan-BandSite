///////////////// default comments/////////

// listing all arrays with their objects
let allComments = [
  {
    name: "Michael Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
];

const main = document.querySelector("main");

// function creates an article tag and appends it to <main>
function createElement() {
  const articleTag = document.createElement("article");
  articleTag.classList.add("default-comments");
  main.appendChild(articleTag);
}
createElement();

let commentsContainer = document.querySelector(".default-comments");

function displayComments(entry) {
  let commentWrap = document.createElement("div");
  commentWrap.classList.add("default-comments__wrap");
  commentsContainer.appendChild(commentWrap);

  let commentImg = document.createElement("div");
  commentImg.classList.add("default-comments__img");
  commentWrap.appendChild(commentImg);

  let commentBody = document.createElement("div");
  commentBody.classList.add("default-comments__body");
  commentWrap.appendChild(commentBody);

  let commentName = document.createElement("h4");
  commentName.classList.add("default-comments__name");
  commentName.innerText = entry.name;
  commentBody.appendChild(commentName);

  let commentDate = document.createElement("span");
  commentDate.classList.add("default-comments__date");
  commentDate.innerText = entry.date;
  commentBody.appendChild(commentDate);

  let commentP = document.createElement("p");
  commentP.classList.add("default-comments__text");
  commentP.innerText = entry.comment;
  commentBody.appendChild(commentP);
}

//////////////// adding a comment to the form ///////////
function addComment() {
  commentsContainer.innerHTML = " ";
  allComments.forEach(function (allComments) {
    displayComments(allComments);
  });
}
addComment();

const now = new Date().toLocaleDateString();
const logComment = document.getElementById("form");
logComment.addEventListener("submit", function (event) {
  event.preventDefault();
  const nameInputValue = event.target.name.value;
  const commentValue = event.target.comment.value;
  const date = now;
  allComments.unshift({
    name: nameInputValue,
    comment: commentValue,
    date: date,
  });

  event.target.reset();
  addComment();
});
