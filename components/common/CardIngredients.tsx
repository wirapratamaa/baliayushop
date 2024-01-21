type CardIngredientProps = {
  children?: React.ReactNode;
};

export const CardIngredients = ({ children }: CardIngredientProps) => {
  return (
    <div className="w-24 h-24 flex justify-center items-center overflow-hidden relative">
      {children}
    </div>
  );
};
