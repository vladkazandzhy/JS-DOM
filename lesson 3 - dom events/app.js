// var h2 = document.querySelector('#book-list h2');
// h2.addEventListener('click', function(event){
//     console.log(event.target); // target shows which element was clicked
//     console.log(event); 
// })

// var btns = document.querySelectorAll('#book-list .delete');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const li = e.target.parentElement;
//         li.parentElement.removeChild(li);
//     })
// })

// const link = document.querySelector('#page-banner a');
// link.addEventListener('click', function(event){
//    event.preventDefault();
//    console.log('navigation to', event.target.textContent, 'was prevented!');
// })

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




