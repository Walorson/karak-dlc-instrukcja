import Char from "./Char";

const Obcy = () =>
<Char
  name="Obcy"
  skill1name="Mimikra"
  skill1desc={
`Po zabiciu potwora w lochach, może przyjąć jego formę lub tradycyjnie zabrać przedmiot do ekwipunku.

Przybranie formy potwora daje:
- możliwość omijania innych potworów bez walki
- Natychmiastowe zabójstwo potwora, którego formę się przybrało (jak przybierzesz formę szczura, to natychmiast zabijasz innego szczura jeżeli z nim walczysz)

* Jeżeli zabijesz potwora podczas mimikry wracasz do swojej poprzedniej formy, ale zyskujesz przedmiot z poprzedniego potwora i z tego którego zabiłeś

* Jeżeli gracz spotka Obcego w formie potwora w lochu, może go zaatakować tak jakby atakował zwykłego potwora. Jeżeli gracz wygra, Obcy traci formę a potwora należy całkowicie odrzucić z gry`
  }

  skill2name="Broń biologiczna"
  skill2desc={
`Może przetrawić przedmiot ze swojego ekwipunku na stałe na jedno z poniższych:
- +1 ruch w turze
- +1 obrażeń do rzutu
- +1 maksymalnego zdrowia

* Strawienie dwa razy tego samego przedmiotu nie daje bonusu
* Strawiony przedmiot powinien znajdować się przy karcie postaci obcego
* Nie może strawić kluczy ani skrzyń`
  }
/>

export default Obcy;