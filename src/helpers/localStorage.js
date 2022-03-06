function addItem(key, item) {
	localStorage.addItem(key, JSON.stringify(item));
}

function deleteItem(key) {
	localStorage.removeItem(key);
}

function getItem(key) {
	return JSON.parse(localStorage.getItem(key));
}

export { addItem, deleteItem, getItem };
