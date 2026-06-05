import Char from "./Char";

const KrolSzczurow = () => 
<Char 
    name="Król Szczurów"
    additionalInfo="Na początku gry zamiast umiejętności ma 3 szczury które może jednorazowo użyć (dają +1 do rzutu)"

    skill1name="Posłańcy"
    skill1desc={
  `* Król Szczurów może poświęcić jeden ruch w swojej turze na posłanie szczura. W swojej turze Król Szczurów może również poruszać się wszystkimi żywymi szczurami.

  Szczur posiada kilka cech charakterystycznych:
  - posiada 2 ruchy
  - może odkryć płytki labiryntu:
    * Kiedy odkryje przeciwnika, natychmiast umiera
    * Jeżeli odkryje skarb to zaczyna go pilnować dla Króla, staje się przeciwnikiem dla innych graczy
    * Jeżeli szczur spotka szczura to dodaje go do ekwipunku jako zaklęcie, ale król szczurów nie dostaje sztyletu
    * Król szczurów nie może używać zwykłych zaklęć
    * Tylko jeden szczur się może ruszać

  Jeżeli szczur stał się przeciwnikiem pilnującym skarbu to:
  - Inni gracze nie muszą z nim walczyć, żeby przejść dalej
  - Jak podnosi skrzynie to razem ze szczurem
  - Walka z szczurem kończy turę gracza który z nim walczył, a ten skarb nie może zostać ponownie zajęty

  * gdy pokona szczura to znowu może go dać w miejsce zaklęć`
    }

  skill2name="Władcza pasja"
  skill2desc={
`Za każdą odkrytą przez szczury płytkę w turze Król Szczurów zyskuje 1 do swojego następnego rzutu w tej turze`
  } 
/>;

export default KrolSzczurow;