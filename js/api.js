export const BaseUrl="https://openlibrary.org"

// Filtra i libri per la categoria
export async function fetchCategoryBooks(category){
    try{
        const response= await fetch(`${BaseUrl}/subjects/${category}.json`)
        if(!response.ok)
            throw new Error("Errore durante il caricamento dei libri!")
        const data=await response.json();
        /* console.log(data.works); */
        return data.works || [];
    }catch(error){
        console.error(error)
    }
}

//Cerca la descrizione dalla key ricevuta
export async function fetchDetailsBook(key){
    try{
        const response= await fetch(`${BaseUrl}${key}.json`)
        if(!response.ok)
            throw new Error("Errore durante il caricamento dei dettagli!");
        const data= await response.json();
        /* console.log(data.description); */
        return data.description || [];
    }catch(error){
        console.error(error)
    }
}

//Esempi di Test
/* fetchCategoryBooks("Adventure")
fetchDetailsBook("/works/OL45089W") */