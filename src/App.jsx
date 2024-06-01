import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  console.log('レンダリング');
  
  // Stateの定義
  const [num, setNum] = useState(0);
  const onClickButton = () => {
    setNum(num + 1);
  };

  const contentPinkStyle = {
    color: "pink",
    fontSize: "20px"
  };

  return (
    <>
      <h1>こんにちは！</h1>
      <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
      <ColoredMessage color="pink">元気です！</ColoredMessage>
      <button onClick={onClickButton}>ボタン</button>
      <p>{num}</p>
    </>
  );
};