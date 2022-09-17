import logoImg from './assets/logo.svg';
import { GameCard } from './components/GameCard';

const cards = [
  { src: '/game-1.png', name: 'League of legends', adsNumber: 4 },
  { src: '/game-2.png', name: 'Dota 2', adsNumber: 1 },
  { src: '/game-4.png', name: 'Apex legends', adsNumber: 3 },
  { src: '/game-3.png', name: 'Counter Strike: Global offensive', adsNumber: 12 },
  { src: '/game-5.png', name: 'Fortnite', adsNumber: 6 },
  { src: '/game-6.png', name: 'World of Warcraft', adsNumber: 14 },
];

function App() {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-12">
      <img className="max-w-[260px]" src={logoImg} alt="eSports texto estilizado" />
      <h1 className="text-5xl text-white font-black mt-12">
        Seu
        <span className="text-transparent bg-clip-text bg-nlw-gradient"> duo </span>
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-3 mt-16">
        {cards.map(({ adsNumber, name, src }) => (
          <GameCard name={name} adsNumber={adsNumber} imageSrc={src} />
        ))}
      </div>
      <div className="bg-[#2A2634] px-8 py-6 mt-8 rounded-lg w-[960px] overflow-hidden mx-auto before:content-[''] before:w-[960px] before:border-lg before:flex before:h-[8px] before:bg-nlw-gradient before:relative before:bottom-[28px] before:left-[-32px]">
        <span>alo</span>
      </div>
    </div>
  );
}

export default App;
