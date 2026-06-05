import Char from "./Char";

const Nozycoreki = () =>
<Char
  name="Nożycoręki"
  skill1name="Długie Szpony"
  skill1desc={
`Nożycoręki przez swoje wielkie pazury bije wszystko wokół.
Gdy nożycoręki walczy, uderza wszystko co stoi na jego polu oraz 1 płytkę labiryntu na około niego.

* Kiedy uderza potwora, to może zabić kilka potworów na raz jednym rzutem (np: wyrzuca 9, dzięki czemu może zabić szczura, pająka, nietoperza, ale remisuje z miecznikiem)
* Kiedy uderza potwora, a w pobliżu stoi gracz, to w każdym przypadku gracz traci 1 punkt zdrowia
* Przedmioty z zabitych potworów wokół trafiają od razu do ekwipunku nożycorękiego`
}
  skill2name="Łowy"
  skill2desc={
`Jeżeli gracz znajduje się w prostej linii od nożycorękiego i nie zasłania go żadna ściana ten może do niego doskoczyć i stanąć na tym samym polu (brak limitu długości)

Po doskoku nożycoręki przeraża cel i może nim poruszyć o maksymalnie 2 pola labiryntu w wybranym przez siebie kierunku
* Nie może zakręcać graczem, może poruszyć nim tylko w prostej linii
* Skok ten nie zużywa punktów ruchu w turze nożycorękiego`
  }
  
/>

export default Nozycoreki;