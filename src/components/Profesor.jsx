import Char from "./Char";

const Profesor = () =>
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

export default Profesor;