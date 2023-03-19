//Slider image of the offer part

const slideImage = ["images_homepage/dining_room.png", "images_homepage/swimming_pool.png", "images_homepage/castillon.png"];
const slideParagraph = ["Lorem ipsum dolor sit amet consectetur. Cursus elementum eget ut in aliquam bibendum nulla cursus. Sem ornare in senectus orci tincidunt. Faucibus iaculis id sit tortor nisl."
, "Le code CSS permet de centrer horizontalement le slider et de faire apparaître progressivement les flèches, lors du survol de la souris, grâce à la propriété transition qui va effectuer les feurs."
, "Le conteneur #slider est en position relative, ce qui permet à ses enfants de se positionner en absolute par rapport à lui. Il ne faut pas oublier cette règle CSS : un positionnement absolute."]
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slideImage.length - 1;
    if (numero > slideImage.length - 1)
        numero = 0;
    document.getElementById("dining-room-img").src = slideImage[numero];
    document.getElementById("p-offer").innerHTML = slideParagraph[numero]
}
