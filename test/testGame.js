import { createGame} from '../src/game.js'
import { createGrid } from '../src/grid.js' 
import chai from 'chai'
const expect = chai.expect
import sinon from 'sinon'

describe("a memory game", () => {

    it("must keep two matching cards", async () => {

        const grid = createGrid({ shuffle: false })
        const game = createGame(grid)
        const card1 = grid[0][0]
        const card2 = grid[2][2]
        expect(card1.isVisible).to.equal(false)
        expect(card2.isVisible).to.equal(false)
        card1.listener = sinon.fake()
        card2.listener = sinon.fake()
        game.reveal(card1)
        expect(card1.isVisible).to.equal(true)
        game.reveal(card2)
        expect(card2.isVisible).to.equal(true)
        setTimeout(function(){
            expect(card1.isVisible).to.equal(true)
            expect(card2.isVisible).to.equal(true)
            expect(card1.listener.callCount).to.equal(1)
            expect(card2.listener.callCount).to.equal(1)
        },2000)
        

    })

    it("must cancel two un-matching cards", async ()=> {

        const grid = createGrid({ shuffle: false })
        const controller = createGame(grid)
        const card1 = grid[0][0]
        const card2 = grid[2][3]
        expect(card1.isVisible).to.equal(false)
        expect(card2.isVisible).to.equal(false)
        card1.listener = sinon.fake()
        card2.listener = sinon.fake()
        controller.reveal(card1)
        expect(card1.isVisible).to.equal(true)
        controller.reveal(card2)
        expect(card2.isVisible).to.equal(true)
        setTimeout(function(){
            expect(card1.isVisible).to.equal(false)
            expect(card2.isVisible).to.equal(false)
            expect(card1.listener.callCount).to.equal(2)
            expect(card2.listener.callCount).to.equal(2)
        },2000)
       

    })
})
