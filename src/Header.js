export default function Header(){
    return(  
      <div className="flex flex-row justify-between bg-reddit-color p-1">
        <div className="header-1 flex flex-row">
          <img className="header-logo" src="images/logo.png" alt="reddit-logo"></img>
          <h1 className="logo-name text-3xl align-middle font-bold text-white">reddit</h1>
        </div>
        <div className="header-2">
          <input type="text" className="rounded-full mt-1 h-10 w-96 p-5 bg-reddit-hover text-white" placeholder="Search..."/>
        </div>
        <div className="header-3">
          <button type="button" className="rounded-full m-1 p-3 bg-reddit-hover text-white font-semibold align-middle">Get App</button>
          <button type="button" className="rounded-full m-1 p-3 bg-reddit-orange text-white font-semibold align-middle">Log In</button>
        </div>
      </div>
    );
  
  }
  