import React from "react";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter/dist/cjs/light";
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism'

class Highlighter extends React.Component {
    constructor(props){
        super(props);
        console.log("fuck");
    }

    componentDidMount() {
        console.log("anything?");
    }

    render() {
        console.log("shit??");
        return (
                <SyntaxHighlighter language={"javascript"} style={dark}>
                    {this.props.code}
                </SyntaxHighlighter>
        )
    }
}

export default Highlighter;