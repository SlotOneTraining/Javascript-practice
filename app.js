var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click',removeItem);
// Filter event
filter.addEventListener('keyup', filterItems)

// Add item
function addItem(e){
    e.preventDefault();

   // Get input value
   var newItem = document.getElementById('item').value;

   // Create new li element
   var li = document.createElement('li');
   // Add class 
   li.className = 'list-group-item';
   // Add text node with input value
   li.appendChild(document.createTextNode(newItem));

    // Create del button element
    var deleteBtn = document.createElement('button');
    // Add delet button class
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // Append text node
    deleteBtn.appendChild(document.createTextNode('x'));

    // Append button to li
    li.appendChild(deleteBtn);


   // Append li to ul's list
   itemList.appendChild(li);
}


// Remove item
function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if(confirm('Are You sure ?')){  // confirm() feldob egy popup ablakot ahol igen/nem-et kell válaszonunk (true/false)
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}


// Filter items
function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get list
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item) {  // Array.from(tomb) --> Adott elemből tömböt készít
        var itemName = item.firstChild.textContent;
        
        if(itemName.toLowerCase().indexOf(text) != -1){  // indexOf --> megnézi, hogy metalálható-e az adott string a keresett értékben, ha van akkor vissza adja azt a számot, hogy melyik karakternél találta, ha nincs benne olyan karakter akkor -1 -et ad vissza.
            item.style.display = 'block';
        }else{
            item.style.display = 'none';
        }
    });
}