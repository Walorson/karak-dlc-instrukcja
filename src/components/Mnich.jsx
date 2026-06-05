import Char from "./Char";

const Mnich = () =>
<Char
  name="Mnich"
  skill1name="Medytacja"
  skill1desc={
`Mnich może poświęcić całą swoją turę na medytacje co daje mu następujące korzyści w kolejnej turze:

- posiada 1 dodatkowy punkt ruchu
- może kontynuować swoją turę nawet po pokonaniu potwora
- może podnosić przedmioty bez utraty tury
- dodaje 2 do swoich rzutów kostką

Jednak może odkrywać płytki labiryntu tylko do momentu wyciągnięcia pierwszej komnaty
`
}
  skill2name="Parkour"
  skill2desc={
`Mnich potrafi przeskoczyć nad potworem oraz graczem, dzięki czemu może znaleźć się na płytce labiryntu za nimi nie tracąc przy tym punktu ruchu oraz nie wchodząc w interakcję z potworem`
  }
/>

export default Mnich;