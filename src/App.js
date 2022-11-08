import './App.css';


//Music import
import kick from './sounds/kick.wav'
import boom from './sounds/boom.wav'
import clap from './sounds/clap.wav'
import hihat from './sounds/hihat.wav'
import openhat from './sounds/openhat.wav'
import ride from './sounds/ride.wav'
import snare from './sounds/snare.wav'
import tink from './sounds/tink.wav'
import tom from './sounds/tom.wav'
import Letter from './components/Letter';

function App() {
  const letters = [
    {
      letter: "A",
      musicName: "CLAP",
      song: new Audio(clap)
    },
    {
      letter: "S",
      musicName: "HIHAT",
      song: new Audio(hihat)
    },
    {
      letter: "D",
      musicName: "KICK",
      song: new Audio(kick)
    },
    {
      letter: "F",
      musicName: "OPENHAT",
      song: new Audio(openhat)
    },
    {
      letter: "G",
      musicName: "BOOM",
      song: new Audio(boom)
    },
    {
      letter: "H",
      musicName: "RIDE",
      song: new Audio(ride)
    },
    {
      letter: "J",
      musicName: "SNARE",
      song: new Audio(snare)
    },
    {
      letter: "K",
      musicName: "TOM",
      song: new Audio(tom)
    },
    {
      letter: "L",
      musicName: "TINK",
      song: new Audio(tink)
    }

  ]


  return (
    <div className="page">
      {letters.map((item, index) => {
        return <Letter
          key={index}
          letter={item.letter}
          musicName={item.musicName}
          song={item.song}
        />
      })}
    </div>
  );
}

export default App;
