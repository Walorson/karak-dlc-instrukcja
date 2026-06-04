import Char from "./Char";

const Druid = () =>
<Char
  name="Druid"
  additionalInfo="Druid nie może nosić broni, ale jego zaklęcia zadają podwójne obrażenia"

  skill1name="Wezwanie Natury"
  skill1desc={
`Druid ma dostęp do dowolnego źródła życia na planszy za pomocą portalu. Z miejsca gdzie stoi może utworzyć portal do odkrytej fontanny życia. Portal pozostaje otwarty do początku kolejnej tury druida

* Przez portal mogą przechodzić inni gracze
* Portal działa w obie strony
* Przejście przez portal natychmiastowo kończy turę gracza, który nie jest druidem
* Przejście przez portal w stronę uleczenia powoduje natychmiastowe uleczenie tego, który przez niego przeszedł

Dodatkowo:
* W miejsce broni może umieszczać zwoje zdrowia. Każdy taki zwój daje mu +1 do rzutu kostką`
  }

  skill2name="Dzikie Zarośla"
  skill2desc={
`Druid może rozstawiać bujną roślinność w pustych komnatach przez które przeszedł w swojej turze. Jeżeli jakiś gracz w nie wejdzie, rzuca kością
- rzut [4-6] roślinność nie atakuje
- rzut [1-3] roślinność zajmuje wybrane przez druida miejsce w jego ekwipunku

* Zarośla można zniszczyć przegrywając walkę z potworem lub innym graczem, a także poprzez uleczenie
* Gdy zarośle zajmuje miejsce w ekwipunku to nie można umieścić tam przedmiotu
* jeśli zarośle zakrywa przedmiot to po prostu nie da się go użyć
* Jeżeli druid chce postawić kolejne zarośla, a nie ma ich w ekwipunku, może po prostu przestawić jedne z tych, które znajdują się na planszy
* Zaroślem można zająć zarówno puste jak i zajęte miejsce w ekwipunku`
  }
/>

export default Druid;