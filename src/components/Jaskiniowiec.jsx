import Char from "./Char";

const Jaskiniowiec = () =>
<Char
  name="Jaskiniowiec"
  additionalInfo={
`Jaskiniowiec nie potrafi używać zaklęć
Jeżeli jaskiniowiec przejdzie przez portal, natychmiast zostaje oszołomiony i kończy turę`}

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

* Może mieć tylko jedno trofeum każdego potwora (tylko jeden szczur, tylko jeden topornik itd.)`
  }
/>

export default Jaskiniowiec;