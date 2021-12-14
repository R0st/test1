document.getElementById("output").style.visibility = "hidden";
document
  .getElementById("distanceInput")
  .addEventListener("input", function (event) {
    document.getElementById("output").style.visibility = "visible";

    let distance = event.target.value;
    document.getElementById("mOutput").innerHTML = distance * 100;
    document.getElementById("smOutput").innerHTML = distance * 1;
    document.getElementById("inOutput").innerHTML = distance * 2.54;
    document.getElementById("ftOutput").innerHTML = distance * 30.48;
  
  //   let container = document.querySelector(".container"),
  // 	newButton = document.createElement('button');

  //  newButton.innerText = 'Добавление ед.из.';
  //  newButton.addEventListener('click', function(event) {
    document.getElementById("ydOutput").innerHTML = distance * 91.44;
    document.getElementById("kmOutput").innerHTML = distance * 100000;
    document.getElementById("mmOutput").innerHTML = distance * 0.1;
   });
  // container.appendChild(newButton);
  // }); 

  // document.getElementById("outputAddDistance").style.visibility = "hidden";
  // document.addEventListener("click", btn-add) 
  
  //   document.getElementById("outputAddDistance").style.visibility = "visible";

// const ft = 30.48*sm;
// const in = 2.54*sm;
// const m = 100*sm;
// const cm = 1;

// const yd = 91.44*cm;
// const km = 100000*cm;
// const mm = 0.1*cm;

