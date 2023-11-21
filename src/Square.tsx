import { Box } from "@mui/material";

export default function Square(props: {
  key: number;
  val: string;
  handleBoardChange: (i: number) => void;
}) {
  return (
    <Box
      data-testid="Square"
      key={props.key}
      onClick={(e)=>props.handleBoardChange(props.key)}
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 100,
        height: 100,
        border: 1,
        marginRight: "-1px",
        marginTop: "-1px",
        alignItems:"center",
        justifyContent:"center",
        fontSize:100
      }}
    >
      {props.val}
    </Box>
  );
}
