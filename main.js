//create array for shapes
//create a function to loop through array and produce 3 different random numbers 
//create a function that triggers the function above when the generate button is clicked
//let the list with only the shapes inputed be displayed on the card

// let orange = {}

// let orange = new Object()


// let orange2 = {
//     color: "orange",
//     mass: "5kg",
//     shape: () => {
//       return "I'm rock n' rollin'"
//     }
// }

// let shape = new Object()

// class Laptop {
//     constructor(ram, system_type, processor) {
//         this.ram = ram;
//         this.system_type = system_type
//         this.processor = processor
//     }

//     myproperties() {
//         console.log(this.ram)
//     }
// }

// let newLaptop = new Laptop("4Gb", "Intel", "core i7")
// newLaptop.myproperties()

// let secondLaptop = new Laptop("8Gb", "Raedon", "Raedon")
// secondLaptop.myproperties()

class Shape {
    constructor(length, width, radius) {
        this.length = length
        this.width = width
        this.radius = radius
    }

    area() {
        if(!this.radius) {
            return this.length * this.width
        } else {
            return Math.PI * (this.radius ^ 2)
        }
    }

    guessShape() {
        if (this.radius) console.log("I am probably a circle")
        else {
            if(this.length === this.width) console.log("I am definitely a square")
            else {
                console.log("I am a rectangle, possibly.")
            }
        }
    }
}

// let randomShape = new Shape(null, null, 5)


// let randomShape = {
//     length: null,
//     width: null, 
//     radius: 5,
//     area() {
//         if(!this.radius) {
//             return this.length * this.width
//         } else {
//             return Math.PI * (this.radius ^ 2)
//         }
//     },
//     guessShape() {
//         if (this.radius) console.log("I am probably a circle")
//         else {
//             if(this.length === this.width) console.log("I am definitely a square")
//             else {
//                 console.log("I am a rectangle, possibly.")
//             }
//         }
//     }
// }

// console.log(randomShape.area())
// randomShape.guessShape();

// function Shape() {

// }

// let random = {
//     color: "black",
//     shape: "red",
//     weight: "slim",
//     random: "random"
// }

// ['color', 'shape', 'weight', 'random']

// ['black', 'red', 'slim', 'random']

// for(let key in random) {
//     console.log(random[key])
// }

let keysArray = Object.values(random)









// enterNumber.addEventListener('input');
let generateShapes = document.querySelector('#generate-btn');

generateShapes.addEventListener("click", shuffleArray);

let shapes = ['Triangle', 'Rectangle', 'Circle', 'Square','Hexagon', 'Pentagon', 'Square'];
let icon = ['triangle-outline.svg', 'rectangle.svg', 'circle.svg', 'square.svg', 'hexagon-light.svg', 'pentagon.svg']

function shuffleArray(){
    let enterNumber = document.querySelector('#newNumber').value;
            
    let shapesCopy = ['Triangle', 'Rectangle', 'Circle', 'Square','Hexagon', 'Pentagon'];
    let shuffleResult = [];
    let shapesContainer = document.getElementById("shapesContainer")
    if(enterNumber > shapesCopy.length) {
        alert("Please enter a number less than or equal to " + shapesCopy.length)
        return
    } 
    shapesContainer.innerHTML = ""
    
    for (let i = 0; i < Number(enterNumber); i++) {
        const randomNum= Math.floor(Math.random() * shapesCopy.length);
        shuffleResult.push(shapesCopy[randomNum])
        shapesCopy.splice(randomNum, 1);
        }
        for(let i = 0; i < shuffleResult.length; i++) {
            let result = shuffleResult[i]
            let shape = document.createElement("li");
            shape.classList.add('shape-list')
            shape.innerText = result
            let img = document.createElement('img')
            let index = shapes.indexOf(result)
            img.src = "assets/img/"+icon[index]
            shape.prepend(img)
            shapesContainer.appendChild(shape)
        }
        // shuffleResult.forEach((result) => {
        //     let shape = document.createElement("li");
        //     shape.classList.add('shape-list')
        //     shape.innerText = result
        //     let img = document.createElement('img')
        //     let index = shapes.indexOf(result)
        //     img.src = "assets/img/"+icon[index]
        //     shape.prepend(img)
        //     shapesContainer.appendChild(shape)
        // })

       
    
    








    

    // function shuffleArray(array) {
    //     for (let i = array.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [array[i], array[j]] = [array[j], array[i]];
    //     }
    // }
    
        // var currentIndex = array.length, temporaryValue, randomIndex;
        // while (0 !== currentIndex) {
        //   randomIndex = Math.floor(Math.random() * currentIndex);
        //   currentIndex -= 1;
        //   temporaryValue = array[currentIndex];
        //   array[currentIndex] = array[randomIndex];
        //   array[randomIndex] = temporaryValue;
        // }
        // return array;
     
}

// var alphabet=["a","b","c","d","e"];
// randomArrayShuffle(alphabet); 
// let shapes = ['Triangle', 'Rectangle', 'Circle', 'Square','Hexagon', 'Pentagon'];
//   let shapes = ['Triangle', 'Rectangle', 'Circle', 'Square','Hexagon', 'Pentagon'];
//   let arr = [1, 2, 3];
// //   shuffle(shapes);
//   alert(shapes);



// function getInputValue(){
//     Selecting the input element and get its value 
//     let enterNumber = document.querySelector('#newNumber').value;
    
//     Displaying the value

//     shapes = Math.floor(Math.random() * enterNumber)   
// }

// generateShapes.addEventListener("click", () =>{
//     alert(enterNumber)
//     alert(Math.floor(Math.random() * enterNumber))
// });


// let clickMe = () =>{
//     alert(Math.floor(Math.random() * enterNumber))
// }
// generateShapes.addEventListener('click', randomShapes)
// let generated = []

// function randomShapes(){ alert("is this running")
//     for (i=0; i<shapes.length; i++){
//         generated = Math.floor(Math.random() * enterNumber.value)
        
//     } 
// }

// console.log(shapes);

















// const generatedShapes = function(shapes){
//     let shapeIndex = shapes.length, ;
//     while (shapeIndex <= 6){
//         randomShapes = Math.floor(Math.random() * shapeIndex)
//     }
// }



// const found = [];
// const generatedShapes=[]; 
//     }
//     found[found.length]=number
//     return number;
// }

// function generate(index){
//     return shapes[index]
// }

// function loopThrough(){
//     let i
//     for(i=0;i<4;i++){
//         let index = randomNumbers()
//         generatedShapes[generatedShapes.length] = generate(index);
//     }
// }
// loopThrough()
// console.log(generatedShapes)




// let newNum = document.getElementById('newNumber').value

// function div (){
//     for(let i=1;i<7;i++){
//         document.getElementById('ptag')
//         document.getElementById('ptag').value = results[i]
//         newNumber = 0;
//     }
// }
// div()

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

