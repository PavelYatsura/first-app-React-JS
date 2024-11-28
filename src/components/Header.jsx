import { useEffect, useState } from "react";
import logo from "/react.svg";

export default function Header() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => {
      clearInterval(interval)
    }
  }, []);

  return (
    <>
      <header>
        <h3>
          <img src={logo} alt="React Универ" />
          Моя Учеба
        </h3>

        <span>Время сейчас : {now.toLocaleTimeString()}</span>
      </header>
    </>
  );
}
