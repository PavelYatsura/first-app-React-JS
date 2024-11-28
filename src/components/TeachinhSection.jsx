import WayToTeach from "./WayToTeach";
import { ways } from "../data";

export default function TeachinhSection() {
  return (
    <section>
      <h3>Мой подход к обучению</h3>
      <ul>
        {ways.map((way) => (
          <WayToTeach key={way.title} {...way} />
        ))}
      </ul>
      <button>asdads</button>
    </section>
  );
}
