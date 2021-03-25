let allShows = [

  {
    dateTitle: "Date",
    date: "Mon Dec 17 2018",
  
    venueTitle: "Venue",
    venue: "Ronald Lane",
  
    locationTitle: "Location",
    location: "San Francisco, CA",

    button: "Buy Tickets"
  },

  {
    dateTitle: "Date",
    date: "Tue Jul 18 2019",
 
    venueTitle: "Venue",
    venue: "Pier 3 East",
 
    locationTitle: "Location",
    location: "San Francisco, CA",

    button: "Buy Tickets"
  },

  {
    dateTitle: "Date",
    date: "Fri Jul 22 2019",
 
    venueTitle: "Venue",
    venue: "View Loungue",
  
    locationTitle: "Location",
    location: "San Francisco, CA",

    button: "Buy Tickets"
  },

  {
    dateTitle: "Date",
    date: "Sat Aug 12 2019",
  
    venueTitle: "Venue",
    venue: "Hyatt Agency",
  
    locationTitle: "Location",
    location: "San Francisco, CA",

    button: "Buy Tickets"
  },

  {
    dateTitle: "Date",
    date: "Fri Sep 5 2019",

    venueTitle: "Venue",
    venue: "Moscow Centre",
  
    locationTitle: "Location",
    location: "San Francisco, CA",

    button: "Buy Tickets"
  },

  {
    dateTitle: "Date",
    date: "Wed Aug 11 2020",
 
    venueTitle: "Venue",
    venue: "Pres Club",
  
    locationTitle: "Location",
    location: "San Francisco, CA",

    button: "Buy Tickets"
  },
];

// creating <main> element and placing it its proper place
// between heading & footer
const body = document.body;
const footer = document.querySelector("footer");
const main = document.createElement("main");
body.insertBefore(main, footer);

// function to create <h2> & <div> nested within <section>, and <ul>
// nested within <div>
function createElement() {

  const section = document.createElement("section");
  section.classList.add("shows");

  const h2Tag = document.createElement("h2");
  h2Tag.classList.add("shows__title");
  h2Tag.innerText = "Shows";

  const divTag = document.createElement("div");
  divTag.classList.add("shows__wrap");

  const ulHeaderTag = document.createElement("ul");
  ulHeaderTag.classList.add("shows__header");

  const ulShowsTag = document.createElement("ul");
  ulShowsTag.classList.add("shows__container");

  main.appendChild(section);
  section.appendChild(h2Tag);
  section.appendChild(divTag);
  divTag.appendChild(ulHeaderTag);
  divTag.appendChild(ulShowsTag)
}

createElement();

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

function showsEvents(allShows) {
  const showsUl = document.querySelector(".shows__container");

  allShows.forEach(item =>{
      // list item
      const showsItem = document.createElement("li");
      showsItem.classList.add("shows__item");
      
      // h3 element for date
      const dateHeading = document.createElement("h3");
      dateHeading.classList.add("shows__subtitle");
      dateHeading.innerText = item.dateTitle;
      
      // p element for date info
      const showsDate = document.createElement("p");
      showsDate.classList.add("shows__data");
      if (item.date == 2018 || 2019 || 2020 ||2021 ){
          showsDate.classList.add("shows__data--emph")
      }
      showsDate.innerText = item.date;
      
      // h3 element for venue
      const venueHeading = document.createElement("h3");
      venueHeading.classList.add("shows__subtitle");
      venueHeading.innerText = item.venueTitle;
      
      // p element for venue info
      const showsVenue = document.createElement("p");
      showsVenue.classList.add("shows__data");
      showsVenue.innerText = item.venue;
      
      // h3 element for location
      const locationHeading = document.createElement("h3");
      locationHeading.classList.add("shows__subtitle");
      locationHeading.innerText = item.locationTitle;
      
      // p element for location info
      const showsLocation = document.createElement("p");
      showsLocation.classList.add("shows__data");
      showsLocation.innerText = item.location;
      
       // buttom element 
      const showsButton = document.createElement("button");
      showsButton.classList.add("shows__cta");
      showsButton.innerText = item.button;
      
      // appending all newly created elements to their proper
      // nested positions 
      showsUl.appendChild(showsItem);
      showsItem.appendChild(dateHeading);
      showsItem.appendChild(showsDate);
      showsItem.appendChild(venueHeading);
      showsItem.appendChild(showsVenue);
      showsItem.appendChild(locationHeading);
      showsItem.appendChild(showsLocation);
      showsItem.appendChild(showsButton);

  })
}

showsEvents(allShows);