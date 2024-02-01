
import LSidebar from './LSidebar';
import MainBlock from './MainBlock';
import RSidebar from './RSidebar';

export default function Homepage(){
    return(
      <div className="text-white flex justify-between">
          <LSidebar/>
          <MainBlock/>
          <RSidebar/>
  
          </div>
    );
  }