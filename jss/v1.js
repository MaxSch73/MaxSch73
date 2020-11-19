






























carddeck = document.getElementById('card-deck');
for(var i=0; i<16; i++){
    var Div = document.createElement('div')
    Div.className = 'card'+i;
    document.body.appendChild(Div)

    container.innerHTML += '<div class="card">ITEM' + (i + 1) + '</div>';
}
