import Char from "./Char";

const Ninja = () => 
<Char 
  name="Ninja"
  skill1name="Osłona nocy"
  skill1desc={
`Jeżeli w zasięgu do 2 płytek labiryntu od ninji nie znajduje się żaden:
- gracz
- potwór
To ninja może wykonywać niezliczoną ilość ruchów

* Ninja nie może wtedy odkrywać płytek labiryntu
* wszystkie ruchy w zasięgu graczy i potworów liczą się jako ruchy do zwykłej tury`
  } 

  skill2name="Podmianka"
  skill2desc={
`Jeżeli ninja przegra walkę, a w zasięgu do 2 płytek labiryntu znajduje się:
- przedmiot
- inny gracz
To ninja może wykonać zamianę miejsc i nie traci wtedy zdrowia

* Jeżeli zamieni się z innym graczem, to gracz ten traci jeden punkt zdrowia`
  }
/>

export default Ninja;