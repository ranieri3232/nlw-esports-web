/* eslint-disable import/prefer-default-export */
interface GameCardProps {
  imageSrc: string;
  name: string;
  adsNumber: number;
}
function GameCard({ imageSrc, adsNumber, name }: GameCardProps) {
  return (
    <a href="/" className="relative w-[160px] flex overflow-clip">
      <img className="w-100 border-none rounded-lg" src={imageSrc} alt="game card" />

      <div className="w-full rounded-lg pt-16 pb-4 px-4 absolute bg-game-gradient bottom-[-1px] left-0">
        <span className="font-bold text-white block">{name}</span>
        <span className="text-sm text-zinc-300 block">
          {`${adsNumber} ${adsNumber === 1 ? 'anúncio' : 'anúncios'}`}
        </span>
      </div>
    </a>
  );
}

export { GameCard };
