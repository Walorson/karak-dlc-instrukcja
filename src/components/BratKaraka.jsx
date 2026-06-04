import Char from "./Char";

const BratKaraka = () =>
<Char
    name="Brat Karaka"
    additionalInfo="(Karak od tyłu)"

    skill1name="Klątwiarstwo"
    skill1desc={
`Brat karaka zapoznał się z księgami czarów w bibliotece swojego brata, dzięki czemu nauczył się rzucać kilka denerwujących klątw.

Karak posiada 3 klątwy, które może rzucić zamiast dowolnego zaklęcia:
- Spowolnienie (zmniejsza liczbę ruchów w turze do 2)
- Rozbrojenie (wyłącza możliwość używania broni lub zaklęć)
- Opętanie (wykonaj jeden ruch w turze gracza za niego, możesz odkrywać komnaty, walczyć, rzucać o klątwę, podnosić przedmioty)

* Opętanie kończy się po przegranej walce lub podniesieniu przedmiotu. Wtedy gracz może wykonać swoje pozostałe ruchy w turze

* Klątwy te można zdjąć uzdrawiając się na sercu lub jeśli Brat Karaka przełoży je na kogoś innego

* Na jednym graczu może znajdować się tylko jedna klątwa

* Kilka klątw może być rzucone w jednym momencie`
    }

    skill2name="Dziwne literki"
    skill2desc={
`Karak podnosi z podłogi zaklęcia które zostały wcześniej wykorzystane.

Karak ma możliwość użycia zaklęcia, które było poprzednio użyte podczas gry w zamian za swój 1 ruch.

* Zaklęcie może być użyte w dowolnym momencie tury jeżeli zasady na to przyzwalają`
    }
/>

export default BratKaraka;