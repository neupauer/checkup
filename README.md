### Prerekvizity

Pre spustenie aplikácie je potrebné mať nainsštalované tieto programy:

- nainštalovaný Node.js (verzie 14 a viac)
- nainštalovaný NPM (verzie 6 a viac) alebo Yarn (verzia 1.2 a viac)
- nainštalovaný Docker - Docker nie je potrebný v prípade ak nepotrebujete spustiť cloudovú databázu

#### Nainštalovanie závislostí

Nainštalovanie potrebných aplikačných závislostí sa vykoná spustením príkazu v terminály:

```bash
npm install
# alebo
yarn
```

#### Spustenie aplikácie

Spustenie aplikácie sa vykoná spustením príkazu v terminály:

```bash
npm run build
npm run start
# alebo
yarn build
yarn start
```

Aplikácia bude dostupná na lokálnej adrese [http://localhost:3000](http://localhost:3000).

### Štruktúra aplikácie

Kód aplikácie je štrukturovaný v adresároch.
Adresár \textbf{/public} je určený pre statické súbory ktoré majú byť dostupné na aplikačnej doméne. Sú to napríklad obrázky, písma, štýli a podobne.
Adresár \textbf{/src} obsahuje samotný zdrojový kód aplikácie. Tento adresár je ďaľej rozdelený na dodatočné adresáre pre lepšiu prehľadnosť.
Adresár \textbf{/src/pages} obsahuje súbory ktoré reprezentujú URL adresy v našej aplikácií.
Adresár \textbf{/src/screens} obsahuje obsahuje samotnú implementáciu obrazoviek, na ktoré sa odkazujú súbory z \textbf{/src/pages}.
Posledným adresárom ktorý stojí za zmienku je adresár \textbf{/src/components}, ktorý obsahuje React.js komponenty používané v aplikácií.

V ostatných adresároch a súboroch sa nachádzajú veci ako konfigurácie, konštanty, pomocné funkcie, inegrácie s databázou .
