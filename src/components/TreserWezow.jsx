import Char from "./Char";

const TreserWezow = () =>
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

export default TreserWezow;