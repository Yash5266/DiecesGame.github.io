var number1 = document.getElementById("number1")
var button = document.getElementById("myButton")

var number2 = document.getElementById("number2")

number1.innerHTML = "0"
number2.innerHTML = "0"

const min = 1
const max = 7
// function genarate(){
//     var random = Math.floor(Math.random() * (max-min) + min)
//     return random
// }

// console.log(random)

button.addEventListener("click",function(){
    var result1 = Math.floor(Math.random() * (max-min) + min)
    var result2 = Math.floor(Math.random() * (max-min) + min)
    number1.innerHTML = result1
    number2.innerHTML = result2
    // console.log(result)
})

// --------------------------------

var dice1 = document.getElementById("dice1")
var roll1 = document.getElementById("roll1")


var dice2 = document.getElementById("dice2")
var roll2 = document.getElementById("roll2")



dice1.onclick = function(){
    number1.innerHTML = "0"
    number2.innerHTML = "0"
    if(roll1.style.display == "none"){
        roll1.style.display = "flex"
    }
    else{
        if(roll2.style.display = "flex"){
            roll2.style.display = "none"
            roll1.style.display = "flex"
        }
        
    }
}

dice2.onclick = function(){
    number1.innerHTML = "0"
    number2.innerHTML = "0"
    if(roll2.style.display == "none"){
        roll2.style.display = "flex"
    }
    else{
        roll2.style.display = "flex"
    }
}


