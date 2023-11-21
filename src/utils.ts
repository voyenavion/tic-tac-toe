export default function findWinningBoxes(board:String[]) {
    const base = Math.sqrt(board.length)
    const winningBoxes = []
    winningBoxes.push(southWin(board, base))
    winningBoxes.push(eastWin(board, base))
    winningBoxes.push(seWin(board, base))
    winningBoxes.push(swWin(board, base))
    const result = winningBoxes.find(e=>e.length==base)
    return result!=undefined ? result : []
}





const loopStartBoxes = (startBoxes:number[], calcEnd:(start:number)=>number, increment:number, board:String[]):number[] => {
    const base = Math.sqrt(board.length)
    console.log(`startBoxes: ${startBoxes}`)
    let winningBoxes:number[][] = startBoxes.map((e, i) => {
        let end:number = calcEnd(e)
        console.log(`start: ${e}`)
        console.log(`end:${end}`)
        let result = iterator(e,end,increment,board)
        console.log(`result: ${result}`)
        return result
    })
    const result = winningBoxes.find(e=>e.length==base)
    return result!=undefined ? result : []
}

const iterator = (start:number, end:number, increment:number, board:String[]):number[] => {
    let winners = []
    for(let i=start;i<end;i+=increment){
        if(board[start]!=''
        && board[start]==board[i]){
            winners.push(i)
        }
    }
    let result = winners.length > 0 ? winners : []
    return result
}

const southWin = (board:String[], base:number) => {
    const startBoxes:number[] = board.slice(0,base).map((e,i)=>i)
    const calcSouthEnd = (start:number) => board.length 
    return loopStartBoxes(startBoxes,calcSouthEnd, base, board)
 }

const eastWin = (board:String[], base:number) => {
    const startBoxes:number[] = board.reduce((acc:number[], e, i)=>{
        if(i%base==0){
            acc.push(i)
        }
        return acc
    },[])
    const calcEastEnd = (start:number)=> start + base
    let result = loopStartBoxes(startBoxes, calcEastEnd, 1, board)
    return result
}
const seWin = (board:String[], base:number) => {
    const startBoxes = [0]
    const calcSeEnd = (start:number) => board.length
    return loopStartBoxes(startBoxes, calcSeEnd, base+1, board)
}
const swWin = (board:String[], base:number) => {
    const startBoxes = [base-1]
    const calcSwEnd = (start:number) => board.length-2
    return loopStartBoxes(startBoxes, calcSwEnd, base-1, board)
}