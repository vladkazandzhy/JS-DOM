const banner = document.querySelector('#page-banner');
// console.log('#page-banner node type is:', banner.nodeType);
// console.log('#page-banner node name is:', banner.nodeName);
//console.log('#page-banner has child nodes:', banner.hasChildNodes());

// const clonedBanner = banner.cloneNode(true);
// console.log(clonedBanner);

// const bookList = document.querySelector("#book-list");

// console.log('the parent node is: ', bookList.parentNode);
// console.log('the parent element is: ', bookList.parentElement);

// console.log('the grandparent element is: ', bookList.parentElement.parentElement);

//console.log(bookList.childNodes);

// console.log(bookList.children[1]);

const bookList = document.querySelector("#book-list");

// console.log('book-list next sibling is: ', bookList.nextSibling);

// console.log('book-list next sibling is: ', bookList.nextSibling.nextSibling);

// console.log('book-list next element sibling is: ', bookList.nextElementSibling);

// console.log('book-list previous sibling is: ', bookList.previousSibling);

// console.log('book-list previous sibling is: ', bookList.previousSibling.previousSibling);

// console.log('book-list previous element sibling is: ', bookList.previousElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />To cool for everyone else!'