let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[maxlength]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength){
         inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
      }
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});


function calculateEMI() {

    let price = Number(document.getElementById("price").value);
    let down = Number(document.getElementById("downPayment").value);
    let rate = Number(document.getElementById("interest").value);
    let years = Number(document.getElementById("years").value);

    let P = price - down;
    let r = rate / 12 / 100;
    let n = years * 12;

    let emi = (P * r * Math.pow(1 + r, n)) /
              (Math.pow(1 + r, n) - 1);

    document.getElementById("emi").innerHTML =
        "₹" + Math.round(emi).toLocaleString("en-IN");
}

document.querySelectorAll("#price,#downPayment,#interest")
.forEach(el => {
    el.addEventListener("input", calculateEMI);
});

document.getElementById("years")
    .addEventListener("change", calculateEMI);

calculateEMI();