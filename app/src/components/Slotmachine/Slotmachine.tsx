import styles from "./Slotmachine.module.css";

import {
  cherry,
  lemon,
  plum,
  seven,
  watermelon,
} from "../../assets/images/images";

interface SlotMachineProps {
  slots: number;
}

interface SlotProps {
  value: number;
}

const imagesArray = [cherry, lemon, plum, seven, watermelon];

const array = (slots: number) => {
  return Array.from({length: slots}, () => {
    return {
      value: Math.floor(Math.random() * 5),
      id: crypto.randomUUID(),
    };
  });
};

const Slot = ({value}: SlotProps) => {
  return (
    <>
      <img
        className={`${styles.slotsContainerImage}`}
        src={imagesArray[value]}
        alt={`Slot Item`}
      />
    </>
  );
};

const SlotMachine = ({slots}: SlotMachineProps) => {
  const slotArray = array(slots);

  const isWinning = slotArray.every((el) => el.value === slotArray[0].value);
  return (
    <>
      <div className={`${styles.slotsContainer}`}>
        {slotArray.map((slot) => (
          <Slot key={slot.id} value={slot.value} />
        ))}
      </div>
      {isWinning ? <h2>Je hebt gewonnen</h2> : <h2>Je hebt verloren</h2>}
    </>
  );
};

export default SlotMachine;
