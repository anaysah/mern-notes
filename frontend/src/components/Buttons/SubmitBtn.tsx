const SubmitBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type="submit"
      className="mt-4 bg-blue-500 text-white  p-2 rounded hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 ml-auto"
    >
      {children}
    </button>
  );
};

export default SubmitBtn;