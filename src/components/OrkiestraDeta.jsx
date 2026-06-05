import Char from "./Char";

const OrkiestraDeta = () =>
<Char
    name="Orkiestra Dęta"
    additionalInfo="Cała orkiestra dęta składa się z 4 postaci, które można ustawiać. Jednak wszyscy podążają za dyrygentem"

    skill1name="Szyk"
    skill1desc={
        <>
Orkiestra Dęta może ustawić się w szyk nie do zdarcia. Rodzaje szyków:<br />
<br />
<img  src="./szyk.png" height="150"/>
<br />
Szyki wzmacniają rzut kostką dodając do niego 1 od każdej osoby w szyku (oprócz dyrygenta).<br /> 
Szyk kwadratowy również wzmacnia rzut, a cała Orkiestra Dęta może atakować przeciwników wokół (1 płytka labiryntu od formacji), każdego z osobna, w jednej turze korzystając ze swoich punktów ruchu. (jeden atak zużywa jeden punkt ruchu w turze)<br />
<br />
Szyk charakteryzuje się:<br />
- Ustawiony Szyk powoduje, że po przegranej walce Orkiestra Dęta nie traci zdrowia.<br />
- Orkiestra może ustawić się w szyk przed atakiem lub w trakcie swojej tury korzystając z 1 ruchu.<br />
- Przez Utworzony Szyk nie mogą przejść inni gracze<br />
<br />
Jeżeli Orkiestra chce się poruszyć musi zerwać Szyk<br />
<br />
- Szyku nie można utworzyć gdy na polu stoi już jakiś inny gracz lub potwór. Naturalną blokadą szyku są również ściany
- Domyślnie cała orkiestra porusza się równo z dyrygentem
        </>
    }
    skill1format={true}

    skill2name="Defilada"
    skill2desc="Korzystając z niebieskiego portalu Orkiestra Dęta może pojawić się w dowolnym miejscu na mapie kończąc turę przy tym swoją turę"
/>

export default OrkiestraDeta;