import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import { ImWhatsapp } from "react-icons/im";
import { BsTelegram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-[100vh] flex flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-24">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="Logo" />
          <SearchInput />
          <div className="flex gap-12 text-[#3c4043] mt-8">
            <button className="h-12 px-4 bg-[#e8eaeb] text-sm rounded-full border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              <BsYoutube />
            </button>

            <button className="h-12 px-4 bg-[#e8eaeb] text-sm rounded-full border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              <ImWhatsapp />
            </button>

            <button className="h-12 px-4 bg-[#e8eaeb] text-sm rounded-full border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
              <BsTelegram />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
