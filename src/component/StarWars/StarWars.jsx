import { useSelector } from "react-redux";

function StarWars() {
  const facts = useSelector((state) => state.facts.factsStarWars)
  const value = useSelector((state) => state.facts.value)
  let slicesFacts;
  /* Подскажите, почему у меня два раза отрисовывает компонент. Насколько это норм? Этот консоль лог два раза будет дублироваться в консоли*/
  console.log(value);
  if (value >= 1 && value <= 5) {
    slicesFacts = facts.slice(0, value)
  };
  
  return (
    <ul>
      {value >= 1 && value <= 5 && slicesFacts.map(fact => {
        return (
          <li key={fact}>{fact}</li>
        )
      })}
    </ul>
  );
}

export default StarWars;