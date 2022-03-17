function createGame() {
    return {
        card1: null,
        card2: null,
        reveal: function (card) {
            card.setVisible(!card.isVisible)
            if (this.card1 == null) {
                this.card1 = card
                this.card1.listener()
                return
            }
            this.card2 = card
            this.card2.listener()
            if(this.card1.src === this.card2.src){
                this.card1 = null
                this.card2 = null
                return
            }
            setTimeout( ()=>{
                this.card1.setVisible(false)
                this.card1.listener()
                this.card2.setVisible(false)
                this.card2.listener()
                this.card1 = null
                this.card2 = null
            },1000)

        }
    }
}

export { createGame }