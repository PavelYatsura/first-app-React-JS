import { differences } from "../data.js";
import Button from "./Button.jsx";
import { useState } from "react";
export default function SectionButton() {
  const [content, setContent] = useState(null);

  function handleClick(type) {
    console.log("button clicked", type);
    setContent(type);
  }
  function onMouseEnter(huyaip) {
    console.log("onMouseEnter", huyaip);
  }
  // let tabContent = null;

  // if (content) {
  //   tabContent = <p>{differences[content]}</p>;
  // } else {
  //   tabContent = <p>Нажми на кнопку</p>;
  // }
  return (
    <section className="sectionButton">
      <Button
        isActive={content === "One"}
        onClick={() => handleClick("One")}
        onMouseEnter={() => onMouseEnter("One")}
      >
        Мой подход
      </Button>
      <Button
        isActive={content === "Two"}
        onClick={() => handleClick("Two")}
        onMouseEnter={() => onMouseEnter("Two")}
      >
        Моя Доступность
      </Button>
      <Button
        isActive={content === "Three"}
        onClick={() => handleClick("Three")}
        onMouseEnter={() => onMouseEnter("Three")}
      >
        Моя Концентрация
      </Button>
      <Button onClick={() => handleClick(null)}>Закрыть</Button>
      {/* {tabContent} */}
      {content ? <p>{differences[content]}</p>  : <p>Нажми на кнопку</p>}
    </section>
  );
}
