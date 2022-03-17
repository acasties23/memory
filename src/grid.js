
function createGrid() {
    let cardArray = ['image1','image2','image3','image4','image5','image6','image7','image8','image9','image0',
    'image1','image2','image3','image4','image5','image6','image7','image8','image9','image0']
    
    cardArray.sort(() => 0.5 - Math.random())
    
    const grid = []
    let index = 0
    for (let i = 0; i < 5; i++) {
        const row = []
        for (let j = 0; j < 4; j++) {
            row.push(
                {
                    isVisible:false,
                    src: cardArray[index],
                    setVisible: function(isVisible){
                        this.isVisible = isVisible
                    },
                    getSrc:function(){ 
                        if(this.isVisible){
                            return 'images/'+ this.src +'.jpeg'
                        }
                        return 'images/dos.jpeg'
                    }
                },
            )
            index += 1
        }
        grid.push(row)      
    }
    return grid
}

export { createGrid }
