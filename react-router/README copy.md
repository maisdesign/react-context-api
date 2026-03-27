# BoolStore — Mini E-Commerce Frontend

**Live:** https://boolstore-react.netlify.app/

Creiamo il frontend del nostro mini e-commerce e le sue pagine principali!
Useremo Fake Store API come backend fittizio per simulare i dati dei prodotti.
https://fakestoreapi.com/

## Obiettivi dell'esercizio

- Installiamo React Router DOM: `npm i react-router-dom`
- Creiamo almeno 3 pagine principali:
  - **Homepage** (con un messaggio di benvenuto o immagine promozionale)
  - **Chi siamo**
  - **Prodotti** (pagina che mostrerà la lista dei prodotti prendendoli da https://fakestoreapi.com/products)
- Implementiamo una **Navbar** visibile in tutte le pagine per navigare tra di esse

## Bonus

- Centralizziamo la Navbar usando un componente **Layout**
- Gestiamo la classe **active** per i link attivi nella Navbar

---

## Esercizio 2 — Pagina di dettaglio prodotto

### Obiettivi

- ✅ Ogni prodotto nella pagina Prodotti è cliccabile tramite `<Link>`
- ✅ Pagina di dettaglio (`/product/:id`) che recupera i dati da `https://fakestoreapi.com/products/:id`
- ✅ Routing dinamico con lettura dell'`id` dalla URL tramite `useParams()`

### Bonus

- ✅ Navigazione programmatica con `useNavigate()` verso il catalogo se il prodotto richiesto non esiste
- ✅ Pagina **404** per route non riconosciute
- ✅ Spinner di **loading** durante il caricamento del dettaglio

### Super Bonus

- ✅ Pulsanti **prodotto precedente / successivo** nella pagina di dettaglio, implementati con `useNavigate()` in modo programmatico

---

## Sviluppo aggiuntivo post-esercizio

Una volta completati gli obiettivi base, il progetto è stato esteso con un ciclo completo di design e implementazione UI.

### 1. Prototipo UI con Stitch

Il design visivo dell'applicazione è stato generato tramite **Stitch**, uno strumento AI che produce prototipi HTML statici con Tailwind CSS partendo da una descrizione testuale. Sono stati generati due schermi:

- `home_page/code.html` — homepage completa con navbar, hero, categories, featured product, newsletter, footer
- `product_catalog/code.html` — pagina catalogo prodotti con griglia, utility bar e paginazione

Questi file HTML sono conservati in `Baseline stile/` come riferimento visivo.

### 2. Traduzione del design in CSS semantico

Le classi Tailwind del prototipo Stitch sono state tradotte manualmente in **CSS custom semantico** (`src/index.css`), organizzato in sezioni:

| Sezione | Classi principali |
|---|---|
| Navbar | `.site-nav`, `.site-nav-inner`, `.site-nav-link`, `.site-nav-brand` |
| Hero | `.hero`, `.hero-content`, `.hero-image-wrap`, `.hero-img` |
| Brand Identity | `.brand-identity`, `.spec-list`, `.spec-row` |
| Categories | `.categories`, `.categories-grid`, `.category-card`, `.category-overlay` |
| Single Product | `.single-product`, `.product-image-box`, `.product-badge` |
| Newsletter | `.newsletter`, `.newsletter-form` |
| Catalog | `.catalog-page`, `.catalog-utility-bar`, `.items-container` |
| Footer | `.site-footer`, `.footer-inner`, `.footer-links` |

Il sistema usa un set di **CSS custom properties** (variabili) derivato dal color scheme Material Design 3, identico a quello usato da Stitch.

### 3. Refactoring dei componenti

I componenti Bootstrap generici sono stati sostituiti con componenti custom dedicati, ciascuno con le proprie classi semantiche:

```
src/components/
├── header/         Header.jsx
├── navbar/         NavBar.jsx        ← dropdown categorie da API
├── sections/       Hero.jsx, Newsletter.jsx
├── home/           BrandIdentity.jsx
├── categories/     Categories.jsx    ← dumb component, dati via props
├── products/       GridView.jsx, ListView.jsx
│   └── singleProduct/  HomeSingleProduct.jsx
└── footer/         Footer.jsx
```

I contenuti statici (testi hero, specifiche brand, prodotto in evidenza) sono centralizzati in `src/data/config.js`.

### 4. Pagine implementate

| Route | Componente | Descrizione |
|---|---|---|
| `/` | `HomePage` | Hero + BrandIdentity + Categories + Featured + Newsletter |
| `/products/:page` | `Products` | Catalogo completo con paginazione |
| `/category/:name/:page` | `CategoryPage` | Catalogo filtrato per categoria |
| `/product/:id` | `ProductDetail` | Dettaglio singolo prodotto |
| `/about-us` | `AboutUs` | Pagina informativa |

### 5. Funzionalità catalog

La pagina `Products` (usata sia da `/products` che da `/category/:name`) include:

- **Paginazione** client-side con `ITEMS_PER_PAGE` configurabile
- **Ordinamento** per nome (A-Z / Z-A), prezzo e rating
- **Vista grid / lista** toggle con animazioni hover
- **Titolo dinamico**: su `/category/:name` mostra il nome della categoria al posto di "The Collection"

### 6. Allineamento visivo con il baseline Stitch

Dopo l'implementazione è stato condotto un audit sistematico confrontando il CSS prodotto con il prototipo Stitch. Le correzioni applicate:

- **Navbar**: spacing brand↔links (3rem), links gap (2rem), font size/tracking/opacity dei link, border bottom assoluto contenuto nel `max-width: 1440px`
- **Spec list**: rimossi i border-bottom tra le righe (Stitch usa solo gap), ridotta l'opacità del border-left al 30%
- **Single product**: ridotta l'opacità dei border-y al 10%
- **Padding `lg`**: aggiunto breakpoint 1024px con `padding: X 6rem` su brand-identity, categories, single-product (replica `lg:px-24` di Tailwind)
- **Hero mobile**: su viewport < 768px l'immagine diventa sfondo assoluto (`position: absolute; inset: 0`) con il testo sovrapposto e centrato — replicando il pattern `absolute inset-0 md:relative` di Stitch
- **Categories grid**: `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` — si adatta dinamicamente al numero di categorie restituite dall'API

### Stack tecnico

- React 18 + Vite
- React Router DOM v6
- Bootstrap 5 (grid e utility classes)
- CSS custom (design system completo in `src/index.css`)
- Fake Store API (`fakestoreapi.com`)
- `react-spinners` (loading states)
- Font: Inter, Space Grotesk (Google Fonts), Material Symbols Outlined
