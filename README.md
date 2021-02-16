[![Build Status](https://travis-ci.com/trackmasters/trackmasters.github.io.svg?branch=develop)](https://travis-ci.com/trackmasters/trackmasters.github.io)

<img align="left" top="-50" src="https://nikolas-charalambidis.github.io/cdn/trackmasters/trackmasters.png" width=256px border="0">

# trackmasters.cz

The website about the annual master's category velodrome race held in Prague. This README.md is rather technical as long as it is bound to the repository fully covering the published website and its continuous integration and deployment itself. The bottom part of this file covers the possible ways to configure and customize the website in Czech langage. The website is created with React, no integration dependencies (i.e. 3rd party API) and is automatically built and deployed via Travis CI to GitHub Pages.

## [https://trackmasters.cz](https://trackmasters.cz)

The following text describes the way to configure and administrate website via GitHub easily. It is in the Czech language since the tutorial should be easy to understand the Trackmasters admin.

## :warning: Czech content

Následují sekce popisující ve stručnosti jak provést různé změny a úpravy na stránce.

 - [Přidání článku](https://github.com/trackmasters/trackmasters.github.io/blob/develop/README.md#p%C5%99id%C3%A1n%C3%AD-%C4%8Dl%C3%A1nku)
 - [Konfigurace sekcí](https://github.com/trackmasters/trackmasters.github.io/blob/develop/README.md#konfigurace-sekc%C3%AD)

**Další odkazy**
 - [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/)
 - Markdown příklad článku [/src/content/articles/test.md](https://raw.githubusercontent.com/trackmasters/trackmasters.github.io/develop/src/content/articles/test.md)

### Přidání článku

1. **Přidání obrázků:** Naviguj se do adresáře `/src/content/images`. (V adresáři `_website` je obsah pro jiné sekce konfigurovatelný pomocí `/src/content/trackmasters.config.json`.)
    - Je nutné přidat obrázky do *tohoto* adresáře.
    - Obrázky musí mít unikátní název a příponu `jpg` nebo `png`.
    - Tento krok je nepovinný v případě, že je možné použít již uložené (existující) obrázky nebo žádné v článku nejsou třeba.
2. **Přidání vlastního článku:** Navigace do adresáře `/src/content/articles`. 
    - Vytvoř soubor s příponou `md` a pouze s ASCII znaky (tj. čeština bez háčků a čárek) oddělené čárkou (ne mezerou), např.: `muj-prvni-clanek.md`. Název článku se projeví v URL adrese.
    - Opět, název takového článku musí mít unikátní název napříč články.
    - Vlastní tělo (text, obrázky) článku je v souboru `md` definován zápisem [Markdown](https://cs.wikipedia.org/wiki/Markdown). Pro ilustraci je možné se nechat inspirovat zdrojovým souborem [/src/content/articles/test.md](https://raw.githubusercontent.com/trackmasters/trackmasters.github.io/develop/src/content/articles/test.md)
    - Vykreslení obrázku přímo v článku je pomocí následující notace, kde `muj-obrazek.jpg` je obrázek uložený v adresáři `/src/content/images` z prvního kroku.
    ```
    ![Popis obrázku](muj-obrazek.jpg)
    ```
    - Tento krok je nutný k vytvoření článku.
3. **Publikace článku**
    - Takto je možné předpřipravit články nebo šablony do budoucna a připravit je pro publikaci.
    - Naviguj se do souboru `/src/content/articles.json` a vytvoř link pro článek. Notace je v [JSON](https://zdrojak.cz/clanky/json-jednotny-format-pro-vymenu-dat/) formátu, tj. je nutné respektovat její principy. Je možné si napřed validovat JSON, jestli je správně napsaný na [JSON Formatter & Validator](https://jsonformatter.curiousconcept.com/)

          {
		       "label": "Můj první článek",
		       "text": "Toto je úvodní text, který se zobrazí v hlavní sekci novinek.",
		       "author": "Denis Charalambidis",
		       "date": "16. 2. 2020",
		       "url": "muj-prvni-clanek",
		       "image": "group.jpg",
		       "gallery": [
			      "muj-obrazek-01.jpg",
			      "muj-obrazek-02.jpg",
            "muj-obrazek-03.jpg"
		       ]
          }

        - `label` je nadpis článku.
        - `text` je úvodní text, který se zobrazí v hlavní sekci novinek.
        - `author` a `date` jsou autor a datum publikace článku.
        - `url` musí být název `md` souboru, kde je vlastní text článku. Tj. v případě `muj-prvni-clanek.md` je nutné napsat `muj-prvni-clanek`.
        - `image` je úvodní obrázek, který se zobrazí v hlavní sekci novinek.
        - `gallery` je nepovinná sekce a může být vynechána. Na konci článku se zobrazí galerie s vylistovanými obrázky uloženými v `/src/content/images`.
    - Příklad bez galerie:
    
          {
		       "label": "Můj první článek",
		       "text": "Toto je úvodní text, který se zobrazí v hlavní sekci novinek.",
		       "author": "Denis Charalambidis",
		       "date": "16. 2. 2020",
		       "url": "muj-prvni-clanek",
		       "image": "group.jpg"
   	      }
    - Příklad s více články:
    
          {
		       "label": "Můj první článek",
		       "text": "Toto je úvodní text, který se zobrazí v hlavní sekci novinek.",
		       "author": "Denis Charalambidis",
		       "date": "16. 2. 2020",
		       "url": "muj-prvni-clanek",
		       "image": "muj-obrazek.jpg"
   	      },
          {
		       "label": "Můj druhý článek",
		       "text": "Toto je úvodní text, který se zobrazí v hlavní sekci novinek.",
		       "author": "Denis Charalambidis",
		       "date": "17. 2. 2020",
		       "url": "muj-druhy-clanek",
		       "image": "muj-obrazek.jpg"
   	      }
	      

[![Generic badge](https://img.shields.io/badge/Status-In%20progress-yellow.svg)](https://shields.io/)

### Termíny závodů

### Konfigurace sekcí

#### O závodu

#### Kontakty

#### Ředitel závodu

#### Pořadatel

#### Sponzor
