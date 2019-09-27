// RANDOM ARRAY LAYOUT
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//let click = new Audio;
//click.src = "../audio/click.mp3";

let imgArr = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png'];
imgArr = imgArr.concat(imgArr);
shuffle(imgArr);

console.log(imgArr)
let imgName = [];
let divId = [];
let click = 0;

for (let i = 0; i < imgArr.length; i++) {
    let card = document.createElement("div");
    card.setAttribute('id', 'card' + i);
    card.setAttribute('class', 'card');

    document.querySelector("#game").appendChild(card);

    let arrOfCards = Array.from(document.getElementsByClassName('card'));


    card.onclick = function () {
        let index = arrOfCards.indexOf(this);
        //        console.log(index);
        this.style.backgroundImage = `url('img/png/${imgArr[index]}')`;
        this.style.pointerEvents = 'none';

        imgName.push(imgArr[index]);
        divId.push(this.getAttribute("id"));

        console.log(index);
        console.log("Img name", imgName);
        console.log("Div ID", divId);

        if (click % 2 !== 0) {
            //            document.querySelector(".card").style.pointerEvents = 'none';
            if (imgName[0] === imgName[1]) {
                win();
                document.querySelector(".card").style.pointerEvents = 'auto';
                document.querySelector(`#${divId[0]}`).classList.add("opened");
                document.querySelector(`#${divId[1]}`).classList.add("opened");
                divId = [];
                imgName = [];
            } else {
                setTimeout(function () {
                    document.querySelector(`#${divId[0]}`).style.backgroundImage = "url('img/bg2.jpg')";
                    document.querySelector(`#${divId[1]}`).style.backgroundImage = "url('img/bg2.jpg')";
                    divId = [];
                    imgName = [];
                    let cards = document.querySelectorAll('.card');
                    for (let card of cards) card.style.pointerEvents = 'auto';
                    document.querySelector(".opened").style.pointerEvents = 'none';
                }, 500);
            }
        }
        click++;
                this.style.pointerEvents = 'none';
    }
}


function win() {
    if (imgArr.length === divId.length) {
        alert("Wiiiin");
    }
}
