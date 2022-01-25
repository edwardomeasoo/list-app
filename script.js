const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const filter = document.querySelector('#filter');

// events: item submit, delete, filter
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', filterItems);

function addItem (e) {
	e.preventDefault();
	// grab submitted form text
	const newItem = document.getElementById('item').value;

	// create new li element, populate with newItem
	const li = document.createElement('li');
	li.className = 'list-group-item';
	li.textContent = newItem;

	// create delete button, add to li
	const delBut = document.createElement('button');
	delBut.className = 'btn btn-danger btn-sm float-right delete';
	delBut.textContent = 'X';
	li.appendChild(delBut)

	// append new li to list
	itemList.appendChild(li)
}

function removeItem (e) {
// if click target == delete button, confirm then delete li from list
	if (e.target.classList.contains('delete')) {
		if(confirm('Delete?')) {
			const li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}
function filterItems (e) {
	// convert text to lowercase
	const text = e.target.value.toLowerCase();
	// get items list
	let items = itemList.getElementsByTagName('li');
	// convert to array, then check item content for filter match
	let itemName = '';
	Array.from(items).forEach(item => {
		itemName = item.firstChild.textContent.toLocaleLowerCase();
		if (itemName.includes(text)) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	})
}