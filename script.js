
// user writes information in data field
// user click on save button
// computer saves information on local storage
// user refreshes page and information is still there

//variables to keep track of calendar state

let currentCaldendarIndex = 0;


// variables to reference DOM elementsbrn

const calendarEl = document.getElementById("row1")
$(".btn").on("click" , addInformation)

//console.log(btn)

//Current Day
let now = moment();
$("#currentDay").text(now)


function addInformation(){
    //start.style.display = "none";
    //opening.style.display ="none";
   
    console.log($(this))
    
 
}

//user clicks button to add to calendar row
btn.addEventListener("click", addInformation);

