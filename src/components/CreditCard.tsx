import Flag from '../assets/flag-card.svg';

interface CreditCardProps {
  transactions: number;
  balance: any;
}

export const CreditCard = ({ transactions, balance }: CreditCardProps) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-[250px] h-[139px] relative">
        <div className="w-[250px] h-[139px] my-10 bg-gradient-to-l from-zinc-700 to-neutral-800 rounded-xl" />
        <div className="w-[66px] h-[20.28px] px-[15px] py-1.5 left-[164px] top-[55px] absolute bg-zinc-300 rounded-sm flex-col justify-center items-center gap-2.5 inline-flex">
          <img className="object-contain" src={Flag} />
        </div>
        <div className="left-[20px] top-[55px] absolute text-white text-base font-bold tracking-tight">CAIO FREIRE</div>
        <div className="w-[54px] h-[43px] left-[20px] top-[120px] absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-white text-[10px] font-normal">Transaction</div>
          <div className="text-white text-xl font-bold">{transactions}</div>
        </div>
        <div className="w-[78px] h-[43px] left-[152px] top-[120px] absolute flex-col justify-start items-start gap-1 inline-flex">
          <div className="text-white text-[10px] font-normal">Total Balance:</div>
          <div className="text-white text-base font-bold">$ {balance}</div>
        </div>
      </div>
    </div>
  )
}