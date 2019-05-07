# [dvd93.github.com](https://dvd93.github.io) 


## Crea tu portafolio con Github Pages

 En vez solo tener un CV estático en word por qué no tener un lugar propio en la red donde compartir tú experiencia, habilidades y 
 trabajo.

Sin la necesidad de adquirir un dominio y un servidor de hosting, configurarlo y añadir el contenido.Puedes optar por utilizar Github 
Pages que nos ofrece una manera sencilla de publicar un sitio web. En este tutorial veremos cómo crear una página propia que puede 
servir como portafolio o como CV. En mi caso la adapté para un formato de portfolio, como podrás ver al final.

* Primero es necesaria una cuenta de Github y tener instalado git en tu computadora.

* Crea un repositorio con el siguiente formato [username].github.com donde username es tu nombre de usuario en Github. Por ejemplo mi 
usuario es dvd93 por lo tanto mi repositorio se llama: dvd93.github.com. Con este formato Github asignará el repositorio como una página
web.

* En caso de que tengas conocimiento de HTML, CSS y JavaScript puedes construir tu página web desde 0. Si deseas acelerar el proceso o 
quieres tener un diseño temporal en lo que construyes tuyo, puedes conseguir de forma gratuita una plantilla de portafolio o CV en 
distintos sitios:
  - [Wix](http://es.wix.com/website/templates/html/design/portfolio/1)
  - [Bashooka](http://bashooka.com/freebie/free-html-portfolio-website-templates/)
  - [Colorlib](https://colorlib.com/wp/html5-portfolio-website-templates/)

*  Luego hay que clonar el repositorio para añadir los archivos de nuestro nuevo sitio:

```
mkdir mi-sitio 
cd mi-sitio
git clone https://github.com/[username]/[username].github.io.git
```
* Copia los archivos del sitio que creaste (o la plantilla) en la nueva carpeta, asegúrate de que hay un archivo index.html, este servirá 
como página de inicio.

* Publica tus cambios en el repositorio, usa los siguientes comandos:
```
git add .
git commit -m "Initial commit"
git push origin master
```

* Finalmente ve a la dirección https://[username].github.io y tendrás tu nuevo sitio creado. Yo lo armé de la siguiente manera. Espero
que les sea útil.

## Contenidos de la página

* [Inicio](#inicio)
* [Sobre Mí](#sobre-mí)
* [Servicios](#servicios)
* [Portfolio](#portfolio)
* [Contacto](#contacto)


### [Inicio](https://dvd93.github.io/#home)


Imagen de portada con barra de navegación lateral hacia las distintas secciones. Más acceso a redes sociales


### [Sobre Mí](https://dvd93.github.io/#about)


Resumen de vida, datos personales, habilidades y CV


### [Servicios](https://dvd93.github.io/#services)


Servicios que ofresco como desarrollador de aplicaciones


### [Portfolio](https://dvd93.github.io/#portfolio)


Trabajos propios desarrollados y páginas activas en mantenimiento continuo


### [Contacto](https://dvd93.github.io/#contact)


Medios de contacto: Formulario de contacto y correo





### License

Copyright © 2019 dvd93.github.com

Portfolio inspirado en: 
##### [template de Arlo - Personal / Portfolio / Resume Template.](http://preview.themeforest.net/item/arlo-personal-portfolio-template/full_screen_preview/23175475)
