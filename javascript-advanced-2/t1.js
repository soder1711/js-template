// your code here
import {restaurantRow, restaurantModal} from "./components.js";
import {baseUrl} from "./variables.js";
import {fetchData} from "./utils.js";

const table = document.querySelector("table");
const dialog = document.querySelector("dialog");

let restaurants = [];
let displayedRows = [];

const getMenu = async (restaurant) => {
  return fetchData(`${baseUrl}/restaurants/daily/${restaurant._id}/en`);
}
const getRestaurants = async () => {
  restaurants = await fetchData(`${baseUrl}/restaurants`);
  const sortedRestaurants = restaurants.sort((a, b) => a.name.localeCompare(b.name));
  for (let restaurant of sortedRestaurants) {
    const row = restaurantRow(restaurant);
    table.appendChild(row);
    displayedRows.push(row);
    const name = row.querySelector("td");
    name.addEventListener("click", () => {
      openRestaurant(restaurant, row);
    });
  }
}

const openRestaurant = async (restaurant, row) => {
  try {
    const highlighted = document.querySelectorAll('.highlight');
    highlighted.forEach(element => element.classList.remove('highlight'));
    // for (let element of highlighted) {
    //   element.classList.remove('highlight');
    // }
    row.classList.add('highlight');
    const menu = await getMenu(restaurant);
    dialog.innerHTML = restaurantModal(restaurant, menu);
    dialog.innerHTML += `<button id="close">Close</button>`;
    dialog.showModal();
    document.querySelector('#close').addEventListener('click', () => {
      dialog.close();
    });
  }
  catch (error) {
    dialog.innerHTML = `<h2>Something totally went wrong teehee</h2><p>Failed to retrieve today's menu.</p><button id="close">Close</button>`;
    dialog.showModal();
    document.querySelector('#close').addEventListener('click', () => {
      dialog.close();
    });
  }
}

const renderTable = (company = "all") => {
  displayedRows.forEach((row) => row.remove());
  displayedRows = restaurants
    .filter((restaurant) => company === "all" || restaurant.company?.toLowerCase() === company)
    .map((restaurant) => {
      const row = restaurantRow(restaurant);
      row.addEventListener("click", () => openRestaurant(restaurant, row));
      table.appendChild(row);
      return row;
    });
};



const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach(button => {
  button.addEventListener("click", async() => {
    const selected = document.querySelectorAll(".active-filter");
    selected.forEach(element => element.classList.remove("active-filter"));
    button.classList.add("active-filter");
    renderTable(button.dataset.company);
  });
});

getRestaurants();
