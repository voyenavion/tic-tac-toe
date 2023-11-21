import findWinningBoxes from "./utils";

describe('given board array', () => {
    test('should return array of winning box indexes when south win present', ()=>{
        const board:String[] = ['X','','',
                                'X','','',
                                'X','','']
        const expected = [0,3,6]
        expect(findWinningBoxes(board)).toEqual(expected)
    })
    test('should return array of winning box indexes when east win present', ()=>{
        const board:String[] = ['', '', '',
                                'X','X','X',
                                'X','','']
        const expected = [3,4,5]
        expect(findWinningBoxes(board)).toEqual(expected)
    })
    test('should return array of winning box indexes when south-east win present', ()=>{
        const board:String[] = ['X', '', '',
                                'X','X','',
                                '',  '','X']
        const expected = [0,4,8]
        expect(findWinningBoxes(board)).toEqual(expected)
    })
    test('should return array of winning box indexes when south-west win present', ()=>{
        const board:String[] = ['O', '', 'O',
                                'X','O','',
                                'O',  '','X']
        const expected = [2,4,6]
        expect(findWinningBoxes(board)).toEqual(expected)
    })
    test('should return empty array when no win present', ()=>{
        const board:String[] = ['X','','','X','','','O','','']
        const expected:number[] = []
        expect(findWinningBoxes(board)).toEqual(expected)
    })
 })