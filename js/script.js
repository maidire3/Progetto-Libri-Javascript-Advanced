import { fetchCategoryBooks, fetchDetailsBook } from "./api.js"
import { viewBookList, viewBookDetails } from "./ui.js";
import { createModal } from "./utils.js";


const searchBtn=document.getElementById("searchBtn")
const categoryInput=document.getElementById("categoryInput")

//Fetcha i libri e mostra i risultati
async function searchBooks() {
    const category = categoryInput.value.trim();
    if (!category) {
        document.body.appendChild(
        createModal("error","Errore", "Inserisci una categoria!")
    );
    return;
    }

    searchBtn.disabled = true;
    searchBtn.textContent = "Caricamento...";
    
    const books = await fetchCategoryBooks(category);
    if (!books || books.length === 0) {
        document.body.appendChild(
        createModal("error","Errore", "Nessun libro trovato per questa categoria")
    );
        searchBtn.disabled = false;
        searchBtn.textContent = "Cerca";
        return;
    }
    viewBookList(books, clickedBook);
    
    searchBtn.disabled = false;
    searchBtn.textContent = "Cerca";
}

//Fetcha i details e mostra i risultati quando il libro viene cliccato
async function clickedBook(book){
    const bookdiv=document.getElementById("bookDetails");
    bookdiv.innerHTML = `<p>Caricamento...</p>`;

    const bookDetails= await fetchDetailsBook(book.key);
    if(!bookDetails){
        bookdiv.innerHTML = `<p>Errore nel caricamento</p>`;
        return;
    }

    bookDetails.authors = book.authors;

    viewBookDetails(bookDetails)
}

//Pulsante "cerca" con click/invio
searchBtn.addEventListener("click", searchBooks);

categoryInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        searchBooks();
    }
});