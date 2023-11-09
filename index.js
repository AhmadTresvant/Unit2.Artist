//Refrences 
const form = document.querySelector(`form`);
const ol = document.querySelector(`ol`);
const input = document.querySelector(`input`);
const apiLink = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2310-fsa-et-web-ft-sf/`;
const main = document.querySelector(`main`);

const state = {
  allArtists: [],
}


const getAllArtists = async () => {
  const response =  await fetch(`${apiLink}artists`);
  const jsonResponse = await response.json();
  state.allArtists = jsonResponse.data;
  renderAllArtists(state);
}

const init = async () => {
  await getAllArtists();
  const eachLI = document.querySelectorAll(`li`);
  console.log(eachLI);
}
init();


const renderAllArtists = (state) => {
  const artistsInLi = state.allArtists.map((eachArtists) => {
    return `<li id="${eachArtists.id}">${eachArtists.name}</li>`;
  });
  ol.innerHTML = artistsInLi.join('');
  main.appendChild(ol);
}

const getAllDetailsArtists = async () => {
  const response =  await fetch(`${apiLink}artists`);
  const jsonResponse = await response.json();
  state.allArtists = jsonResponse.data;
  renderAllArtists(state);
}

const renderArtistDetails = (state) => {
  const html = `<h2>Artist Details</h2>`

}




















// create a state that can hold api as a global     CHECK

// function that will get all data from Artists (has render function at the bottom)

// function that will render all Artists on to the page

// function that will get all details of the event 

// function that will that will render all event details






