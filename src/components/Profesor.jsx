import Char from "./Char";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const Profesor = () =>
<Char
  name="Profesor"
  skill1name="Całka na przedziałka"
  skill1desc={
    <>
      Profesor rzuca tylko jedną kostką na raz i wyciąga z tego całkę korzystając ze wzoru:<br />
      <br />
      <MathJaxContext version={3} config={{options: { enableMenu: false }}}>
        <MathJax>
          {`$$\\int f(x)\\,dx = \\int x\\,dx = \\frac{1}{2}x^2 + \\frac{C}{3}$$`}
        </MathJax>
      </MathJaxContext>
      <br />
      podstawiając pod x liczbę wyrzuconą z pierwszej kostki<br />
      podstawiając pod C liczbę wyrzuconą z drugiej kostki<br />
      <br />
      * wyniki po przecinku zaokrągla w dół<br />
      * Profesor wykonuje tradycyjny rzut dwiema kostkami na Arenie PVP oraz w walce ze smokiem
    </>
  }
  skill1format={true}

  skill2name="Panzerkampfwagensiebenkanonendreissig"
  skill2desc={
`Korzystając z mocy statystki i używając rozkładu normalnego wypadków śmiertelnych w lochach, po przegranej walce jeżeli profesor:

* wyrzuci liczbę z zakresu [4-6] ma 100% szansy na uniknięcie obrażeń`
  }
/>

export default Profesor;