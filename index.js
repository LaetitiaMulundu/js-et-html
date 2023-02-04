// 1. Aller chercher la liste des burgers en JSON
fetch("https://titi.startwin.fr/products/type/burger")
  // 2. Convertir (parser) le JSON en Objet JS
  .then(function (response) {
    return response.json();
  })
  .then(function (burgers) {
    console.log(burgers);
    // 3. Parcourir le tableau
    for (const burger of burgers) {
      /**
       * 4. Pour chaque élément du tableau, récupérer
       *    - le nom
       *    - le prix
       *    - la description
       *    - l’id
       *    - le chemin vers l’image
       */
      const id = burger._id;
      const name = burger.name;
      const description = burger.description;
      const price = burger.price.$numberDecimal;
      const img = burger.image;
      // 5. Générer le HTML pour chaque burger
    }
    ''
  });


// 1. Aller chercher la liste des burgers en JSON
fetch("https://titi.startwin.fr/products/type/burger")
  // 2. Convertir (parser) le JSON en Objet JS
  .then(function (response) {
    return response.json();
  })
  .then(function (burgers) {
    console.log(burgers);
    // 3. Parcourir le tableau
    for (const burger of burgers) {
      /**
       * 4. Pour chaque élément du tableau, récupérer
       *    - le nom
       *    - le prix
       *    - la description
       *    - l’id
       *    - le chemin vers l’image
       */
      // 5. Générer le HTML pour chaque burger
      document.querySelector("#burgers").innerHTML += generateBurgerHtml(
        burger
      );
    }
  });

function generateBurgerHtml(burger) {
  const id = burger._id;
  const name = burger.name;
  const description = burger.description;
  const price = burger.price.$numberDecimal;
  const img = burger.image;
  return `<div>
    <h3 class="burger-name">${name}</h3>
    <img  class="burger-img"  alt="Une ambiance authentique" src="${img}">
    <p class="burger-price">${price}</p>
    <p class="burger-desc">${description}</p>
  </div>`;
}


const burgersEl = document.querySelector("#accompagnement");

// 1. Aller chercher la liste des burgers en JSON
fetch("https://titi.startwin.fr/products/type/accompagnent")
  // 2. Convertir (parser) le JSON en Objet JS
  .then(function (response) {
    return response.json();
  })
  .then(function (burgers) {
    console.log(burgers);
    // 3. Parcourir le tableau
    let html = "";
    for (const accompagnement of accompagnement) {
      /**
       * 4. Pour chaque élément du tableau, récupérer
       *    - le nom
       *    - le prix
       *    - la description
       *    - l’id
       *    - le chemin vers l’image
       */
      // 5. Générer le HTML pour chaque burger
      html += generateBurgerHtml(burger, "burger-stan");
    }
    burgersEl.innerHTML = html;
  });
    

 

    generateHtmlFromApi(dessertUrl, "desserts").then(function (html) {
        dessertEl.innerHTML = html;
      });

    