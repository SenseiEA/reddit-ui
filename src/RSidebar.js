import Tabs from "./Tabs";

export default function RSidebar(){
    return(
      <div className="border-solid border-2 border-reddit-line mt-10 bg-reddit-black h-96">
        <div className="w-96 justify-self-center">
          <h1 className="text-reddit-category grid justify-items-center">Popular Communities</h1>
          <Tabs 
          name="Home"/>
          <Tabs name="Popular"/>
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