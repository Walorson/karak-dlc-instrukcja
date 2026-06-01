import Char from "./Char";

const Skrzynkarz = () => <Char 
  name="Skrzynkarz"
  skill1name="Tragarz"
  skill1desc={
`Skrzynkarz potrafi nosić skrzynie w swoim ekwipunku zamiast zaklęć
Jeżeli posiada klucz, może otworzyć skrzynkę którą ma w swoim ekwipunku
Za każdą skrzynię w ekwipunku traci jeden ruch w swojej turze`
  } 

  skill2name="Komnatmistrz"
  skill2desc={
`Skrzynkarz może obrócić do 2 komnat lub korytarzy w swojej turze 
Korytarze oraz komnaty muszą tworzyć poprawną drogę
Po zakończeniu tury skrzynkarza, korytarze wracają do normy`
  }

/>

export default Skrzynkarz;