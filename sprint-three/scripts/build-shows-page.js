// creating <main> element and placing it its proper place
// between heading & footer
const body = document.body;
const footer = document.querySelector("footer");
const main = document.createElement("main");
body.insertBefore(main, footer);

// creating a <section> element within <main>
const section = document.createElement("section");
section.classList.add("shows");
main.appendChild(section);

// function creates a DOM element by
// passing in the element name and class
// & appends it to <section>
function createElement(elementName, className, data) {
  let el = document.createElement(elementName);
  el.classList.add(className);
  el.innerText = data;
  section.appendChild(el);
}
createElement("h2", "shows__title", "Shows");

// creating a <div> element within <section>
const div = document.createElement("div");
div.classList.add("shows__wrap");
section.appendChild(div);

function createShowsCont(elementName, className, data) {
  let el = document.createElement(elementName);
  el.classList.add(className);
  el.innerText = data;
  div.appendChild(el);
}
// creating a <ul> section and insert into <div>
createShowsCont("ul", "shows__header", null);

// array for show headers
const showsHeadings = ["Dates", "Venue", "Location"];

// function that creates list items with an existing array within the <ul>
function createListItem(array) {
  const showsHeader = document.querySelector(".shows__header");
  const showItem = document.createElement("li");
  showItem.classList.add("shows__categories");
  showItem.innerText = array;
  showsHeader.appendChild(showItem);
}

showsHeadings.forEach((item) => createListItem(item));

//shows <ul>
createShowsCont("ul", "shows__container", null);
createShowsCont("ul", "shows__container", null);
createShowsCont("ul", "shows__container", null);
createShowsCont("ul", "shows__container", null);
createShowsCont("ul", "shows__container", null);
createShowsCont("ul", "shows__container", null);

let ul = document.querySelectorAll(".shows__container");

// objects in arrays
let firstShow = [
  {
    h3: "Date",
    p: "Mon Dec 17 2018"
  },
  {
    h3: "Venue",
    p: "Ronald Lane"
  },
  {
    h3: "Location",
    p: "San Francisco, CA"
  },
];

let button = ["Buy Tickets"];

let secondShow = [
  {
    h3: "Date",
    p: "Tue Jul 18 2019"
  },
  {
    h3: "Venue",
    p: "Pier 3 East"
  },
  {
    h3: "Location",
    p: "San Francisco, CA"
  },
];

let thirdShow = [
  {
    h3: "Date",
    p: "Fri Jul 22 2019"
  },
  {
    h3: "Venue",
    p: "View Loungue"
  },
  {
    h3: "Location",
    p: "San Francisco, CA"
  },
];

let fourthShow = [
  {
    h3: "Date",
    p: "Sat Aug 12 2019"
  },
  {
    h3: "Venue",
    p: "Hyatt Agency"
  },
  {
    h3: "Location",
    p: "San Francisco, CA"
  },
];

let fifthShow = [
  {
    h3: "Date",
    p: "Fri Sep 5 2019"
  },
  {
    h3: "Venue",
    p: "Moscow Centre"
  },
  {
    h3: "Location",
    p: "San Francisco, CA"
  },
];

let sixthShow = [
  {
    h3: "Date",
    p: "Wed Aug 11 2020"
  },
  {
    h3: "Venue",
    p: "Pres Club"
  },
  {
    h3: "Location",
    p: "San Francisco, CA"
  },
];

let allShows = [
  firstShow,
  secondShow,
  thirdShow,
  fourthShow,
  fifthShow,
  sixthShow,
];

// function creates 3 <li>s within a <ul>
// with <h3> and <p> tags
function createContainerItem(array, idx) {
  const listItem = document.createElement("li");
  listItem.classList.add("shows__item");
  const h3Tag = document.createElement("h3");
  h3Tag.classList.add("shows__subtitle");
  h3Tag.innerText = array.h3;
  const pTag = document.createElement("p");
  pTag.classList.add("shows__data");
  pTag.innerText = array.p;
  ul[idx].appendChild(listItem);
  listItem.appendChild(h3Tag);
  listItem.appendChild(pTag);
}

// function creates a <button> within the 4th <li>
// within the <ul>
function createCtaListItem(array, idx) {
  const listItem = document.createElement("li");
  listItem.classList.add("shows__item");
  const cta = document.createElement("button");
  cta.classList.add("shows__cta");
  cta.innerText = array;
  ul[idx].appendChild(listItem);
  listItem.appendChild(cta);
}

for (let i = 0; i < allShows.length; i++) {
  allShows[i].forEach((item) => createContainerItem(item, i));
  button.forEach((item) => createCtaListItem(item, i));
}
