import Char from "./Char";

const Klucznik = () =>
<Char 
name="Klucznik"
additionalInfo="Klucznik nie może nosić broni ani czarów"

skill1name="Pęk kluczy"
skill1desc={
`Klucznik na miejscu czarów oraz broni od początku gry posiada 5 kluczy

Po zużyciu swoich kluczy specjalnych, może umieszczać tam zwykłe klucze jeżeli jakieś znajdzie

* Kluczy tych nie można ukraść
* Nie może tymi kluczami otworzyć skrzyni

Każdy klucz w ekwipunku zapewnia mu +1 do rzutu kostką
Za każdy klucz na miejscu broni zyskuje +1 ruchów w turze`
}
skill2name="Wymiana zamków"
skill2desc={
`Klucznik może odrzucić jeden ze swoich 5 kluczy, żeby wymienić zamki w skrzyni gracza z którym stoi na jednym polu

Wymiana zamków skutkuje zamknięciem jednej skrzyni skarbów gracza oraz wyrzuceniem jej na płytkę labiryntu tam gdzie stoją gracze`
}
/>

export default Klucznik;