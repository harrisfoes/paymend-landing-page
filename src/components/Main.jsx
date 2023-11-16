import downloadBtn from "../assets/download.png";
import heroImg from "../assets/HeroImage.png";

function Main() {
  return (
    <main className="px-6 py-6 flex-wrap flex overflow-hidden lg:justify-between lg:w-full lg:items-between lg:px-16">
      <div className="first-hero lg:w-1/2 lg:flex lg:flex-col lg:justify-center">
        <div className="tracking-[.35rem] font-sm pb-4">START SAVING MONEY</div>
        <h1 className="text-4xl font-semibold text-white xl:text-7xl xl:py-4">
          Smart Credit Card For Your Daily Life.
        </h1>
        <div>
          <button className="bg-lightpurp text-black rounded-xl my-6 px-4 h-14 text-xl font-bold flex gap-2 items-center justify-center hover:text-lightpurp hover:bg-darkblue active:text-black active:bg-lightpurp">
            Download
            <img
              src={downloadBtn}
              alt="download icon"
              className="hover:fill-lightpurp"
            />
          </button>
        </div>
      </div>

      <div className="img-hero flex-shrink-0 lg:w-1/2 md:flex-shrink lg:items-around lg:flex lg:justify-end">
        <img src={heroImg} alt="company img" />
      </div>
    </main>
  );
}

export default Main;
