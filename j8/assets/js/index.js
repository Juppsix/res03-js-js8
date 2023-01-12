import { Ingredient } from './classes/ingredient.js';

window.addEventListener("DOMContentLoaded", function(){
    let availableIngredients = [];
    let bacon = new Ingredient("bacon","assets/img/bacon.png")
    let carrot = new Ingredient("carrot","assets/img/carrots.png")
    let cheese = new Ingredient("cheese","assets/img/cheese.png")
    let egg = new Ingredient("egg","assets/img/egg.png")
    let aubergine = new Ingredient("aubergine","assets/img/eggplant.png")
    let goatcheese = new Ingredient("goatcheese","assets/img/goat-cheese.png")
    let miel = new Ingredient("miel","assets/img/honey.png")
    let champignon = new Ingredient("champignon","assets/img/mushroom.png")
    let olive = new Ingredient("olive","assets/img/olive.png")
    let piment = new Ingredient("piment","assets/img/pepper.png")
    let pommedeterre = new Ingredient("pommedeterre","assets/img/potato.png")
    let tomate = new Ingredient("tomate","assets/img/tomato.png");
    
   availableIngredients.push(bacon);
   availableIngredients.push(carrot);
   availableIngredients.push(cheese);
   availableIngredients.push(egg);
   availableIngredients.push(aubergine);
   availableIngredients.push(goatcheese);
   availableIngredients.push(miel);
   availableIngredients.push(champignon);
   availableIngredients.push(olive);
   availableIngredients.push(piment);
   availableIngredients.push(pommedeterre);
   availableIngredients.push(tomate);
   
   
console.log(availableIngredients);

for(let i = 0; i < availableIngredients.length; i++)
{
    let li = document.createElement("li");
    let article= document.createElement("article");
    let header = document.createElement("header");
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let h3 = document.createElement("h3");
}

});

