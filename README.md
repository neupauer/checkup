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
Adresár **/public** je určený pre statické súbory ktoré majú byť dostupné na aplikačnej doméne. Sú to napríklad obrázky, písma, štýli a podobne.
Adresár **/src** obsahuje samotný zdrojový kód aplikácie. Tento adresár je ďaľej rozdelený na dodatočné adresáre pre lepšiu prehľadnosť.
Adresár **/src/pages** obsahuje súbory ktoré reprezentujú URL adresy v našej aplikácií.
Adresár **/src/screens** obsahuje obsahuje samotnú implementáciu obrazoviek, na ktoré sa odkazujú súbory z **/src/pages**.
Posledným adresárom ktorý stojí za zmienku je adresár **/src/components**, ktorý obsahuje React.js komponenty používané v aplikácií.

V ostatných adresároch a súboroch sa nachádzajú veci ako konfigurácie, konštanty, pomocné funkcie, inegrácie s databázou .

### Spustenie databázy cez Docker (Nepovinné)

```
$ docker run -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=admin -p 5984:5984 couchdb
```

#### Inicializácia databázy
```
$ curl -X PUT http://admin:admin@localhost:5984/_users
$ curl -X PUT http://admin:admin@localhost:5984/_replicator
$ curl -X PUT http://admin:admin@localhost:5984/_global_changes
$ curl -X PUT http://admin:admin@localhost:5984/checkup

$ npx add-cors-to-couchdb http://localhost:5984 -u admin -p admin
```
