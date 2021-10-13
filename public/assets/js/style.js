document.getElementById('c').addEventListener('click',()=>{
    document.getElementById('display').value = ''
}) 
document.getElementById('0').addEventListener('click',()=>{
    document.getElementById('display').value += 0
})
document.getElementById('1').addEventListener('click',()=>{
    document.getElementById('display').value += 1
})
document.getElementById('2').addEventListener('click',()=>{
    document.getElementById('display').value += 2
})
document.getElementById('3').addEventListener('click',()=>{
    document.getElementById('display').value += 3
})
document.getElementById('4').addEventListener('click',()=>{
    document.getElementById('display').value += 4
})
document.getElementById('5').addEventListener('click',()=>{
    document.getElementById('display').value += 5
})
document.getElementById('6').addEventListener('click',()=>{
    document.getElementById('display').value += 6
})
document.getElementById('7').addEventListener('click',()=>{
    document.getElementById('display').value += 7
})
document.getElementById('8').addEventListener('click',()=>{
    document.getElementById('display').value += 8
})
document.getElementById('9').addEventListener('click',()=>{
    document.getElementById('display').value += 9
})
document.getElementById('+').addEventListener('click',()=>{
    document.getElementById('display').value += '+'
})
document.getElementById('/').addEventListener('click',()=>{
    document.getElementById('display').value += '/'
})
document.getElementById('*').addEventListener('click',()=>{
    document.getElementById('display').value += '*'
})
document.getElementById('-').addEventListener('click',()=>{
    document.getElementById('display').value += '-'
})
document.getElementById('=').addEventListener('click',()=>{

   let result = document.getElementById('display').value

    if(result.indexOf('+') > -1){
       let values = result.split('+')
       let numberone = parseFloat(values[0])
       let numbertwo = parseFloat(values[1])
       let resp = soma(numberone,numbertwo)
       document.getElementById('display').value = resp
    }

    if(result.indexOf('-') > -1){
       let values = result.split('-')
       let numberone = parseInt(values[0])
       let numbertwo = parseInt(values[1])
       let resp = sub(numberone,numbertwo)
       document.getElementById('display').value = resp
    }
    if(result.indexOf('*') > -1){
       let values = result.split('*')
       let numberone = parseInt(values[0])
       let numbertwo = parseInt(values[1])
       let resp = mult(numberone,numbertwo)
       document.getElementById('display').value = resp
    }
    if(result.indexOf('/') > -1){
       let values = result.split('/')
       let numberone = parseInt(values[0])
       let numbertwo = parseInt(values[1])
       let resp = div(numberone,numbertwo)
       document.getElementById('display').value = resp
    }
})

function soma(a,b){
   return a + b
}
function sub(a,b){
   return a - b
}
function mult(a,b){
   return a * b
}
function div(a,b){
   return a / b
}