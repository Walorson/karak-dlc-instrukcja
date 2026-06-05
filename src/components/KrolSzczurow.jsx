import Char from "./Char";

const KrolSzczurow = () => 
<Char 
    name="Król Szczurów"
    additionalInfo={`Na początku gry zamiast zaklęć ma 3 szczury które może jednorazowo użyć (dają +1 do rzutu)
    Król szczurów nie może używać zaklęć`}

    skill1name="Posłańcy"
    skill1desc={
  `Król Szczurów może poświęcić jeden ruch w swojej turze na posłanie szczura. W swojej turze Król Szczurów może poruszać się dodatkowo jednym należącym do niego szczurem

Gdy król pokonuje szczura, to wraz ze sztyletami odnawia się też jego jeden szczur na miejscu umiejętności

Szczur posiada kilka cech charakterystycznych:
- posiada 2 ruchy
- może odkryć płytki labiryntu

* Kiedy szczur odkryje przeciwnika w komnacie, natychmiast umiera
* Jeżeli odkryje skarb to zaczyna go pilnować dla Króla i staje się przeciwnikiem dla innych graczy
* Jeżeli szczur spotka innego szczura to dodaje go do ekwipunku jako zaklęcie, ale król szczurów nie dostaje sztyletu

Jeżeli szczur stał się przeciwnikiem pilnującym skarbu to:
- Inni gracze nie muszą z nim walczyć, żeby przejść dalej
- Gdy Król podnosi skarb to podnosi również szczura
- Walka z szczurem kończy turę gracza który z nim walczył, a ten skarb nie może zostać ponownie zajęty przez innego szczura Króla`
    }

  skill2name="Władcza pasja"
  skill2desc={
`Za każdą odkrytą przez szczury płytkę w turze Król Szczurów zyskuje 1 do swojego następnego rzutu w tej turze`
  } 
/>;

export default KrolSzczurow;