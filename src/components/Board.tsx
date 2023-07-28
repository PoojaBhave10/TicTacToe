import React, { useState } from "react";
import { IonButton, IonCol, IonContent, IonGrid, IonRow, IonText } from "@ionic/react";
import Square from "./Square";
import "./Board.css";

export default function board() {
  const [IsXNext, setIsXNext] = useState(true);
  const [squares, setSquare] = useState<any[]>(Array(9).fill(null));

  const winner = calculateWinner(squares);
  let status;
  let buttonColor;
  if (winner) {
    status = winner + " Wins!";
    buttonColor = "success"
  } else {
    status = "Next player: " + (IsXNext ? "X" : "O");
    buttonColor = "warning"
  }

  function calculateWinner(squares: any) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const handleClick = (i: any) => {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    if (IsXNext) {
      nextSquare[i] = "X";
    } else {
      nextSquare[i] = "O";
    }
    setSquare(nextSquare);
    setIsXNext(!IsXNext);
  };
  return (
    <IonContent class="backgroundImage">
      <div >
        <div className="labelStyle">
          <IonText>
            Tic Tac Toe
          </IonText>
        </div>
          
          <IonGrid>
            <IonRow>
              <IonCol size="3"></IonCol>
              <IonCol style={{marginTop:"2vh"}}>
              {squares.map((item,i) => (
               <>
                <IonCol key={i} >
                  <Square
                    value={squares[i]}
                    onSquareclick={(e: any) => handleClick(i)}
                  />
                </IonCol>
                </>
              ))}
              </IonCol>
              <IonCol size="3"></IonCol>
              
            </IonRow>
          </IonGrid>

         

          <div className="board-row"></div>
             <div style={{textAlign:'center', marginTop: '2vh'}}><IonButton mode="ios" color={buttonColor}><b>{status}</b></IonButton></div>   
      </div>
    </IonContent>
  );
}
