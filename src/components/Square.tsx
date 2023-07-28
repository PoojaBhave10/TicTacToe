import { IonButton } from "@ionic/react";
import React, { useState } from "react";
import "./Square.css";

export default function Square({
  value,
  onSquareclick,
}: {
  value: string;
  onSquareclick: (e: any) => void;
}) {
  return (
    <IonButton className="buttonSize" color="light" onClick={onSquareclick}>
      <b>{value}</b>
    </IonButton>
  );
}
