import React from 'react';
import Assignments from '../components/assignments/Assignment'
import Sidebar from '../components/sidebar/Sidebar'

class Tutorials extends React.Component{
    render() {
        let assignmentNum = this.props.match.params.assignment;
        let assignmentContent = this.props.location.list.assignment;
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
}

export default Tutorials;