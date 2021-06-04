// alert("Hello there!");

const shapes = ['Triangle', 'Rectangle', 'Circle', 'Square','Hexagon', 'Pentagon'];
const found = [];
const generatedShapes=[]

function randomNumbers(){
    const number = Math.floor(Math.random()* 6) 
    if (found.includes(number)){
        return randomNumbers()
    }
    found[found.length]=number
    return number;
}

function generate(index){
    return shapes[index]
}

function loopThrough(){
    let i
    for(i=0;i<4;i++){
        let index = randomNumbers()
        generatedShapes[generatedShapes.length] = generate(index);
    }
}
loopThrough()
console.log(generatedShapes)




// let newNum = document.getElementById('newNumber').value

function div (){
    for(let i=1;i<7;i++){
        document.getElementById('ptag')
        document.getElementById('ptag').value = results[i]
        newNumber = 0;
    }
}
div()

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

