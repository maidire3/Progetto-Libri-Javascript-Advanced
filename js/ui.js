//Mostra i risultati dei LIBRI ottenuti
export function viewBookList(books, clickOnBook){
    const booksList=document.getElementById("booksList");
    booksList.innerHTML="";

    if (books.length === 0) {
        booksList.innerHTML = "<li>Nessun libro trovato</li>";
        return;
    }

    books.forEach(book => {
        const li=document.createElement("li");
        li.textContent=`${book.title} - ${book.authors?.map(a => a.name).join(", ") || "Autore sconosciuto"}`;
        li.addEventListener("click", ()=> clickOnBook(book))
        booksList.appendChild(li);
    });
}

//Mostra i DETTAGLI dei libri
export function viewBookDetails(book){
    const bookDetails=document.getElementById("bookDetails");
   
    const description = typeof book.description === "string" 
        ? book.description 
        : book.description?.value || "Nessuna descrizione disponibile";

    bookDetails.innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Autore:</strong> ${book.authors?.map(a => a.name).join(", ") || "Autore sconosciuto"}</p>
        <p><strong>Descrizione:</strong></p>
        <p>${description}</p>
    `;
    
    bookDetails.classList.add("active");

    //scroll automatico
    bookDetails.scrollIntoView({ behavior: "smooth" });
}