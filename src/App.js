import Tariff from "./components/Tariff/Tariff";
import data from "./components/Tariff/data.json";
import { useState } from "react";
import styles from "./App.css";

//console.log(props.tariff);

function App() {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div className={styles.App}>
      {data.map((tariff, index) => (
        <Tariff
          key={index}
          color={tariff.color}
          name={tariff.name}
          price={tariff.price}
          speed={tariff.speed}
          text={tariff.text}
          id={tariff.id}
          setCount={setCount}
          isBoolean={tariff.id === count ? true : false}
        ></Tariff>
      ))}
    </div>
  );
}

export default App;
