
// user writes information in data field
// user click on save button
// computer saves information on local storage
// user refreshes page and information is still there

//variables to keep track of calendar state

let currentCaldendarIndex = 0;


// variables to reference DOM elements btr


$(".btn").on("click" , addInformation)

//console.log(btn)

//Current Day
let now = moment();
$("#currentDay").text(now)

const savedEntries = JSON.parse(localStorage.getItem("savedEntries")) || {}

function addInformation(){
    //start.style.display = "none";
    //opening.style.display ="none";
    //div pulls from input 
 
    const input = $(this).parent().siblings("input")[0]
    console.log(input.id , input.value)
    savedEntries[input.id] = input.value  
    localStorage.setItem ("savedEntries", JSON.stringify(savedEntries))
    
    
 
}

$("input").each(function () {
    $(this).val(savedEntries[$(this).attr("id")]) 
    console.log($(this).attr("id"))
})


