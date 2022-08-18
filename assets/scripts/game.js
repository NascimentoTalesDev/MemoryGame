let game    = {

    techs: [
        "bootstrap",
        "css-3",
        "do-sustenido",
        "fire",
        "html-5",
        "mysql",
        "php",
        "physics",
        "sass",
        "script-java",
    ],

    cards: null,

    creatCardsFromTechs: function() {
    
        this.cards = []
    
        this.techs.forEach(tech => {
            this.cards.push(this.creatPairFromTech(tech));
        });
    
        this.cards =  this.cards.flatMap(pair => pair);
        this.suflleCards();
        return this.cards
 
    },
    
    creatPairFromTech: function (tech) {
    
        return [{
            id: this.creatIdWithTechs(tech),
            flipped: false,
            icon: tech,
        },{
            id: this.creatIdWithTechs(tech),
            flipped: false,
            icon: tech,
        }]
        
    },
    
    creatIdWithTechs: function (tech) {
        
        return tech + parseInt(Math.random() * 1000);
    },
    
    suflleCards: function(cards) {
    
        let curentIndex = this.cards.length;
        let randomIndex = 0;
    
        while (curentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * curentIndex)
            curentIndex--;
    
            [this.cards[randomIndex], this.cards[curentIndex]] = [this.cards[curentIndex], this.cards[randomIndex]]
        }
    
    },
}