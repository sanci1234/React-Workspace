import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let a = 15;
  const firstName = "Enes";
  let vize1 = 60;
  let vize2 = 80;
  let sonuc = true;
  let isimler = ["Enes", "Ayşenur", "Kübra", "Adem"];

  return (
    <div>
      <p>a değişkeninin değeri : {a} </p>
      <p>Müşterinin adı : {firstName} </p>
      <p>Ortalama : {(vize1 + vize2) / 2} </p>
      {sonuc ? <p>Ehliyeti alabilirsin</p> : <p>Ehliyeti alamazsın</p>}
      {(vize1 + vize2) / 2 >= 50 ? (
        <p>Dersten Geçtin </p>
      ) : (
        <p>Dersten Kaldın</p>
      )}
      {isimler.map((isim, index) => (
        <div style={{
          backgroundColor:"orange",
          border:"1px solid black",
        }} key={index}>
          {isim}
        </div>
      ))}
    </div>
  );
}

export default App;
