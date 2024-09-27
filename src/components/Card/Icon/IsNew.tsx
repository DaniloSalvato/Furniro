type IconProp = {
  children: React.ReactNode;
};

const IsNew = ({ children }: IconProp) => {
  return (
    <article className="absolute top-5 right-5 h-12 w-12 text-white  bg-customGreen-500 rounded-full  flex items-center justify-center">
      <p>{children}</p>
    </article>
  );
};

export default IsNew;
