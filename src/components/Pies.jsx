import Char from "./Char"

const Pies = () =>
<Char
    name="Pies"
    skill1name="Co za pies"
    skill1desc={
`Zwoje z czachą nie zużywają się, ale nie można nimi zabić

Dodatkowo:
- +1 do rzutu kostką za każdy zwój z czachą

* pies nie może rzucić czachy na gracza który ma już tylko 2 punkty zdrowia
* w turze może użyć maksymalnie 3 czach (jeżeli ma 3 zwoje)`
    }

    skill2name="Najlepszy przyjaciel człowieka albo czegoś tam"
    skill2desc={
`Pies porusza się nie do końca samodzielnie.

Pies na początku swojej tury wybiera gracza do którego przybiegnie (brak limitu zasięgu). Od tego gracza może wykonywać swoje 4 ruchy postaci. Odkrywać komnaty, walczyć i tym podobne.

Pod koniec tury wraca do pozycji gdzie znajduje się gracz do którego dobiegł na początku

Dodatkowo:
- inni gracze nie mogą przejść przez pole gdzie stoi pies z graczem do którego się przywiązał
- gracz którego wybrał pies nie może go zranić
- gracz którego wybrał pies ma +1 do wyników rzutów kostką

* W każdej turze pies musi wybrać innego przyjaciela`
    }
/>

export default Pies;