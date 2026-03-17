export function viewBookList(books, clickOnBook){
    const booksList=document.getElementById("booksList");
    booksList.innerHTML="";

    books.forEach(book => {
        const li=document.createElement("li");
        li.textContent=`${book.title} - ${book.authors?.map(a => a.name).join(", ") || "Autore sconosciuto"}`;
        li.addEventListener("click", ()=> clickOnBook(book.key))
        booksList.appendChild(li);
    });
}

export function viewBookDetails(book){
    const bookDetails=document.getElementById("bookDetails");
    bookDetails.innerHTML="";

    bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        <p>${typeof book.description === "string" ? book.description : book.description?.value || "Nessuna descrizione disponibile"}</p>
    `;
}