import './App.css'
import Bard from './components/Bard';
import Druid from './components/Druid';
import Jaskiniowiec from './components/Jaskiniowiec';
import JezdziecPasikonika from './components/JezdziecPasikonika';
import Klucznik from './components/Klucznik';
import KrolSzczurow from './components/KrolSzczurow';
import Mnich from './components/Mnich';
import Nekromanta from './components/Nekromanta';
import Ninja from './components/Ninja';
import Nozycoreki from './components/Nozycoreki';
import Obcy from './components/Obcy';
import Skrzynkarz from './components/Skrzynkarz';
import Snajper from './components/Snajper';
import TreserWezow from './components/TreserWezow';
import WoskowyPotwor from './components/WoskowyPotwor';
import Pies from "./components/Pies";
import Profesor from "./components/Profesor";
import Arsonista from './components/Arsonista';
import BratKaraka from './components/BratKaraka';
import { useEffect, useRef, useState } from 'react';
import Obrzygulec from './components/Obrzygulec';
import OrkiestraDeta from './components/OrkiestraDeta';

const App = () => {
  const ref = useRef();
  const [charCount, setCharCount] = useState(0);

  useEffect(() => { setCharCount(ref.current.children.length) }, [])

  return (
    <main className="page">
      <header style={{marginBottom: "20px"}}>
        <h1>KARAK DLC</h1>
        <p>Liczba postaci: {charCount}</p>
      </header>
    
      <section className="characters" ref={ref}>

          <Nekromanta />
          <KrolSzczurow />
          <Ninja />
          <Skrzynkarz />
          <Snajper />
          <WoskowyPotwor />
          <Klucznik />
          <TreserWezow />
          <Profesor />
          <Obcy />
          <Bard />
          <JezdziecPasikonika />
          <Mnich />
          <Druid />
          <Nozycoreki />
          <Jaskiniowiec />
          <Pies />
          <Arsonista />
          <BratKaraka />
          <Obrzygulec />
          <OrkiestraDeta />

      </section>
  </main>
  )
}

export default App;
