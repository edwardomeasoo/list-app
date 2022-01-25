// add an item, from submitted form item
const form = document.getElementById('addForm');
const itemList = document.getElementById('items');

// form submit event
form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e) {
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

function removeItem(e) {
// if click target == delete button, confirm then delete li from list
	if (e.target.classList.contains('delete')) {
		if(confirm('Delete?')) {
			const li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}