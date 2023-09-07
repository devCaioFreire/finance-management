import { Link } from "react-router-dom";

interface ButtonProps {
  title: string;
  className: string;
  link: string;
}
export const Button = ({ title, className, link }: ButtonProps) => {
  return (
    <Link to={link} className={className}>
      {title}
    </Link>
  )
}