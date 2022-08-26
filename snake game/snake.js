const grid = document.querySelector(".grid")
const start = document.querySelector("#start")
const score = document.querySelector("#score")

let snakeScore =0
let arr = []
let currentSnake=[12,11,10]
let direction =1
const width =10
let appleIndex = 0
let speed = 500
let timerId


// create grid of snakes in grid
function createGrid(){
    for(let i =0 ; i < width*width ;i++){

        const square = document.createElement('div')
        square.classList.add('square')

        grid.appendChild(square)

        arr.push(square)
    }
}
createGrid();

function startGame(){
    clearInterval(timerId)

    //remove snake and apple set score default
     currentSnake.forEach(index => arr[index].classList.remove('snake'))
     arr[appleIndex].classList.remove('apple');
     score.textContent-0

     //set default values
     appleIndex=0
     direction=1
     currentSnake=[12,11,10]
     snakeScore=0

     //add defalut snake and generate new apple
     currentSnake.forEach(index => arr[index].classList.add('snake'))
     generateApples()

     // and finally move the snake
     speed=500
     timerId = setInterval(move , speed)
}

function move(){
    // hit the wlalls
    if(
        (currentSnake[0] + width >= width*width && direction === width)|| //donw wall hit
        (currentSnake[0] - width < 0 && direction === -width)|| //  up wall hit
        (currentSnake[0] % width === 0 && direction === -1)||  // left wall hit
        (currentSnake[0] % width === width-1 && direction === 1)|| // right wall hit
        (arr[currentSnake[0] + direction].classList.contains('snake') )
    )
    return clearInterval(timerId)


    // remove last snake postion
    const tail = currentSnake.pop();

    // remove class of snake last
    arr[tail].classList.remove("snake")

    // add element in desired direction
    currentSnake.unshift(currentSnake[0] + direction)


   if(arr[currentSnake[0]].classList.contains('apple')){
      //remove apple
        arr[currentSnake[0]].classList.remove('apple');
      // grow our snake
        arr[tail].classList.add('snake')
        // incrase snake array
        currentSnake.push(tail)
        //genrate new apples again
        generateApples()

        //score increase and display
        snakeScore++
        score.textContent = snakeScore

        //increase speed
        clearInterval(timerId);
        speed = speed *0.9
        timerId = setInterval(move , speed)

   }

    // add class for aded Element
    arr[currentSnake[0]].classList.add("snake")
}

function generateApples(){
    do {
        // genrarte apples
        appleIndex = Math.floor(Math.random() * arr.length)

    } while (arr[appleIndex].classList.contains('snake'))
    arr[appleIndex].classList.add("apple");
}

function control(e){
    if(e.key === 'a'){
        console.log("key left pressed")
        direction = -1
    }else if(e.key === 'w'){
        console.log("key top pressed")
        direction = -width
    }else if(e.key === 'd'){
        console.log("key right pressed")
        direction = 1
    }else if(e.key === 's'){
        console.log("key down pressed")
        direction = width
    }
}

document.addEventListener('keypress' , control)
document.addEventListener("click" , startGame)
