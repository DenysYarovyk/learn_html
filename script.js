// alert('Hello world!')

let myArr = ['Audi', 'BMW', 'Ford', 'Toyota'];

    function showContent() {
      let temp, item, a, i;
      temp = document.getElementsByTagName('template')[0];
      item = temp.content.querySelector('div');
      for (i = 0; i < myArr.length; i++) {
        a = document.importNode(item, true);
        a.textContent += myArr[i];
        document.body.appendChild(a);
      };
    };

function showDetails(animal) {
  let animalType = animal.getAttribute("data-animal-type");
  alert("The " + animal.innerHTML + " is a " + animalType + ".");
}

const turnOnBtn = document.getElementById("turnOnBtn");
const turnOffBtn = document.getElementById("turnOffBtn");
const myImage = document.getElementById("myImage");

turnOnBtn.addEventListener("click", function() {
  myImage.src = "/img/pic_bulbon.gif";
});

turnOffBtn.addEventListener("click", function() {
  myImage.src = "/img/pic_bulboff.gif";
});