


  let btn = document.querySelector(".btn")

  let tipAmount = 0;
  let tipPercent = "";
  let totalAmount = 0;
  let forindividual = 0;

btn.addEventListener("click", function() {
//console.log(parseInt(billAmount));
let bill = parseInt(document.querySelector("#input1").value);
console.log(bill);


let share = parseInt(document.querySelector("#input2").value);
console.log(share);
let service = document.querySelector("#option").value;
  console.log(service);
let feedback = document.querySelector(".feedback");
    if(bill<= 0 || share<=0 || service=="choose")
    {
      feedback.classList.add("feedback_visible");
      //console.log("fill all the fields");
      setTimeout(function(){
        feedback.classList.remove("feedback_visible");
        console.log("inside timeout");
      }, 3000);
    }
    else{
      let results = calculatetipAmount(service,bill,share);

      //console.log(tipAmount + "returns");
    //  console.log(totalAmount);
    //  console.log(forindividual);

    let resultitems1 = document.querySelector("#span1");
    let resultitems2 = document.querySelector("#span2");
    let resultitems3 = document.querySelector("#span3");
    let resultcontainer = document.querySelector(".result")


      resultitems1.textContent = `${results[0].toFixed(2)}`
      resultitems2.textContent = `${results[1].toFixed(2)}`
      resultitems3.textContent = `${results[2].toFixed(2)}`
resultcontainer.classList.add("feedback_visible")


    }
})


function calculatetipAmount(service, bill,share) {
  if(service=="20"){
    tipPercent = 0.2;
  }else if (service=="10") {
    tipPercent = 0.1;
  }else {
    tipPercent = 0.02;
  }
  //console.log(tipPercent);

tipAmount = tipPercent * bill;
totalAmount = bill + tipAmount;
forindividual = totalAmount/share;

//return (service, bill,share);
return [totalAmount, tipAmount, forindividual];
//console.log(tipAmount);
//console.log(totalAmount);
//console.log(forindividual);
//calctotalAmount(bill, tipAmount, share);
  }
/*
function calctotalAmount(bill, tipAmount, share) {
    totalAmount = bill + tipAmount;
    console.log(totalAmount);
    calcforindividual(totalAmount , share);
}

function calcforindividual(totalAmount , share) {
    forindividual = totalAmount/share;
    console.log(forindividual);
}
*/
