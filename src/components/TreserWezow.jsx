import Char from "./Char";

const TreserWezow = () =>
<Char 
name="Treser Wężów"
skill1name="Toksyna"
skill1desc={
`Po walce z potworem lub graczem, jeżeli nie zostanie pokonany to na przeciwnika nakładana jest trucizna za pomocą ukąszenia przez węża.
Z każdą turą Tresera Węży jej dawka zwiększa się o 1 do maksymalnie 3

Trucizna osłabia potwora lub gracza w zależności od dawki jaką na sobie posiada.
1 punkt trucizny osłabia o 1
2 punkty trucizny osłabiają o 2
3 punkty trucizny osłabiają o 3

* Gracz atakujący potwora z trucizną sam zostaje otruty
* Gracz, który jest otruty, może oczyścić się z trucizny w fontannie życia`
}
skill2name="Podczerwień"
skill2desc={
`Rzucając kostką wylosuj czuły punkt dzięki wizji węża. 

Przed rzutem kostką Treser Wężów wybiera numer [1-6], jeżeli wylosuje wybrany numer, do swojego rzutu dodaje 3`
}
/>

export default TreserWezow;