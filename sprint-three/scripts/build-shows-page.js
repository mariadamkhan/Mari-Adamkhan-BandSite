//Global API variables for URL, key, and Shows endpoint
const apiUrl = "https://project-1-api.herokuapp.com/"
const apiKey = "?api_key=facc6bbf-54f1-4f7f-8b76-3c9696bf90f1"
const showDatesEndPoint = "showdates"

// creating <main> element and placing it its proper place
// between heading & footer
const body = document.body;
const footer = document.querySelector("footer");
const main = document.createElement("main");
body.insertBefore(main, footer);

// function to create <h2> & <div> nested within <section>, and <ul>
// nested within <div>
function createElement() {
  // section
  const section = document.createElement("section");
  section.classList.add("shows");
  main.appendChild(section);

  // h2
  const h2Tag = document.createElement("h2");
  h2Tag.classList.add("shows__title");
  h2Tag.innerText = "Shows";
  section.appendChild(h2Tag);

  // div
  const divTag = document.createElement("div");
  divTag.classList.add("shows__wrap");
  section.appendChild(divTag);

  // ul
  const ulHeaderTag = document.createElement("ul");
  ulHeaderTag.classList.add("shows__header");
  divTag.appendChild(ulHeaderTag);

  // second ul
  const ulShowsTag = document.createElement("ul");
  ulShowsTag.classList.add("shows__container");
  divTag.appendChild(ulShowsTag)
}

createElement(); //calling the function

// array of headings for the <ul> with class "shows__header"
const showsHeadings = ["Dates", "Venue", "Location"];

// function to populate the <ul> with class "shows__header" with the above array
function showsHeader(showsHeadings) {
  const showsHeaderUl = document.querySelector(".shows__header");

  showsHeadings.forEach(item => {
      const listItemHeader = document.createElement("li");
      listItemHeader.classList.add("shows__categories");
      listItemHeader.innerText = item;
      showsHeaderUl.appendChild(listItemHeader);

  })
}

showsHeader(showsHeadings);

// function that loops through every API object and creates an element and a class
// The API data is then passed into the newly created and nested elements returning an array of shows.
function showsEvents(apiShows) {
  const showsUl = document.querySelector(".shows__container");

  apiShows.forEach(show =>{
      // list item
      const showsItem = document.createElement("li");
      showsItem.classList.add("shows__item");
      showsUl.appendChild(showsItem);
      
      // h3 element for date
      const dateHeading = document.createElement("h3");
      dateHeading.classList.add("shows__subtitle");
      dateHeading.innerText = "Date";
      showsItem.appendChild(dateHeading);
      
      // p element for date info
      const showsDate = document.createElement("p");
      showsDate.classList.add("shows__data");
      if (show.date == 2018 || 2019 || 2020 ||2021 ){  //creating a modifier
          showsDate.classList.add("shows__data--emph")
      }
      showsDate.innerText = show.date;
      showsItem.appendChild(showsDate);
      
      // h3 element for venue
      const venueHeading = document.createElement("h3");
      venueHeading.classList.add("shows__subtitle");
      venueHeading.innerText = "Venue";
      showsItem.appendChild(venueHeading);
      
      // p element for venue info
      const showsVenue = document.createElement("p");
      showsVenue.classList.add("shows__data");
      showsVenue.innerText = show.place;
      showsItem.appendChild(showsVenue);
      
      // h3 element for location
      const locationHeading = document.createElement("h3");
      locationHeading.classList.add("shows__subtitle");
      locationHeading.innerText = "Location";
      showsItem.appendChild(locationHeading);
      
      // p element for location info
      const showsLocation = document.createElement("p");
      showsLocation.classList.add("shows__data");
      showsLocation.innerText = show.location;
      showsItem.appendChild(showsLocation);
      
       // buttom element 
      const showsButton = document.createElement("button");
      showsButton.classList.add("shows__cta");
      showsButton.innerText = "Buy Tickets";
      showsItem.appendChild(showsButton);

  })
}

// function to GET /showdates
let getApiShows = () => {
  axios.get(`${apiUrl}${showDatesEndPoint}${apiKey}`) //All the global variables above are joined together in a string.
    .then( response => {  
      console.log(response)
      let apiShows = response.data; // The then is getting the response from the above concocted URL and storing it in a variable.
      showsEvents(apiShows);       // The variable apiShows is then passed into the showsEvents function aas a parameter

      })
    .catch(error => {
      console.log("You've made an error" + error)
    })
};  
  getApiShows();

  