import { describe, it, expect, vi } from "vitest";
import { fetchCategoryBooks, fetchDetailsBook  } from "../js/api.js";

//TEST fetchCategoryBooks
describe("fetchCategoryBooks", () => {
  it("ritorna una lista di libri", async () => {
    // Mock di fetch
    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            works: [{ title: "Libro test" }]
          })
      })
    );

    const books = await fetchCategoryBooks("fantasy");

    expect(books).toBeDefined();
    expect(books.length).toBeGreaterThan(0);
    expect(books[0].title).toBe("Libro test");
  });

  //FALLIMENTO 
  it("ritorna array vuoto se la risposta NON è ok", async () => {

  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: false,
      json: () => Promise.resolve({})
    })
  );

  const books = await fetchCategoryBooks("fantasy");

  expect(books).toEqual([]);
});

//FALLIMENTO DI RETE
it("ritorna array vuoto se fetch fallisce", async () => {

  global.fetch = vi.fn(() =>
    Promise.reject(new Error("Network error"))
  );

  const books = await fetchCategoryBooks("fantasy");

  expect(books).toEqual([]);
});
});


// TEST fetchDetailsBook
describe("fetchDetailsBook", () => {

    //SUCCESSO
    it("ritorna i dettagli del libro", async () => {

    global.fetch = vi.fn(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            title: "Libro dettagli",
            description: "Descrizione test"
          })
      })
    );

    const book = await fetchDetailsBook("/works/OL123W");

    expect(book).toBeDefined();
    expect(book.title).toBe("Libro dettagli");
  });
  
  //FALLIMENTO
  it("ritorna null se la risposta NON è ok", async () => {

  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok: false
    })
  );

  const book = await fetchDetailsBook("/works/OL123W");

  expect(book).toBeNull();
});

//Fallimento di rete
it("ritorna null se fetch fallisce", async () => {

  global.fetch = vi.fn(() =>
    Promise.reject(new Error("Network error"))
  );

  const book = await fetchDetailsBook("/works/OL123W");

  expect(book).toBeNull();
});
});