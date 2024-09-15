var input = document.querySelector("#input")
var printt = document.querySelector("#print")
var btn = document.querySelector("#btn")

function tablemaker(){
    printt.innerHTML=""
    
    number = input.value
    for(var i=1; i<=10; i++){
        printt.innerHTML = printt.innerHTML +`${number} * ${i} = ${number*i}  <br>`
    }
}