import Char from "./Char";

const WoskowyPotwor = () =>
<Char 
  name="Woskowy Potwór"
  skill1name="Obrońca lochu"
  skill1desc={
`Gdy Woskowy Potwór napotka innego gracza na swojej drodze w lochu może wejść z nim w przemocową interakcję atakując do 2 razy:
- gdy Woskowy Potwór wyrzuci więcej niż 3 na jednej kostce, to uderzony gracz traci jeden punkt zdrowia
- gdy Woskowy Potwór wyrzuci mniej niż 3 na jednej kostce, to dwie z jego rąk odpada skutkując zmniejszeniem ataku o 2 punkty
- Wyrzucenie 3 skutkuje remisem

* Na początku każdej tury Woskowy Potwór odzyskuje wszystkie ręce

Jeżeli kogoś pokona gracz to ten gracz musi wybrać <???>`
  } 

  skill2name="Zamknięte wrota"
  skill2desc={
`Woskowy Potwór może zablokować korytarz przez który przechodził w swojej turze

* Na planszy mogą być maksymalnie dwa zablokowane przejścia
* Gdy Woskowy potwór próbuje zablokować kolejne przejście to najwcześniej postawione przejście ulega  autodestrukcji
* Przejście może zostać zniszczone przez gracza i woskowego potwora, jeżeli wyrzucą co najmniej 6 
* Próba zniszczenia woskowej ściany (udana lub też nie) wymaga wykorzystania jednego punktu ruchu`
  }

/>

export default WoskowyPotwor;