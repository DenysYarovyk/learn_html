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


function myOnafterprint() {
  alert("This document is now being printed!")
};


function myOnbeforeprint() {
  alert("You are about to print this document!")
};

//not working with this name, need name 'myFunction'
// function myOnbeforeunload() {
//   return 'the changes made will not be saved!'
// };


//I document that it did not interfere with updating the page
// function myOncanplay() {
//   alert('!')
// };


function myFunction() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo1").innerHTML = "You selected: " + x;
}


function myOnclick() {
  document.getElementById('demo2').style.color = 'red';
};


function myOncopy() {
  alert('you try to copy text!')
};


function myOncut() {
  alert ('you cut this text')
};



function myOndblick() {
  document.getElementById('demo3').innerHTML = 'Hello world!'
};



function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
}

function dragging(event) {
  document.getElementById("demo4").innerHTML = "The p element is being dragged";
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  event.target.appendChild(document.getElementById(data));
  document.getElementById("demo4").innerHTML = "The p element was dropped";
}


function myOnended() {
  alert('Thanks for watching!');
};

//not working
function myOnfocus(x) {
  document.getElementById(x).style.background = 'eyllow';
};


function myOniput() {
  let x = document.getElementById('myInp').value;
  document.getElementById('demo5').innerHTML = 'You wrote :' + x;
};

// document that it did not interfere with updating the page
// function loadImage() {
//   alert ('Image is loaded')
// }

//function for example with 'onmousedown & onmouseup attribute';
function mouseDown() {
  document.getElementById('demo6').style.color = 'blue';
};
function mouseUp() {
  document.getElementById('demo6').style.color = 'green';
};

//function for example with attribute 'onmousemove & onmouseout'
function bigImg(x) {
  x.style.width = '64px';
  x.style.height = '64px';
};
function normalImg(x) {
  x.style.width = '32px';
  x.style.height = '32px';
};

//function for example with attribute 'onpaste'
function myOnpaste() {
  document.getElementById('demo7').innerHTML = 'You pasted text!';
};

//function for example with attribute 'onratechange'
function myOnratechange() {
  document.getElementById('demo8').innerHTML = 'The videos speed is ' + document.getElementById('myOnratechangeVideo').playbackRate; 
};
function changeRate(obj) {
  document.getElementById('myOnratechangeVideo').playbackRate = obj.value;
};

//function for example with attribute 'onreset'
function myOnreset() {
  alert('the form was reset!');
};

//function for example with attribute 'onresize'
function myOnresize() {
  alert('You have changed the size of the browser window!');
};

//function for example with attribute onscroll
function myOnscroll() {
  document.getElementById('demo9').style.color = 'green';
};

//function for example with attribute onselect
function myOnselect() {
  alert('You have selected some text!');
};

//function for example with attribute onsubmit
function myOnsubmit() {
  alert('you submited form!');
};

//function for example with attribute ontimeupdate
function myOnetimeupdate() {
  document.getElementById('demo10').innerHTML = 'You moved to position ' + document.getElementById('onetimeupdateVideo').currentTime;
};

//function for example with attribute 'ontoggle'
function myOntoggle() {
  alert('The ontoggle event occured!');
};
















