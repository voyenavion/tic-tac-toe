import {render, screen} from '@testing-library/react'
import Board from './Board'

test('displays correct number of squares in correct order', async ()=>{
  render(<Board base={3} players={["Jessie, Dierdra"]}/>) 
  const squares = await screen.findAllByTestId('Square')
  expect(squares).toHaveLength(9)
})