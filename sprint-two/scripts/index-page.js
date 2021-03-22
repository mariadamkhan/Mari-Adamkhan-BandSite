// listing all arrays with their objects 
let allComments = [
  {
    name: "Michael Lyons",
    date: "12 / 18 / 2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.",
  },
  {
    name: "Gary Wong",
    date: "12 / 12 / 2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
  },
  {
    name: "Theodore Duncan",
    date: "11 / 15 / 2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
  },
]

const main = document.querySelector("main");

// function creates a DOM element by
// passing in the element name and class
// & appends it to <main>, thereby creating an article element
// that will hold the entire default comments section
function createElement(elementName, className, data) {
  let el = document.createElement(elementName);
  el.classList.add(className);
  el.innerText = data;
  main.appendChild(el);
}

createElement("article", "default-comments", null);

// stating the article 
let defaultComments = document.querySelector(".default-comments");

// this is the main function takes in the array, 
// loops it through and creates new elements with classes
// nested within each other  
function displayComments(entry) {

   let commentWrap = document.createElement("div");
   commentWrap.classList.add("default-comments__wrap");

   let commentImg = document.createElement("div");
   commentImg.classList.add("default-comments__img");
   commentWrap.appendChild(commentImg);

   let commentBody = document.createElement('div');
   commentBody.classList.add("default-comments__body");
   commentWrap.appendChild(commentBody);

// where the arrays come in now that the structure where they
// can be house is created
   let commentName = document.createElement('h4');
   commentName.classList.add("default-comments__name");
   commentName.innerText = entry.name;
   commentWrap.appendChild(commentBody);
   commentBody.appendChild(commentName);
   let commentDate = document.createElement('span');
   commentDate.classList.add("default-comments__date");
   commentDate.innerText = entry.date;
   commentWrap.appendChild(commentBody);
   commentBody.appendChild(commentDate);
   let commentP = document.createElement('span');
   commentP.classList.add("default-comments__text");
   commentP.innerText = entry.comment;
   defaultComments.appendChild(commentWrap);
   commentWrap.appendChild(commentBody);
   commentBody.appendChild(commentP);

}
// a second function that calls the first one.
function addComment() {
    defaultComments.innerHTML = ' ';
    allComments.forEach(function(allComments) {
        displayComments(allComments);
    })

}
addComment();


