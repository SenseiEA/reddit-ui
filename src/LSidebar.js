import Tabs from "./Tabs";
import { IoHomeOutline } from "react-icons/io5";
import { HiOutlineTrendingUp } from "react-icons/hi";


export default function LSidebar(){
    return(
      <div className="border-solid border-2 border-reddit-line mt-10">
        <div className="w-96 justify-self-center">
          <Tabs 
          name="Home"
          img={<IoHomeOutline />}/>
          <Tabs name="Popular"
          img={<HiOutlineTrendingUp />}/>
          <hr className="border-reddit-line"></hr>
          <h1 className="text-reddit-category grid justify-items-center">Topics</h1>
          <Tabs name="Gaming"/>
          <Tabs name="Sports"/>
          <Tabs name="Business"/>
          <Tabs name="Crypto"/>
          <Tabs name="Television"/>
          <h4 className="text-white text-sm grid justify-items-center">See more</h4>
          <hr className="border-reddit-line"></hr>
          <h1 className="text-reddit-category grid justify-items-center">Resources</h1>
          <Tabs name="Gaming"/>
        </div>
      </div>
      
    );
  }