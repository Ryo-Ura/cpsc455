
const itemForm = document.getElementById('itemForm');
const itemList = document.getElementById('item-list');
const deleteAllBtn = document.getElementById('delete-all-btn');

let items = [];
var initialItemsString = '[{"name":"Item 1","description":"Description 1","price":10,"imageURL":"https://slp-statics.astockcdn.net/static_assets/staging/22spring/free/browse-vector-categories-collections/Card4_399895799.jpg?width=580"}]';
items = JSON.parse(initialItemsString);


itemForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission and page reload

  // Retrieve form field values
  console.log(event)
  const itemName = document.getElementById('itemName');
  const description = document.getElementById('description');
  const price = document.getElementById('price');
  const imageURL = document.getElementById('imageURL');

  var newItem = {
      name: itemName.value,
      description: description.value,
      price: parseFloat(price.value),
      imageURL: imageURL.value
  };

  items.push(newItem);
  displayItem(newItem);
});

deleteAllBtn.addEventListener('click', () => {
  itemList.innerHTML = '';
  items = [];
});

function displayItem(item) {
  const itemList = document.getElementById('item-list');

  // Create a card element
  const card = document.createElement('div');
  const cardImage = document.createElement('div');
  const cardContent = document.createElement('div');
  const itemName = document.createElement('h2');
  const description = document.createElement('p');
  const price = document.createElement('p');
  const priceValue = parseFloat(item.price); // Convert price to a number
  const image = document.createElement('img');

  card.classList.add('card');
  cardImage.classList.add('card-image');
  cardContent.classList.add('card-content');
  itemName.classList.add('item-name');
  description.classList.add('description');
  price.classList.add('price');
  image.src = item.imageURL;

  itemName.textContent = item.itemName;
  description.textContent = item.description;
  price.innerHTML = `<a href="#" onClick="handlePriceClick(event, ${priceValue})">Price: $${priceValue.toFixed(2)}</a>`;

  cardImage.appendChild(image);
  cardContent.appendChild(itemName);
  cardContent.appendChild(description);
  cardContent.appendChild(price);
  card.appendChild(cardImage);
  card.appendChild(cardContent);
  itemList.appendChild(card);
}

function initializePage() {
  items.forEach(function(item) {
    displayItem(item);
  });
}

window.addEventListener('load', initializePage);

function clearForm() {
  itemForm.reset();
}

function handlePriceClick() {
  const sortedItems = items.sort((a, b) => a.price - b.price);
  itemList.innerHTML = '';
  sortedItems.forEach(function (item) {
      displayItem(item);
  });
}
