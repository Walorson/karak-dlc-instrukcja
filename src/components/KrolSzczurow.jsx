import Char from "./Char";

const KrolSzczurow = () => 
<Char 
  name="Król Szczurów"
  skill1name="Władcza pasja"
  skill1desc={
`Za każdą odkrytą płytkę w turze Król Szczurów zyskuje 1 do swojego następnego rzutu w tej turze`
  } 

  skill2name="Posłańcy"
  skill2desc={
`* Król Szczurów może poświęcić jeden ruch w swojej turze na posłanie szczura. W swojej turze Król Szczurów może również poruszać się wszystkimi żywymi szczurami.

Szczur posiada kilka cech charakterystycznych:
- posiada 2 ruchy
- może odkryć płytki labiryntu:
  * Kiedy odkryje przeciwnika, natychmiast umiera
  * Jeżeli odkryje skarb to zaczyna go pilnować dla Króla. Staje się przeciwnikiem dla innych graczy

Jeżeli szczur stał się przeciwnikiem pilnującym skarbu to:
- Inni gracze nie muszą z nim walczyć, żeby przejść dalej
- Walka z szczurem kończy turę gracza który z nim walczył, a ten skarb nie może zostać ponownie zajęty`
  }
/>;

export default KrolSzczurow;