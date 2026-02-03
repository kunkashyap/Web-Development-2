console.log("Hello,World!")

const para = document.querySelector('.a')
para.innerText="Hey hey!!!"
para.style.color="blue"
console.log(para)

const para2= document.querySelectorAll('.a')
para2[0].innerText="Good Night!"
para2[1].style.color="pink"
console.log(para2)

const para3= document.querySelectorAll('.container')
para3[0].style.color='Purple'
console.log(para3)

//we learned : diff b/w queryselectorAll() & queryselector()