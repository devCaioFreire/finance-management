interface ButtonProps {
  title: string;
  className: string;
}
export const Button = ({ title, className }: ButtonProps) => {
  return (
    <button className={className}>
      {title}
    </button>
  )
}