// more efficient solution
// delete books
const list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    // if button, then delete
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }  
})

// add book-list
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
   e.preventDefault();
   const value = addForm.querySelector('input[type="text"]').value

    // create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    // add content
   deleteBtn.textContent = 'delete';
   bookName.textContent = value;

   // add classes
   bookName.classList.add('name');
   deleteBtn.classList.add('delete');
});









