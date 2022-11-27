console.log("hello world");

const restArr = ['Cafe Zupas', 'Jersey Mikes', 'IHOP']

function recommend(evt){
    let random = Math.floor(Math.random()*restArr.length)
    alert(`You should go to ${restArr[random]}`)
}