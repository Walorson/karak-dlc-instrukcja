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
`Jeździec Pasikonika ma dodatkowe 3 punkty życia które należą do jego potwora, a także:
- Jeżeli potwór ma aktywne życia to przyjmuje obrażenia w zamian za gracza
- Dopóki potwór jest żywy Jeździec ma +1 do rzutów kostką

Pasikonika można wskrzesić używając zestawu naprawczego. Wykorzystanie zestawu naprawczego skutkuje odnowieniem życia Pasikonika do pełna

* Jeździec Pasikonika może wykorzystać tylko jeden zestaw na turę`
    }

  skill2name="Ulepszenie"
  skill2desc={
`Jeździec Pasikonika może wykorzystać swój zestaw ulepszeń do wzmocnienia swojego Pasikonika

ulepszenie sprawia, że Pasikonik porusza się autonomicznie i posiada kilka charakterystycznych cech:
- posiada 6 punktów ruchu na turę (są to dodatkowe ruchy jeźdźcy)
- może zaatakować potwora
- może podnieść przedmiot
- do jego rzutów kostką dodaje się 3

* Autonomiczny robot nie dostaje bonusów do rzutu kostką od broni ani magii Jeźdźcy

Dodatkowo:
- może zaatakować gracza
- może zostać zaatakowany przez gracza

* Podczas walki z graczem lub potworem, Pasikonik rzuca kośćmi jak zwykły gracz
* Gdy gracz atakuje Pasikonika, to traktuje go jak potwora i musi wyrzucić co najmniej 11 żeby go pokonać

Gdy gracz pokona Pasikonika, ten psuje się w miejscu pokonania. Pasikonik Nie może zostać wykorzystany dopóki Jeździec nie stanie na tym samym polu co zepsuta maszyna i nie poświęci swojej tury na jego naprawę za pomocą zestawu.

* Gdy autonomiczny robot walczy z potworem lub graczem, to rzuca kością jak zwykły gracz
* Kiedy autonomiczny robot pokona potwora, to przedmioty trafiają natychmiastowo do Jeźdźcy`
  }
/>

export default JezdziecPasikonika;