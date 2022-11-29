console.log(document.title);//Afficher le titre du document dans la console

document.title = "Modifying the DOM";//Remplacez le titre du document par Modifying the DOM
console.log(document.title);    

document.body.style.backgroundColor = " rgb(255,105,180)";//Changez la couleur de fond du corps en rose vif (#FF69B4)
/*document.body.style.backgroundColor = '#FF69B4';*/

for (let node of document.body.childNodes) {
    console.log(node); // shows all nodes from the collection
  }
