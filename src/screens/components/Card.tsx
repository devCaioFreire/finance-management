interface CardProps {
  color?: boolean;
  title: string;
  value: string;
}

export const Card = ({ color, title, value }: CardProps) => {
  
  return (
    <div
      className={`w-52 h-36 ${color ? 'bg-[#037BCB]' : 'bg-[#1C1D24]'}  rounded-xl
      `}>
      <div className="flex flex-col p-4 gap-5">
        <span className="text-base text-zinc-50">{title}</span>
        <span className="text-2xl font-bold text-zinc-50">{value}</span>
      </div>
    </div>
  )
}