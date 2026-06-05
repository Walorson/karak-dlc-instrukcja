import Char from "./Char";

const Obrzygulec = () =>
<Char
    name="Obrzygulec"
    additionalInfo="Obrzygulec dostaje 10 zarzyganych płytek labiryntu"

    skill1name="Zarzygany labirynt"
    skill1desc={
`Obrzygulec może stworzyć swój toksyczny korytarz wyżerając nieodkryte ściany, który będzie łączył ze sobą płytki labiryntu.

Wchodząc w korytarz gracz natychmiast prześlizguje się na drugą stronę.

Jeżeli w korytarz wchodzi inny gracz niż Obrzygulec, dostaje obrażenia wynoszące 1 punkt życia za każdą płytke zarzyganego labiryntu jaką przejdzie

* płytki zarzyganego labiryntu mogą zostać spopielone niezależnie od tego czy będą się ze sobą łączyć czy nie
* płytki zarzyganego labiryntu można stawiać tylko w taki sposób, żeby łączyły się z istniejącymi płytkami labiryntu

Śmierć w obrzyganym korytarzu sprawia, że gracz musi poświęć jeden przedmiot ze swojego ekwipunku`
    }

    skill2name="Odpychający oddech"
    skill2desc={
`Obrzygulec używając swoich wymiocin może popchnąć gracza stojącego 1 płytke labiryntu obok niego. Gracz ten poleci w prostej linii w kierunku podmuchu i zatrzyma się na najbliższej ścianie.

Jeżeli ściana ta bezpośrednio przechodzi w Zarzygany Labirynt, gracz natychmiast przez niego przelatuje dostając obrażenia tak jakby przez niego przechodził z własnej woli`
    }
/>

export default Obrzygulec;