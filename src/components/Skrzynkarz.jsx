import Char from "./Char";

const Skrzynkarz = () => <Char 
  name="Skrzynkarz"
  skill1name="Tragarz"
  skill1desc={
`Skrzynkarz potrafi nosić skrzynie w swoim ekwipunku zamiast zaklęć
Jeżeli posiada klucz, może otworzyć skrzynkę którą ma w swoim ekwipunku
Za każdą skrzynię (oprócz pierwszej) w ekwipunku traci jeden ruch w swojej turze - licząc od drugiej posiadanej skrzyni

Dodatkowo:
* podnosi bez strat tury
* Za każdą zamkniętą skrzynię w ekwipunku ma +1 ataku
* Jeżeli skrzynkarz umrze to wypadają z niego wszystkie zamknięte skrzynie`
  } 

  skill2name="Komnatmistrz"
  skill2desc={
`Skrzynkarz może obrócić do 2 komnat lub korytarzy w swojej turze 
Korytarze oraz komnaty muszą tworzyć poprawną drogę
Po zakończeniu tury skrzynkarza, korytarze wracają do normy

* Nie może odkrywać komnat od obróconej płyty`
  }

/>

export default Skrzynkarz;