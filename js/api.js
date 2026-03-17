import axios from "axios";

export const BaseUrl = "https://openlibrary.org";

export async function fetchCategoryBooks(category) {
    try {
        const { data } = await axios.get(`${BaseUrl}/subjects/${category}.json`);
        return data.works || [];
    } catch (error) {
        console.error("Errore caricamento libri:", error.message);
        return [];
    }
}

export async function fetchDetailsBook(key) {
    try {
        const { data } = await axios.get(`${BaseUrl}${key}.json`);
        return data;
    } catch (error) {
        console.error("Errore caricamento dettagli:", error.message);
        return null;
    }
}