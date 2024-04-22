// option 2  we will use this **********************  
// <button onclick="makeRed()">Make me Red</button>
function makeRed(){
    document.body.style.backgroundColor = 'red'
}



//  option 3.1
const makeBlueButton = document.getElementById('make-blue')
makeBlueButton.onclick = makeBlue;  //don't call the function when u r not use onclick in html element

function makeBlue(){
    document.body.style.backgroundColor = 'blue'
}

//  option 3.2
const makePurpleButton = document.getElementById('make-purple')
makePurpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
} 

//  option 4.1
{/* <button id="make-pink">Make pink</button> */}
const pinkButton = document.getElementById('make-pink')
    pinkButton.addEventListener('click',makePink)
    function makePink(){
        document.body.style.backgroundColor = 'pink'
    }
    

//  option 4.1
  //<button id="make-green">Make Green</button>
    const makeGreenButton = document.getElementById('make-green')
    makeGreenButton.addEventListener('click',function makeGreen(){
        document.body.style.backgroundColor = 'green'
    })


    // option-4 final ---  we will use this(important)
//  <button id="make-goldenrod">Make GoldenRod</button> 
    document.getElementById('make-goldenrod').addEventListener('click', function(){
        document.body.style.backgroundColor = 'goldenrod'
    })