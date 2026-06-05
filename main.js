const card=document.querySelector(".list");

let Produits=[
{
    id:1,
    image:"./images/airpod.jpeg",
    nom:"Air Pods",
    prix:7000

},
{
    id:2,
    image:"./images/clavier.jpeg",
    nom:"Clavier Rétroèclairée",
    prix:4500

},
{
    id:3,
    image:"./images/iphone17.jpeg",
    nom:"Iphone 17",
    prix:980000

},
{
    id:4,
    image:"./images/usb.jpeg",
    nom:"Clée USB",
    prix:5000

},
{
    id:5,
    image:"./images/itel.jpeg",
    nom:"Itel A70",
    prix:70000

},
{
    id:6,
    image:"./images/powerBank.jpeg",
    nom:"Power Bank",
    prix:3500

},
];

const List=()=>{
Produits.forEach((value)=>{
const div=document.createElement("div");
div.innerHTML=`
<img src=" ${value.image} " alt="produit">
<h3> ${value.nom} </h3>
<span> <strong> ${value.prix} FCFA</strong></span>
<button >Ajoutez Au panier</button>
`;
div.classList.add("card");
card.appendChild(div);

});
};
List();