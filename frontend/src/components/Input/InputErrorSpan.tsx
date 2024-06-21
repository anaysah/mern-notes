
const InputErrorSpan: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="absolute text-red-500 text-xs -bottom-0 right-1">
      {children}
    </span>
  );
};

export default InputErrorSpan;