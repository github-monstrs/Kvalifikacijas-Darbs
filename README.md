# Projekta apraksts

RVT 3.kursa WEB programmēšanas moduļa gala projekts. Kvalifikācijas darba iesākums.

## Projekta izstrādes rīki

Lai izveidotu šo projektu tika izmantots:
- **vue.js** - frontend
- **Pinia + Axios** - komunikācijai ar backend
- **Laravel** - backend
- **Laravel sail + Docker** - Projekta palaišana
- **PostgreSQL** - datubāze

Un projektu izstrādāju izmantojot Visual Studio Code.

## Projekta uzstādīšana/palaišana

Lai palaistu projektu jābūt ieinstalētam:
- php + composer
- node.js
- docker

Noklonēt projektu
```sh
git clone https://github.com/github-monstrs/Kvalifikacijas-Darbs.git
```

### Frontend:

Ieiet frontend folderī
```sh
cd Kvalifikacijas-Darbs/Frontend
```

Ieinstalēt nepieciešamās frontend pakotnes
```sh
npm install
```

### Backend:

Ieiet backend folderī
```sh
cd ../Backend
```

Ieinstalēt nepieciešamās backend pakotnes
```sh
composer install
```

Jāuztaisa .env fails no piemēra
```sh
cp .env.example .env
```

Jāaizpilda .env fails ar vēlamajiem portiem, API atslēgām, utml.
```sh
nano .env
```
*ja pieejams var izmantot texta editoru*
‎  
‎

Uzģenerēt aplikācijas atslēgu
```sh
php artisan key:generate
```

Palaist projektu
```sh
./vendor/bin/sail up
```
*vai*
```sh
./vendor/bin/sail up -d
```
