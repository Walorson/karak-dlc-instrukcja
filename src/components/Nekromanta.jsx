import Char from "./Char";

const Nekromanta = () => 
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

export default Nekromanta;