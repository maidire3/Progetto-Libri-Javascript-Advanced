import { fetchCategoryBooks, fetchDetailsBook } from "./api.js"
import { viewBookList } from "./ui.js";

const searchBtn=document.getElementById("searchBtn")
const categoryInput=document.getElementById("categoryInput")

searchBtn.addEventListener("click", async ()=>{
    const category=categoryInput.value.trim();
    if(!category)
        return alert("Inserisci una CATEGORIA!");
    const books= await fetchCategoryBooks(category);
    viewBookList(books,clickedBook)
})

async function clickedBook(key){
    const bookDetails= await fetchDetailsBook(key);
}