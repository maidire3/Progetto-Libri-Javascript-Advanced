// test/api.test.js
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { fetchCategoryBooks, fetchDetailsBook } from "../js/api.js";

// Crea un mock di Axios
const mock = new MockAdapter(axios);

describe("API con Axios", () => {

  // Reset del mock dopo ogni test
  afterEach(() => {
    mock.reset();
  });

  it("fetchCategoryBooks ritorna lista di libri", async () => {
    const fakeBooks = {
      works: [
        { title: "Libro 1", authors: [{ name: "Autore 1" }] },
        { title: "Libro 2", authors: [{ name: "Autore 2" }] }
      ]
    };

    // Mock della richiesta GET
    mock.onGet("https://openlibrary.org/subjects/Adventure.json").reply(200, fakeBooks);

    const result = await fetchCategoryBooks("Adventure");
    expect(result).toEqual(fakeBooks.works);
  });

  it("fetchCategoryBooks gestisce errore e ritorna array vuoto", async () => {
    mock.onGet("https://openlibrary.org/subjects/InvalidCategory.json").networkError();

    const result = await fetchCategoryBooks("InvalidCategory");
    expect(result).toEqual([]);
  });

  it("fetchDetailsBook ritorna dettagli libro", async () => {
    const fakeDetails = { title: "Libro 1", description: "Descrizione del libro" };

    mock.onGet("https://openlibrary.org/works/OL12345W.json").reply(200, fakeDetails);

    const result = await fetchDetailsBook("/works/OL12345W");
    expect(result).toEqual(fakeDetails);
  });

  it("fetchDetailsBook gestisce errore e ritorna null", async () => {
    mock.onGet("https://openlibrary.org/works/OL00000W.json").networkError();

    const result = await fetchDetailsBook("/works/OL00000W");
    expect(result).toBeNull();
  });

});