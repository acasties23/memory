import { createGrid } from '../src/grid.js' 
import chai from 'chai'
const expect = chai.expect

describe("a memory grid",()=>{

    it("must have correct dimension",()=>{

        const grid = createGrid()
        expect(grid.length).to.equal(5)
        expect(grid[0].length).to.equal(4)
    })

    it("must have correct cells",()=>{

        const grid = createGrid()
        const topLeft = grid[0][0]
        expect(topLeft).to.have.property('visible')
        expect(topLeft.visible).to.equal(false)
        expect(topLeft).to.have.property('card')
        expect(topLeft.card).to.be.oneOf(['image1','image2','image3','image4','image5','image6','image7','image8','image9','image0'])
        expect(topLeft).to.have.property('card')
        topLeft.visible = true;
        expect(topLeft.visible).to.equal(true)
    })
})
