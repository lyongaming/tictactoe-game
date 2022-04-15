import { useContext } from "react";
import TurnContext from "../context/TurnContext";

export const useTurn = () => {
  const { turn, setTurn } = useContext(TurnContext);

  return { turn, setTurn };
};
