import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  classname?: string;
  children?: ReactNode;
  onClick?: () => void;
}

export const Header = ({ title, classname, children, onClick }: HeaderProps) => {
  return (
    <header className="flex">
      <h1 className={`flex justify-between text-lg font-medium ${classname}`}>{title}
        <span onClick={onClick}>
          {children}
        </span>
      </h1>
    </header>
  )
}