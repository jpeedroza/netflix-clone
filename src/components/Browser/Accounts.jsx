import { Link } from "react-router-dom";
import user1 from "../../assets/img/user1.jpg";
import user2 from "../../assets/img/user2.jpg";
import user3 from "../../assets/img/user3.jpg";
import user4 from "../../assets/img/user4.png";
import user5 from "../../assets/img/user1.jpg";
import logoMain from "../../assets/img/snk-logo.png";
import CardPerson from "./CardPerson";
import { useState } from "react";

export default function Accounts({ logo }) {
  const [showProfile, setshowProfile] = useState(false);

  return (
    <div className="bg-black">
      <header className="flex px-14 pt-7 items-center">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-20" />
        </Link>
        {showProfile && (
          <>
            <ul className="list-none flex ml-10">
              <li className="text-white mx-2 hover:text-gray-300">Home</li>
              <li className="text-white mx-2 hover:text-gray-300">TV Shows</li>
              <li className="text-white mx-2 hover:text-gray-300">Movies</li>
              <li className="text-white mx-2 hover:text-gray-300">
                New &amp; Popular
              </li>
              <li className="text-white mx-2 hover:text-gray-300">My List</li>
            </ul>
            <div className="ml-auto">
              <span className="text-white mx-2 hover:text-gray-100">
                search
              </span>
              <span className="text-white mx-2 hover:text-gray-100">gift</span>
              <span className="text-white mx-2 hover:text-gray-100">
                notification
              </span>
              <span className="text-white hover:text-gray-100">sanduiche</span>
            </div>
          </>
        )}
      </header>

      {showProfile ? (
        <>
          <div className="bg-red-100 bg-no-repeat bg-cover pt-60 pl-10">
            <img
              className="w-4/12"
              src={logoMain}
              alt={`logo de ${logoMain}`}
            />
            <div className="flex items-center pt-5">
              <div className="bg-red-600 rounded-lg w-10 text-center leading-3 h-8">
                <span className="text-white font-bold text-xs">TOP 10</span>
              </div>
              <span className="text-white font-semibold text-2xl pl-3 ">
                #9 in TV Shows Today
              </span>
            </div>
            <div className="pt-5">
              <h1 className="text-white text-2xl max-w-xl">
                What does it take to keep a 21st-century family going strong?
                Same thing as always: laughter and love.
              </h1>
              <button className="bg-white mr-3 w-32 h-10 rounded font-semibold">
                Play
              </button>
              <button className="bg-gray-800 bg-opacity-70 text-white font-semibold w-32 h-10 rounded">
                More Info
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <main className="flex items-center justify-center flex-col pt-52">
            <h1 className="text-6xl text-white mb-6">Who's watching?</h1>
            <div className="flex items-center justify-center">
              <CardPerson
                img={user1}
                name={"User 1"}
                fnClick={() => setshowProfile(!showProfile)}
              />
              <CardPerson
                img={user2}
                name={"User 2"}
                fnClick={() => setshowProfile(!showProfile)}
              />
              <CardPerson
                img={user3}
                name={"User 3"}
                fnClick={() => setshowProfile(!showProfile)}
              />
              <CardPerson
                img={user4}
                name={"User 4"}
                fnClick={() => setshowProfile(!showProfile)}
              />
              <CardPerson
                img={user5}
                name={"User 5"}
                fnClick={() => setshowProfile(!showProfile)}
              />
            </div>
          </main>
          <footer className="pt-24 pb-64 flex items-center justify-center text-gray-500">
            <span className="text-xl tracking-widest py-1 px-8 border-2 cursor-pointer border-gray-500 hover:border-gray-100 hover:text-white">
              MANAGE PROFILES
            </span>
          </footer>
        </>
      )}
    </div>
  );
}
