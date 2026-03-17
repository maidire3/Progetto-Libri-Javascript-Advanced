export function viewBookList(books, clickOnBook){
    const booksList=document.getElementById("booksList");
    booksList.innerHTML="";
    
    books.forEach(book => {
        const li=document.createElement("li");
        li.textContent=`${book.title} - ${book.authors.map(a=>a.name)}`;
        li.addEventListener("click", clickOnBook(book.key))
        booksList.appendChild(li);
    });
}
