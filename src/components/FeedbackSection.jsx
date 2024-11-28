import { useState, useRef } from "react";
import Button from "./Button";

function StateVsRef() {
  const input = useRef();
  const [show, setShow] = useState("");
  function handelKeyDown(event) {
    if (event.key === "Enter") {
      setShow(true);
    }
  }
  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input
        ref={input}
        type="text"
        onKeyDown={handelKeyDown}
        className="control"
      />
    </div>
  );
}

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: "",
    hasError: true,
    reason: "error",
  });

  //   const [name, setName] = useState("");
  //   const [reason, setReason] = useState("error");
  //   const [hasError, setHasError] = useState(true);

  function handelNameChange(event) {
    // setName(event.target.value);
    // setHasError(event.target.value.trim().length === 0);
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }));
  }
  function handelReasonChange(event) {
    setForm((prev) => ({ ...prev, reason: event.target.value }));
  }
  //   function toggleError(){
  //     // setForm((prev) => !prev)

  //   }
  return (
    <section>
      <h3>Обратная связь</h3>
      {/* <Button onClick={toggleError}>Toggel error</Button> */}

      <form>
        <label htmlFor="name">Ваше имя</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          onChange={handelNameChange}
          style={{ border: form.hasError ? "1px solid red" : null }}
        />
        <label htmlFor="reason">Причина обращения</label>
        <select
          id="reason"
          className="control"
          value={form.reason}
          onChange={handelReasonChange}
        >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложения</option>
        </select>
        <pre>{JSON.stringify(form, null, 2)}</pre>

        <Button type="button" disabled={form.hasError} isActive={!form.hasError}>
          Отправить
        </Button>
        
        <StateVsRef />
      </form>
    </section>
  );
}
