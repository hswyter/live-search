import { FunctionComponent, ReactElement } from "react";

interface CardProps {
  topElement: ReactElement;
  title: string;
  subtitle: string;
}

const Card: FunctionComponent<CardProps> = ({ topElement, title, subtitle }: CardProps) => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md">
      {topElement}
      <div className="flex flex-col">
        <span className="font-medium">{title}</span>
        <span className="text-sm">{subtitle}</span>
      </div>
    </div>
  );
}

export default Card;