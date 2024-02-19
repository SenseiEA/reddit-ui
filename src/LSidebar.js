import Tabs from "./Tabs";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineTrendingUp } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { PiSoccerBallThin } from "react-icons/pi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { CiBitcoin } from "react-icons/ci";
import { PiTelevisionSimpleBold } from "react-icons/pi";

export default function LSidebar() {
  return (
    <div className="border-solid border-2 border-reddit-line mt-10">
      <div className="w-96 justify-self-center">
        <Tabs name="Home" img={<IoHomeOutline />} />
        <Tabs name="Popular" img={<HiOutlineTrendingUp />} />
        <hr className="border-reddit-line"></hr>
        <h1 className="text-reddit-category grid justify-items-center">
          Topics
        </h1>
        <Tabs name="Gaming" img={<IoGameControllerOutline />} />
        <Tabs name="Sports" img={<PiSoccerBallThin />} />
        <Tabs name="Business" img={<IoBriefcaseOutline />} />
        <Tabs name="Crypto" img={<CiBitcoin />} />
        <Tabs name="Television" img={<PiTelevisionSimpleBold />} />
        <h4 className="text-white text-sm grid justify-items-center">
          See more
        </h4>
        <hr className="border-reddit-line"></hr>
        <h1 className="text-reddit-category grid justify-items-center">
          Resources
        </h1>
        <Tabs name="Gaming" />
      </div>
    </div>
  );
}
