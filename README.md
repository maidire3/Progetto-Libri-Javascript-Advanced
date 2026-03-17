# 🦉 Owly Books 📚

Un'applicazione web interattiva per cercare e scoprire libri per categoria, powered by Open Library API.
Visionabile su Netlify al link: [https://calm-puppy-f41e80.netlify.app/](https://calm-puppy-f41e80.netlify.app/)

## 📖 Descrizione

**Owly Books** è un semplice ma elegante motore di ricerca di libri che permette agli utenti di:
- Cercare libri per categoria
- Visualizzare una lista di risultati
- Leggere dettagli completi su ogni libro (titolo, autore, descrizione)
- Navigare con un'interfaccia intuitiva e responsive

L'applicazione utilizza l'API pubblica di [Open Library](https://openlibrary.org/) per recuperare i dati dei libri in tempo reale.

## 🎯 Caratteristiche

✨ **Ricerca per categoria** - Inserisci una categoria (es. fantasy, mystery, science-fiction) e scopri libri correlati  
🎨 **Design moderno** - UI pulita e intuitiva con tema marrone caldo (#8b4513)  
📱 **Responsive design** - Perfetto su desktop, tablet e mobile  
⌨️ **Supporto tastiera** - Premi Enter per cercare  
🎭 **Modal eleganti** - Messaggi di errore con animazioni fluide  
⚡ **Performance** - Caricamento veloce con Vite  
✅ **Test automatizzati** - Suite di test con Vitest

## 🚀 Tecnologie utilizzate

- **HTML5** - Struttura semantica
- **CSS3** - Styling moderno con animazioni
- **JavaScript (ES6+)** - Logica dell'applicazione
- **Axios** - Client HTTP per le richieste API
- **Vite** - Build tool e dev server
- **Vitest** - Testing framework

## 📦 Installazione

### Prerequisiti
- Node.js (v14 o superiore)
- npm o yarn

### Setup locale

```bash
# Clona il repository
git clone https://github.com/maidire3/Progetto-Libri-Javascript-Advanced.git

# Entra nella cartella
cd Progetto-Libri-Javascript-Advanced

# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev
```

L'applicazione sarà disponibile su `http://localhost:5173` (o l'URL indicato da Vite).

## 🏗️ Struttura del progetto

```
├── index.html                 # Entry point HTML
├── css/
│   ├── style.css             # Stili principali
│   └── modal.css             # Stili per i modal
├── js/
│   ├── script.js             # Logica principale e event listeners
│   ├── api.js                # Funzioni per le chiamate API
│   ├── ui.js                 # Rendering dell'interfaccia
│   └── utils.js              # Funzioni di utilità
├── test/
│   └── api.test.js           # Test unitari delle API
├── package.json              # Dipendenze e script
└── README.md                 # Questo file
```

## 💻 Come usare

1. **Inserisci una categoria** nel campo di ricerca (es: "fantasy", "mystery", "romance")
2. **Clicca "Cerca"** oppure premi **Enter**
3. **Seleziona un libro** dalla lista per visualizzare i dettagli
4. I dettagli scorrono automaticamente in vista

### Categorie disponibili

Alcuni esempi:
- `fantasy` - Libri di fantasia
- `mystery` - Gialli e misteri
- `romance` - Storie romantiche
- `science-fiction` - Fantascienza
- `adventure` - Avventura
- `horror` - Horror
- `biography` - Biografie

## 🧪 Test

L'applicazione include una suite di test per le funzioni API:

```bash
# Esegui i test
npm test

# Esegui i test in modalità watch
npm test -- --watch
```

### Cosa viene testato

- ✅ Recupero dei libri per categoria
- ✅ Gestione degli errori di rete
- ✅ Recupero dei dettagli del libro
- ✅ Validazione dei dati

## 🛠️ Build per la produzione

```bash
npm run build
```

Genera i file ottimizzati nella cartella `dist/`, pronta per il deployment.

## 📋 Funzionalità dettagliate

### Ricerca libri (`fetchCategoryBooks`)
- Accetta una categoria come parametro
- Restituisce un array di libri
- Gestisce gli errori restituendo un array vuoto

### Dettagli libro (`fetchDetailsBook`)
- Recupera informazioni complete su un libro
- Include titolo, autore, descrizione
- Scroll automatico ai risultati

### Modal di feedback
- Messaggi di errore eleganti
- Chiusura con click sul bottone
- Chiusura con tasto ESC
- Animazioni fluide

## 🎨 Customizzazione

### Cambia il colore principale
In `style.css` e `modal.css`, sostituisci `#8b4513` con il tuo colore preferito.

### Aggiungi un logo personalizzato
Sostituisci `img/gufo-removebg-preview.png` con la tua immagine.

### Modifica il layout
- Mobile: Modifica il breakpoint in `modal.css` a `@media (max-width: 500px)`
- Desktop: Ajusta `max-width: 900px` in `style.css`

## 🐛 Troubleshooting

**Problema:** "Nessun libro trovato"
- ✓ Controlla l'ortografia della categoria
- ✓ Prova categorie in inglese (l'API supporta principalmente categorie anglofone)

**Problema:** Errore di CORS
- ✓ L'API di Open Library dovrebbe supportare CORS automaticamente
- ✓ Se persiste, controlla la console del browser (DevTools)

**Problema:** Pagina bianca all'avvio
- ✓ Verifica che tutte le dipendenze siano installate: `npm install`
- ✓ Controlla la console per errori

## 📚 API utilizzata

- **Base URL:** https://openlibrary.org
- **Endpoint categorie:** `/subjects/{category}.json`
- **Endpoint libro:** `{key}.json`
- **Documentazione:** https://openlibrary.org/developers/api

## 📝 Licenza

ISC - Vedi il file LICENSE per dettagli

## 🤝 Contributi

Le pull request sono benvenute! Per cambiamenti importanti, apri un issue prima per discutere le modifiche.

## 📧 Supporto

Hai domande o trovato un bug? Apri un [issue su GitHub](https://github.com/maidire3/Progetto-Libri-Javascript-Advanced/issues).

---

**Sviluppato con ❤️ usando JavaScript, HTML e CSS**

Ultimo aggiornamento: 2026-03-17