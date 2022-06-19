console.log("welcome to MyTicTacToe.com")
let music = new Audio("music.mp3")
let turnM = new Audio("ting.mp3")
let gameoverM = new Audio("gameover.mp3")
let turn = "X"
let gameover = false;

//function to chnage the turn
const changeTurn = ()=>{
    return turn === "X"? "Y": "X"
}

// function to check for a win
const checkwin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e=>{
        if( (boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "" ) ){
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + "WON";
        gameover = true;
        document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        gameoverM.play();

        }

    })

}

//Game logic
let boxes= document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e) =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            turnM.play();
            checkwin();
            if(!gameover){
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
           // else{
               gameoverM.play();
           // }
        }

    })
    
})
//Resert button
reset.addEventListener('click', ()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element =>{
        element.innerText = "";
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innertext = "turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";


})