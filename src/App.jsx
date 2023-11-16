import "./index.css";
import Header from "./components/Header/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <div className="bg-black w-screen text-lightpurp font-poppins md:px-0 xl:px-6 2xl:px-32 pt:28 md:h-screen flex flex-col justify-center items-center">
      <Header />
      <Main />
    </div>
  );
};

export default App;
