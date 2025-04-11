# 🖼️ Tienda de Arte La Musa - Web App

Aplicación web responsiva desarrollada solo con **HTML**, **CSS** y **JavaScript**, que simula el funcionamiento de una tienda de arte en línea. El usuario puede visualizar obras en distintas categorías, agregarlas a un carrito simulado y completar un formulario de pago.

---

## 🎯 Objetivos

- Visualizar productos de arte clasificados en:
  - Abstracto
  - Realismo
  - Esculturas
- Agregar productos al carrito
- Mostrar total acumulado
- Eliminar productos del carrito
- Simular un formulario de pago (sin conexión real)

---

## 🛠️ Tecnologías Usadas

- HTML5
- CSS3
- JavaScript (Vanilla)
- Docker (para despliegue local)
- Nginx (servidor web en contenedor)

---

## 🗂️ Estructura del Proyecto

```
tienda-arte-la-musa/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── img/
│   ├── abstracto1.jpg
│   ├── realismo1.jpg
│   └── escultura1.jpg
└── Dockerfile
```

---

## 🚀 Ejecución con Docker

### Construcción de la imagen:

```bash
docker build -t tienda-arte .
```

### Ejecución del contenedor:

```bash
docker run -d -p 8080:80 tienda-arte
```

Luego abre en tu navegador:

```
http://localhost:8080
```

---

## 📸 Créditos Artísticos

Este proyecto utiliza imágenes locales de estilo abstracto, realista y esculturas clásicas para simular una galería de arte.

---

## ⚠️ Notas

- El carrito y el pago son simulaciones, sin backend ni base de datos.
- Ideal para demostraciones, maquetas visuales o prácticas con frontend y Docker.

---

## 👨‍💻 Autores

**Franco Aaron Figueroa Lopez**  
**Nicolas David Chamorro Saavedra**
