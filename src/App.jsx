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
skill1desc={
`* Nekromanta nie może nosić żadnej broni do walki wręcz
* Po zabiciu potwora może umieścić go w ekwipunku w miejscu na broń

Zmartwychwstałe potwory mają domyślnie 2 punkty ataku, które dodają się do rzutu kostką.
* Podczas procesu wskrzeszania nekromanta wykonuje rzut kostką:
- gdy wynik jest większy od 3: siła potwora wzrasta o 1
- gdy wynik jest mniejszy od 2: siła potwora maleje o 1
`
} 
skill2name="Ofiara"
skill2desc={
`Nerkomanta poświęca życie swojego powstańca w zamian za:
- dodatkową turę gracza
- dodatkowy 1 punkt ataku w trakcie walki
`
}
/>


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
/>

<Char 
  name="Ninja"
  skill1name="Osłona nocy"
  skill1desc={
`Jeżeli w zasięgu do 3 płytek labiryntu od ninji nie znajduje się żaden:
- gracz
- potwór
To ninja może wykonywać niezliczoną ilość ruchów

* Ninja nie może wtedy odkrywać płytek labiryntu`
  } 

  skill2name="Podmianka"
  skill2desc={
`Jeżeli ninja przegra walkę, a w zasięgu do 3 płytek labiryntu znajduje się:
- przedmiot
- inny gracz
To ninja może wykonać zamianę miejsc i nie traci wtedy zdrowia

* Jeżeli zamieni się z innym graczem, to gracz ten traci jeden punkt zdrowia`
  }
/>

<Char 
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

<Char 
name="Snajper"
skill1name="Wprawne oko"
skill1desc={
`Snajper potrafi
* strzelić do celu oddalonego do 3 płytek labiryntu w prostej linii. Za każdą płytkę labiryntu dzielącą snajpera od celu, jego obrażenie wzrasta o 1
* strzelić rykoszetem do celu znajdującego się zaraz za zakrętem, ale od jego rzutów kostkom odejmuje się 2

* Jeżeli snajper atakuje z dystansu wynoszącego co najmniej 1 płytkę labiryntu, to przedmiot automatycznie trafia do jego ekwipunku  `
} 

skill2name="Wiele talentów"
skill2desc={
`Sztylety dają snajperowi +2 do ataku
* Nie może nosić broni ciężkiej takiej jak topory i miecze`
}

/>

<Char 
  name="Woskowy Potwór"
  skill1name="Obrońca lochu"
  skill1desc={
`Gdy Woskowy Potwór napotka innego gracza na swojej drodze w lochu może wejść z nim w przemocową interakcję atakując do 2 razy:
- gdy Woskowy Potwór wyrzuci więcej niż 3 na jednej kostce, to uderzony gracz traci jeden punkt zdrowia
- gdy Woskowy Potwór wyrzucie mniej niż 3 na jednej kostce, to dwie z jego rąk odpada skutkując zmniejszeniem ataku o 2 punkty

* Na początku każdej tury Woskowy Potwór odzyskuje wszystkie ręce`
  } 

  skill2name="Zamknięte wrota"
  skill2desc={
`Woskowy Potwór może zablokować korytarz przez który przechodził w swojej turze

* Na planszy mogą być maksymalnie dwa zablokowane przejścia
* Gdy Woskowy potwór próbuje zablokować kolejne przejście to najwcześniej postawione przejście ulega  autodestrukcji
* Przejście może zostać zniszczone przez gracza i woskowego potwora, jeżeli wyrzucą co najmniej 6 
* Próba zniszczenia woskowej ściany (udana lub też nie) wymaga wykorzystania jednego punktu ruchu`
  }

/>

<Char 
  name="Klucznik"
  skill1name="Pęk kluczy"
  skill1desc={
`Klucznik na miejscu czarów oraz broni od początku gry posiada 5 kluczy

* Kluczy tych nie można ukraść
* Nie może tymi kluczami otworzyć skrzyni
* Klucznik nie może nosić broni ani czarów

Każdy klucz w ekwipunku zapewnia mu +1 do rzutu kostką
Za każdy klucz na miejscu czarów zyskuje +1 ruchów w turze`
}
  skill2name="Wymiana zamków"
  skill2desc={
`Klucznik może odrzucić jeden ze swoich 5 kluczy, żeby wymienić zamki w skrzyni gracza z którym stoi na jednym polu

Wymiana zamków skutkuje zamknięciem jednej skrzyni skarbów gracza oraz wyrzuceniem jej na płytkę labiryntu tam gdzie stoją gracze`
  }
/>

<Char 
  name="Treser Wężów"
  skill1name="Toksyna"
  skill1desc={
`Po walce z przeciwnikiem, jeżeli nie zostanie pokonany to na przeciwnika nakładana jest trucizna za pomocą ukąszenia przez węża.
Z każdą turą Tresera Węży jej dawka zwiększa się o 1 do maksymalnie 3

Trucizna osłabia potwora w zależności od dawki jaką na sobie posiada.
1 punkt trucizny osłabia o 1
2 punkty trucizny osłabiają o 2
3 punkty trucizny osłabiają o 3`
}
  skill2name="Podczerwień"
  skill2desc={
`Rzucając kostką wylosuj czuły punkt dzięki wizji węża. 

Podczas rzutu kostką jeżeli wylosujesz wcześniej wybrany numer, do swojego rzutu dodaj 3`
  }
/>

<Char
  name="Obcy"
  skill1name="Mimikra"
  skill1desc={
`Po zabiciu potwora w lochach, może przyjąć jego formę lub tradycyjnie zabrać przedmiot do ekwipunku.

Przybranie formy potwora daje:
- możliwość omijania innych potworów bez walki
- Natychmiastowe zabójstwo potwora, którego formę się przybrało (jak przybierzesz formę szczura, to natychmiast zabijasz innego szczura jeżeli z nim walczysz)

* Jeżeli zabijesz potwora podczas mimikry wracasz do swojej poprzedniej formy, ale zyskujesz przedmiot z poprzedniego potwora i z tego którego zabiłeś

* Jeżeli gracz spotka Obcego w formie potwora w lochu, może go zaatakować tak jakby atakował zwykłego potwora. Jeżeli gracz wygra, Obcy traci formę a potwora należy całkowicie odrzucić z gry`
  }

  skill2name="Broń biologiczna"
  skill2desc={
`Może przetrawić przedmiot ze swojego ekwipunku na jedno z poniższych:
- +2 ruchy
- +2 obrażeń do rzutu
- +2 uzdrowienia

* Przedmiot należy odrzucić
* Nie może strawić kluczy ani skrzyń`
  }
/>

<Char
  name="Profesor"
  skill1name="Całka na przedziałka"
  skill1desc={
`Profesor rzuca tylko jedną kostką na raz i wyciąga z tego całkę korzystając ze wzoru:

∫𝑓(𝑥) = (1/2)x^2 + C/3

podstawiając pod x liczbę wyrzuconą z pierwszej kostki
podstawiając pod C liczbę wyrzuconą z drugiej kostki

* wyniki po przecinku zaokrągla w dół
* Profesor wykonuje tradycyjny rzut dwiema kostkami na Arenie PVP oraz w walce ze smokiem`
  }

  skill2name="Panzerkampfwagensiebenkanonendreissig"
  skill2desc={
`Korzystając z mocy statystki i używając rozkładu normalnego wypadków śmiertelnych w lochach, po przegranej walce jeżeli profesor:

* wyrzuci liczbę z zakresu [4-6] ma 100% szansy na uniknięcie obrażeń`
  }
/>

<Char
  name="Bard"
  skill1name="Taneczny pląs"
  skill1desc={
`Bard potrafi przesunąć swoją muzyką:
- przedmioty
- przedmioty specjalne (szczury Króla Szczurów, woskowa ściana Woskowego Potwora)
- potwory
o 2 płytki labiryntu`
  }
  skill2name="Liryczna chłosta"
  skill2desc="Po pokonaniu potwora leczysz się o 1 punkt zdrowia oraz możesz ruszyć się o 1 pole labiryntu"
  
/>

<Char
  name="Jeździec Pasikonika"

  additionalInfo={
`posiada:
- 3 zestawy naprawcze
- 3 zestawy ulepszeń`
  }

  skill1name="Potwór"
  skill1desc={
`Jeździec Pasikonika ma dodatkowe 3 punkty życia które należą do jego potwora

* Jeżeli potwór ma aktywne życia to przyjmuje obrażenia w zamian za gracza
* Dopóki potwór jest żywy Jeździec ma +1 do rzutów kostką

Pasikonika można wskrzesić na dwa sposoby:
- w fontannie życia (płytka z sercem)
- używając zestawu naprawczego

* Oba te sposoby odnawiają pełne życie pasikonika
* Jeździec Pasikonika może wykorzystać tylko jeden zestaw na turę
* Pasikonika nie można uleczyć w fontannie jeżeli został pokonany przez gracza`
    }

  skill2name="Ulepszenie"
  skill2desc={
`Jeździec pasikonika może wykorzystać swój zestaw ulepszeń to wzmocnienia swojego biorobota

ulepszenie sprawia, że Pasikonik porusza się autonomicznie i posiada kilka charakterystycznych cech:
- posiada 8 punktów ruchu na turę
- może zaatakować gracza
- może zostać zaatakowany przez gracza (gracz traktuje go jako potwora i żeby go pokonać musi wyrzucić co najmniej 11)
- może zaatakować potwora
- może podnieść przedmiot
- posiada 10 punktów życia
- do jego rzutów kostką dodaje się 3

Ulepszenie kończy się po zaatakowaniu gracza lub potwora

* Atakując gracza może zabrać mu przedmiot (jak na arenie PVP)
* Jeżeli pasikonik zostanie pokonany przez gracza, Jeździec musi podejść do niego i użyć zestawu naprawczego, żeby ponownie działał (fontanna nie działa w tym przypadku)`
  }
/>

<Char
  name="Mnich"
  skill1name="Medytacja"
  skill1desc={
`Mnich może poświęcić całą swoją turę na medytacje co daje mu następujące korzyści w kolejnej turze:

* posiada 1 dodatkowy punkt ruchu
* może kontynuować swoją turę nawet po pokonaniu potwora
* może podnosić przedmioty bez utraty tury
* dodaje 2 do swoich rzutów kostką
`
}
  skill2name="Parkour"
  skill2desc={
`Mnich potrafi przeskoczyć nad potworem oraz graczem, dzięki czemu może znaleźć się na płytce labiryntu za nimi nie tracąc przy tym punktu ruchu oraz nie wchodząc w interakcję z potworem`
  }
/>

<Char
  name="Druid"
  skill1name="Wezwanie Natury"
  skill1desc={
`Druid ma dostęp do dowolnego źródła życia na planszy za pomocą portalu. Z miejsca gdzie stoi może utworzyć portal do odkrytej fontanny życia. Portal pozostaje otwarty do początku kolejnej tury druida

* Przez portal mogą przechodzić inni gracze
* Portal działa w obie strony
* Przejście przez portal natychmiastowo kończy turę

Dodatkowo:
* Druid nie może nosić broni
* W miejsce broni może umieszczać zwoje zdrowia. Każdy taki zwój daje mu +1 do rzutu kostką`
  }

  skill2name="Dzikie Zarośla"
  skill2desc={
`Druid może rozstawiać bujną roślinność w pustych komnatach. Jeżeli jakiś gracz w nie wejdzie, rzuca kością
- rzut [1-3] roślinność nie atakuje
- rzut [4-6] roślinność zajmuje wybrane przez gracza miejsce w jego ekwipunku

* Zarośla można zniszczyć przegrywając walkę z potworem lub innym graczem
* Gdy zarośle zajmuje miejsce w ekwipunku to nie można umieścić tam przedmiotu
* jeśli zarośle zakrywa przedmiot to po prostu nie da się go użyć`
  }
/>

<Char
  name="Nożycoręki"
  skill1name="Długie Szpony"
  skill1desc={
`Nożycoręki przez swoje wielkie pazury bije wszystko wokół.
Gdy nożycoręki walczy, uderza wszystko co stoi na jego polu oraz 1 płytkę labiryntu na około niego.

* Kiedy uderza potwora, to może zabić kilka potworów na raz jednym rzutem (np: wyrzuca 9, dzięki czemu może zabić szczura, pająka, nietoperza, ale remisuje z miecznikiem)
* Kiedy uderza potwora, a w pobliżu stoi gracz, to w każdym przypadku gracz traci 1 punkt zdrowia
* Przedmioty z zabitych potworów wokół trafiają od razu do ekwipunku nożycorękiego`
}
  skill2name="Łowy"
  skill2desc={
`Jeżeli gracz znajduje się w prostej linii od nożycorękiego ten może do niego doskoczyć i stanąć na tym samym polu (brak limitu długości)

Po doskoku nożycoręki przeraża cel i może nim poruszyć o maksymalnie 2 pola labiryntu w wybranym przez siebie kierunku
* Nie może zakręcać, tylko w prostej linii
* Skok ten nie zużywa punktów ruchu`
  }
  
/>

<Char
  name="Jaskiniowiec"
  skill1name="Zapasy"
  skill1desc={
`Przy zabiciu potwora lub znalezieniu przedmiotu, Jaskiniowiec zyskuje zawsze również mięso

Mięso zapewnia bonusy do końca tury:
- uzdrawia 1 punkt zdrowia
- zapewnia +1 do wyniku rzutu kostką

* Tylko pierwsze mięso w turze zapewnia takie bonusy

Za każde kolejne zjedzone mięso w turze jaskiniowiec:
- traci jeden punkt zdrowia
- zapewnia sobie +1 do wyniku rzutu kostką
`
}
  skill2name="Trofeum"
  skill2desc={
`Wbrew pozorom Jaskiniowiec szybko zdobywa doświadczenie
Po zabiciu potwora może wziąć jego ciało jako trofeum i ustawić tak samo jak skrzynki obok karty postaci.

Każde trofeum zapewnia:
- +1 do rzutu kostkami przeciwko potworom

* Może mieć tylko jedno trofeum każdego potwora (tylko jeden szczur, tylko jeden topornik itd.)
* Jaskiniowiec nie potrafi używać magii
* Jeżeli jaskiniowiec przejdzie przez portal, natychmiast zostaje oszołomiony i kończy turę`
  }
/>
      </section>
  </main>
  )
}

export default App;
