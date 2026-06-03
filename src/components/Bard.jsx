import Char from "./Char";

const Bard = () =>
<Char
  name="Bard"
  skill1name="Taneczny pląs"
  skill1desc={
`Bard potrafi przesunąć swoją muzyką 2 razy na turę:
- przedmioty
- przedmioty specjalne (szczury Króla Szczurów, woskowa ściana Woskowego Potwora)
- potwory
o 2 płytki labiryntu

* nie może 2 razy tego samego`
  }
  skill2name="Liryczna chłosta"
  skill2desc="Po pokonaniu potwora leczysz się o 1 punkt zdrowia oraz możesz ruszyć się o 1 pole labiryntu"
  
/>

export default Bard;