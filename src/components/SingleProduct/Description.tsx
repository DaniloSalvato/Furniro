const Description = () => {
  return (
    <>
      <div className="flex flex-col w-full justify-center items-center pt-12 mb-12 border-t border-customBlack-950 ">
        <div className="flex md:w-full justify-center gap-4 lg:gap-32">
          <h1 className="font-poppins font-medium text-base md:text-2xl text-black cursor-pointer transform transition-transform duration-200 hover:scale-105">
            Description
          </h1>
          <h1 className="font-poppins font-light md:text-2xl text-customBlack-800 cursor-pointer transform transition-transform duration-200 hover:scale-105">
            Additional Information
          </h1>
        </div>
        <div className="flex flex-col w-full justify-center items-center mt-5">
          <p className="w-3/5 font-poppins font-light text-sm md:text-base text-customBlack-800 mt-6">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="w-3/5 font-poppins font-light text-sm md:text-base text-customBlack-800 mt-8">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 mt-10 w-4/5 lg:justify-center">
          <div>
            <img
            className=" transform transition-transform duration-200 hover:scale-105"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/sofa.png"
              alt="sofa"
            />
          </div>
          <div>
            <img
            className=" transform transition-transform duration-200 hover:scale-105"
              src="https://furniro-ds.s3.us-east-2.amazonaws.com/utils/sofa-2.png"
              alt="sofa-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
