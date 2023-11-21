import { Box, Button, Typography } from "@mui/material";
import Square from "./Square";
import findWinningBoxes from "./utils";
import { useState } from "react";

export default function Board(props: { base: number; players: String[] }) {
  const [board, setBoard] = useState(Array(props.base * props.base).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [winners, setWinners] = useState(Array());

  const handleBoardChange = (i: number) => {
    const symbol = isXTurn ? "X" : "O";
    if (board[i] == "" && winners.length == 0) {
      const newBoard = board.slice();
      newBoard[i] = symbol;
      setWinners(findWinningBoxes(newBoard));
      setBoard(newBoard);
      setIsXTurn(!isXTurn);
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexFlow: "column wrap",
        justifyContent: "center",
        alignItems: "center",
        p: 20,
      }}
    >
      {winners.length < props.base ? (
        <Typography color="secondary" variant="h5">{`Your move, ${
          isXTurn ? props.players[0] : props.players[1]
        }.`}</Typography>
      ) : (
        <Typography color="gold" variant="h3">{`${
          board[winners[0]] == "X" ? props.players[0] : props.players[1]
        } is victorious!!!`}</Typography>
      )}
      <Box
        data-testid="Board"
        sx={{ display: "flex", flexDirection: "column", m: 1 }}
      >
        {Array(props.base)
          .fill(null)
          .map((e, i) => (
            <Box key={i} sx={{ display: "flex", flexFlow: "row", p: 0 }}>
              {Array(props.base)
                .fill(null)
                .map((e, j) =>
                  Square({
                    key: Number(i * props.base + j),
                    val: board[Number(i * props.base + j)],
                    handleBoardChange: handleBoardChange,
                  })
                )}
            </Box>
          ))}
      </Box>
      {winners.length > 0 && (
        <Button
          variant='contained'
          onClick={() => {
            setBoard(Array(props.base * props.base).fill(""));
            setWinners(Array())
          }}
        >
          Play Again!
        </Button>
      )}
    </Box>
  );
}
