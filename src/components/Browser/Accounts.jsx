import { Link } from "react-router-dom";
import user1 from "../../assets/img/user1.jpg";
import user2 from "../../assets/img/user2.jpg";
import user3 from "../../assets/img/user3.jpg";
import user4 from "../../assets/img/user4.png";
import user5 from "../../assets/img/user1.jpg";
import CardPerson from "./CardPerson";

export default function Accounts({ logo }) {
  return (
    <div className="bg-black">
      <header className="flex justify-between px-14 pt-7 items-center pb-10">
        <Link to="/">
          <img src={logo} alt="logo" className=" w-20" />
        </Link>
      </header>
      <main className="flex items-center justify-center flex-col pt-40">
        <h1 className="text-6xl text-white mb-6">Who's watching?</h1>
        <div className="flex items-center justify-center">
          <CardPerson img={user1} name={"User 1"} />
          <CardPerson img={user2} name={"User 2"} />
          <CardPerson img={user3} name={"User 3"} />
          <CardPerson img={user4} name={"User 4"} />
          <CardPerson img={user5} name={"User 5"} />
        </div>
      </main>
      <footer className="pt-24 pb-64 flex items-center justify-center text-gray-500">
        <span className="text-xl tracking-widest py-1 px-8 border-2 cursor-pointer border-gray-500 hover:border-gray-100 hover:text-white">
          MANAGE PROFILES
        </span>
      </footer>
    </div>
  );
}
