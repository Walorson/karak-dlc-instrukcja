import Char from "./Char";

const Snajper = () => 
<Char 
name="Snajper"
additionalInfo="Nie może nosić broni ciężkiej takiej jak topory i miecze."

skill1name="Wprawne oko"
skill1desc={
`Snajper potrafi
* strzelić do celu oddalonego do 3 płytek labiryntu w prostej linii. Za każdą płytkę labiryntu dzielącą snajpera od celu, jego obrażenie wzrasta o 1
* strzelić rykoszetem do celu znajdującego się zaraz za zakrętem, ale od jego rzutów kostkom odejmuje się 2

* Jeżeli snajper atakuje z dystansu wynoszącego co najmniej 1 płytkę labiryntu, to przedmiot automatycznie trafia do jego ekwipunku
* Snajper odskakuje na maksymalnie 3 płytki odległości (chyba, że blokuje go ściana), gdy odkryje potwora`
} 

skill2name="Wiele talentów"
skill2desc={
`Sztylety dają snajperowi +2 do ataku`
}

/>

export default Snajper;