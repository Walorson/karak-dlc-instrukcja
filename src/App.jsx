import './App.css'
import Char from './components/Char'

const App = () => {
  return (
    <main className="page">
      <header>
        <h1>KARAK DLC</h1>
      </header>

      <section className="characters">
        <Char 
          name="Nekromanta"
          skill1name="Powstań"
          skill2name="Ofiara"
          skill1desc={
            <>
              * Nekromanta nie może nosić żadnej broni do walki wręcz <br />
              * Po zabiciu potwora może umieścić go w ekwipunku w miejscu na broń<br />
<br />
              Zmartwychwstałe potwory mają domyślnie 2 punkty ataku, które dodają się do rzutu kostką.<br />
              * Podczas procesu wskrzeszania nekromanta wykonuje rzut kostką:<br />
              - gdy wynik jest większy od 3: siła potwora wzrasta o 1<br />
              - gdy wynik jest mniejszy od 2: siła potwora maleje o 1<br />
            </>
          } 
          skill2desc={
            <>
              <p>Nerkomanta poświęca życie swojego powstańca w zamian za:</p>
              <p>- dodatkową turę gracza</p>
              <p>- dodatkowy 1 punkt ataku w trakcie walki</p>
            </>
          }
        />


        <Char 
          name="Król Szczurów"
          skill1name="Władcza pasja"
          skill2name="Posłańcy"
          skill1desc={
            <>
              <p>Za każdą odkrytą płytkę w turze Król Szczurów zyskuje 1 do swojego następnego rzutu w tej turze</p>
            </>
          } 
          skill2desc={
            <>
              * Król Szczurów może poświęcić jeden ruch w swojej turze na posłanie szczura. W swojej turze Król Szczurów może również poruszać się wszystkimi żywymi szczurami. <br />
<br />
              Szczur posiada kilka cech charakterystycznych:<br />
              - posiada 2 ruchy<br />
              - może odkryć płytki labiryntu:<br />
                * Kiedy odkryje przeciwnika, natychmiast umiera<br />
                * Jeżeli odkryje skarb to zaczyna go pilnować dla Króla. Staje się 	przeciwnikiem dla innych graczy<br />
<br />
              Jeżeli szczur stał się przeciwnikiem pilnującym skarbu to:<br />
              - Inni gracze nie muszą z nim walczyć, żeby przejść dalej<br />
              - Walka z szczurem kończy turę gracza który z nim walczył, a ten skarb nie może zostać ponownie zajęty<br />
            </>
          }


          
        />

        <Char 
          name="Ninja"
          skill1name="Osłona nocy"
          skill2name="Podmianka"
          skill1desc={
            <>
              <p>Jeżeli w zasięgu do 3 płytek labiryntu od ninji nie znajduje się żaden:</p>
              <p>- gracz</p>
              <p>- potwór</p>
              <p>To ninja może wykonywać niezliczoną ilość ruchów</p>
              <br />
              <p>* Ninja nie może wtedy odkrywać płytek labiryntu</p>
            </>
          } 
          skill2desc={
            <>
              <p>Jeżeli ninja przegra walkę, a w zasięgu do 3 płytek labiryntu znajduje się:</p>
              <p>- przedmiot</p>
              <p>- inny gracz</p>
              <p>To ninja może wykonać zamianę miejsc i nie traci wtedy zdrowia</p>
              <br />
              <p>* Jeżeli zamieni się z innym graczem, to gracz ten traci jeden punkt zdrowia</p>
            </>
          }

          />

          <Char 
            name="Skrzynkarz"
            skill1name="Tragarz"
            skill2name="Komnatmistrz"
            skill1desc={
              <>
                Skrzynkarz potrafi nosić skrzynie w swoim ekwipunku zamiast zaklęć<br />
                Jeżeli posiada klucz, może otworzyć skrzynkę którą ma w swoim ekwipunku<br />
                Za każdą skrzynię w ekwipunku traci jeden ruch w swojej turze
              </>
            } 
            skill2desc={
              <>
                  Skrzynkarz może obrócić do 2 komnat lub korytarzy w swojej turze <br />
                    Korytarze oraz komnaty muszą tworzyć poprawną drogę<br />
                    Po zakończeniu tury skrzynkarza, korytarze wracają do normy
              </>
            }

          />

          <Char 
            name="Snajper"
            skill1name="Wprawne oko"
            skill2name="Wiele talentów"
            skill1desc={
              <>
                Snajper potrafi<br />
                * strzelić do celu oddalonego do 3 płytek labiryntu w prostej linii. Za każdą płytkę labiryntu dzielącą snajpera od celu, jego obrażenie wzrasta o 1<br />
                * strzelić rykoszetem do celu znajdującego się zaraz za zakrętem, ale od jego rzutów kostkom odejmuje się 2<br />
                <br />
                * Jeżeli snajper atakuje z dystansu wynoszącego co najmniej 1 płytkę labiryntu, to przedmiot automatycznie trafia do jego ekwipunku <br />    

              </>
            } 
            skill2desc={
              <>
                Sztylety dają snajperowi +2 do ataku <br /> 
              * Nie może nosić broni ciężkiej takiej jak topory i miecze <br /> 
              </>
            }

          />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <Char 
            name="Woskowy Potwór"
            skill1name="Obrońca lochu"
            skill2name="Zamknięte wrota"
            skill1desc={
              <>
                Gdy Woskowy Potwór napotka innego gracza na swojej drodze w lochu może wejść z nim w przemocową interakcję atakując do 2 razy: <br /> 
                - gdy Woskowy Potwór wyrzuci więcej niż 3 na jednej kostce, to uderzony gracz traci jeden punkt zdrowia<br /> 
                - gdy Woskowy Potwór wyrzucie mniej niż 3 na jednej kostce, to dwie z jego rąk odpada skutkując zmniejszeniem ataku o 2 punkty<br /> 
                <br /> 
                * Na początku każdej tury Woskowy Potwór odzyskuje wszystkie ręce <br /> 
              </>
            } 
            skill2desc={
              <>
                Woskowy Potwór może zablokować korytarz przez który przechodził w swojej turze <br /> 

                * Na planszy mogą być maksymalnie dwa zablokowane przejścia <br /> 
                * Gdy Woskowy potwór próbuje zablokować kolejne przejście to najwcześniej postawione przejście ulega  autodestrukcji <br /> 
                * Przejście może zostać zniszczone przez gracza i woskowego potwora, jeżeli wyrzucą co najmniej 6 <br /> 
                * Próba zniszczenia woskowej ściany (udana lub też nie) wymaga wykorzystania jednego punktu ruchu <br /> 
              </>
            }

          />
      </section>
  </main>
  )
}

export default App;
