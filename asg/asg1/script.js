document.addEventListener('DOMContentLoaded', function() {
  // Get references to HTML elements
  const form = document.getElementById('item-form');
  const itemNameInput = document.getElementById('item-name');
  const itemDescriptionInput = document.getElementById('item-description');
  const itemPriceInput = document.getElementById('item-price');
  const itemImageInput = document.getElementById('item-image');
  const itemList = document.getElementById('item-list');
  const deleteAllBtn = document.getElementById('delete-all-btn');

  // Add event listeners
  form.addEventListener('submit', addItem);
  deleteAllBtn.addEventListener('click', deleteAllItems);

  // Item list array
  let items = [];

  // Handle form submission
  function addItem(event) {
    event.preventDefault();

    // Retrieve input values
    const itemName = itemNameInput.value;
    const itemDescription = itemDescriptionInput.value;
    const itemPrice = itemPriceInput.value;
    const itemImage = itemImageInput.value;

    // Create an object with item details
    const newItem = {
      name: itemName,
      description: itemDescription,
      price: itemPrice,
      image: itemImage
    };

    // Append the new item to the list
    items.push(newItem);

    // Generate HTML markup for item card
    const itemCard = createItemCard(newItem);

    // Append item card to the list container
    itemList.appendChild(itemCard);

    // Clear form inputs
    clearFormInputs();
  }

  // Create HTML markup for item card
  function createItemCard(item) {
    // Generate the necessary markup for an item card using item properties
    // Return the generated HTML markup
  }

  // Clear form inputs
  function clearFormInputs() {
    // Clear the values of form inputs
  }

  // Delete all item cards
  function deleteAllItems() {
    // Remove all item cards from the DOM
    // Clear the items array
  }

});
