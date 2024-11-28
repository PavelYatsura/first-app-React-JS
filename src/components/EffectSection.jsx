import { useEffect, useState, useCallback } from "react";
import Button from "./Button";
import Modal from "./Modal/Modal";
import useInput from "./hooks/useInpyt";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  function openModal() {
    setModal(true);
  }
  return (
    <section>
      <h3>EffectSection</h3>

      <Button onClick={openModal} >Открыть информмацию</Button>
      <Modal open={modal}>
        <h3>Hello form modal</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          tenetur omnis, modi est sed doloremque dolor esse porro nisi. Non
          alias laboriosam obcaecati magni amet, adipisci neque illo eaque
          porro.
        </p>
        <Button onClick={() => setModal(false)}>Close</Button>
      </Modal>

      {loading && <p>loading...</p>}
      {!loading && (
        <>
          <input type="text" className="control pt-20px" {...input}></input>
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(input.value.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}
