import Char from "./Char";

const JezdziecPasikonika = () =>
<Char
  name="Jeździec Pasikonika"

  additionalInfo={
`Posiada:
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

export default JezdziecPasikonika;