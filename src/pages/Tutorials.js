import React, {useEffect} from 'react';
import Assignments from '../components/assignments/Assignment'
import Sidebar from '../components/sidebar/Sidebar'

function Tutorials(props) {
    let assignmentNum = props.match.params.assignment;
    let assignmentContent = props.location.list.assignment;

  return (
      <div className={"content assignmentContent"}>
          <div className={"assignmentContainer"}>
              <Assignments assignment={assignmentContent}/>
          </div>

          <div className={"card"} id={"sidebar"}>
              <ul>
                 {<Sidebar assignment={assignmentContent}/>}
              </ul>
          </div>
      </div>
  );
}

export default Tutorials;