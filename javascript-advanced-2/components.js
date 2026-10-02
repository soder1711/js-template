const restaurantRow = (restaurant) => {
  const row = document.createElement("tr");
  row.innerHTML = `<td>${restaurant.name}</td><td>${restaurant.address}</td>`;
  return row;
}
const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses} = menu;
  let menuHtml = "";
  courses.forEach(({name, price, diets}) => {
    menuHtml += `<p>${name} - ${price} - ${diets}</p>`;
  });
  return `<h2>${!name || name === "-" ? "Not available" : name}</h2>
  <p>Address: ${!address || address === "-" ? "Not available" : address}</p>
  <p>Postal code: ${!postalCode || postalCode === "-" ? "Not available" : postalCode}</p>
  <p>City: ${!city || city === "-" ? "Not available" : city}</p>
  <p>Phone: ${!phone || phone === "-" ? "Not available" : phone}</p>
  <p>Company: ${!company || company === "-" ? "Not available" : company}</p>
  <h3>Today's menu:</h3>
  ${menuHtml || "<p>No menu available today.</p>"}`;
}
export {restaurantRow, restaurantModal};
