
window.addEventListener('load', function(){
    let waveImg = document.getElementById("greatWaveBackground");
    let header = document.querySelector("header");
    document.querySelector("body").style.backgroundImage = waveImg;
    let cards = this.document.querySelectorAll(".card");

    

    cards.forEach(function(card){
        let title = card.children[0];
        let info = card.children[1];


        cards.forEach(function(card) {
            card.addEventListener('mouseover', function() {
                // Fading handled by CSS
            });
    
            card.addEventListener('mouseout', function() {
                // Fading handled by CSS
            });
        });

    });
});