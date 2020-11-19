const cards = document.querySelectorAll('#a1,#b1,#c1,#d1,#e1,#f1,#g1,#h1')

let hasFlipped = false
let lock = false
let firstCard, secondCard

function flipcard(){
    if(lock) return
    if(this === firstCard) return
    this.classList.toggle('flip')

    if(!hasFlipped){
        hasFlipped = true
        firstCard = this
        
    }
    else{
        hasFlipped = false
        secondCard = this

        checkIfMatch()
    }
}

function checkIfMatch(){
    if(firstCard.dataset.framework === secondCard.dataset.framework)
        {
           disableCards() 
        }
        else{
            unflipCards();
        }
}
function disableCards(){
    firstCard.removeEventListener('click',flipcard)
    secondCard.removeEventListener('click',flipcard)
    reset()
}
function unflipCards(){
    lock = true
    setTimeout(() =>{
    firstCard.classList.remove('flip')
    secondCard.classList.remove('flip')

    lock = false
    },1500);
}
function reset(){
    [hasFlipped, lock] = [false, false]
    [firstCard, secondCard] = [null, null]
}

(function shuffle(){
    cards.forEach(card =>{
        let random = Math.floor(Math.random() * 16)
        card.style.order = random
    })
})()

cards.forEach(card => card.addEventListener('click',flipcard))
