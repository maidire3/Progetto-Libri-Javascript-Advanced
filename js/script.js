import { fetchCategoryBooks, fetchDetailsBook } from "./api.js"
import { viewBookList, viewBookDetails } from "./ui.js";

const searchBtn=document.getElementById("searchBtn")
const categoryInput=document.getElementById("categoryInput")

async function searchBooks() {
    const category = categoryInput.value.trim();
    if (!category) return alert("Inserisci una CATEGORIA!");

    const books = await fetchCategoryBooks(category);
    viewBookList(books, clickedBook);
}

async function clickedBook(key){
    const bookDetails= await fetchDetailsBook(key);
    if(bookDetails)
        viewBookDetails(bookDetails)
}

searchBtn.addEventListener("click", searchBooks);

categoryInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        searchBooks();
    }
});