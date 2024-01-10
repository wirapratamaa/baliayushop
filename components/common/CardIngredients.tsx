import { FaLeaf } from "react-icons/fa";

type CardIngredientProps = {
  children?: React.ReactNode;
  title: string;
};

export const CardIngredients = ({ title }: CardIngredientProps) => {
  return (
    <div className="rounded-full border w-36 h-36 flex justify-center items-center bg-primary-300 border-primary-300 shadow-lg">
      <FaLeaf className="w-full text-primary-100 text-5xl" />
      <div className="mt-1 text-primary-100">{title}</div>
    </div>
  );
};
