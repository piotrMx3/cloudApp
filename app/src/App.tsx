import "./App.css";
import SlotMachine from "./components/Slotmachine/Slotmachine";

function App() {
  return (
    <>
      <h1>Labo 2: Slots</h1>

      <SlotMachine slots={3} />
      <SlotMachine slots={5} />
      <SlotMachine slots={7} />
    </>
  );
}

export default App;
