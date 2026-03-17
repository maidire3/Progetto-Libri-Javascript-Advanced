import { fetchCategoryBooks, fetchDetailsBook } from "./api.js"

const searchBtn=document.getElementById("searchBtn")
const categoryInput=document.getElementById("categoryInput")

searchBtn.addEventListener("click", async ()=>{
    const category=categoryInput.value.trim();
    if(!category)
        return alert("Inserisci una CATEGORIA!");
    const books= await fetchCategoryBooks(category);
})

async function clickedBook(key){
    const bookDetails= await fetchDetailsBook(key);
}