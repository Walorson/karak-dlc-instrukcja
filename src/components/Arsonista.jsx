import Char from "./Char"

const Arsonista = () =>
<Char
    name="Arsonista"
    additionalInfo={
`W grze pojawia się:
3 wódki, 3 musztardy, 3 keczapy`
    }

    skill1name="Nigdy nie przepijajcie..."
    skill1desc={
`Do gry trafiają dodatkowe przedmioty, które po zgromadzeniu zapewniają Arsoniście potężną moc

Musi zgromadzić 3 przedmioty:
- Wódka
- Musztarda
- Przepoja (Keczap)

Gdy Arsonista posiada 3 artefakty, może ich użyć poświęcając na to 2 punkty życia na stałe ze swojej puli (maksymalnie 3 punkty życia). Gdy przepije wódkę musztardą i poprawi keczapem zyskuje następujące ulepszenia na stałe:
- jego liczba ruchów na turę wynosi 6
- jego rzuty kostką mają zwiększoną wartość o 3
- limit spopielenia na turę wynosi 3

* Podnoszenie artefaktów nie kończy jego tury

Inni gracze również mogą podnosić artefakty z płytek jednak wykorzystując i odrzucając przedmiot zyskują oni osłabienie do momentu pojawienia się kolejnego artefaktu
* liczba ruchów zmniejsza się o 1
* wyniki rzutów kostką są o 1 mniejsze`
    }

    skill2name="Spopielenie"
    skill2desc={
`Arsonista może wykorzystać swój jeden ruch w turze na spopielenie płytki labiryntu.

Spopielona płytka zostaje zdjęta z planszy i położona na samym spodzie kupki płytek labiryntu.

* Arsonista nie może spopielić płytki na której stoi inny gracz lub znajduje się przedmiot
* Arsonista nie może spopielić płytek, które sprawią, że labirynt nie będzie się ze sobą łączył`
    }
/>

export default Arsonista;