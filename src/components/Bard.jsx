import Char from "./Char";

const Bard = () =>
<Char
  name="Bard"
  skill1name="Taneczny pląs"
  skill1desc={
`Bard przy pomocy swojej muzyki potrafi poruszyć następujące przedmioty o 2 płytki labiryntu:
- przedmioty
- potwory
- przedmioty specjalne (np. szczury Króla Szczurów, woskowa ściana Woskowego Potwora)

Jeżeli bard przywoła na swoje pole potwora, potwór ten jest osłabiony o 1. (Trzeba jeden mniej żeby go pokonać)

* Nie może przesunąć 2 razy tego samego przedmiotu w jednej turze
* Gdy przesuwany potwór przechodzi przez Barda, ten nie musi z nim walczyć
* Gdy potwór jest przesunięty na innego gracza, ten musi z nim walczyć`
  }
  skill2name="Liryczna chłosta"
  skill2desc={
`Po pokonaniu potwora leczysz się o 1 punkt zdrowia oraz możesz wykonać dodatkowy "Taneczny Pląs"

Dodatkowo:
- Ten Taneczny Pląs pozwala na przesunięcie siebie o 2 płytki labiryntu`
  }
  
/>

export default Bard;