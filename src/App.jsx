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

const App = () => {
  return (
    <main className="page">
      <header>
        <h1>KARAK DLC</h1>
      </header>
    
      <section className="characters">

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

      </section>
  </main>
  )
}

export default App;
