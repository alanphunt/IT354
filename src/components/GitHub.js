import React from "react";

class GitHub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitList: null
        };
    }

    componentDidMount() {
        this._callGitHub = async () => {
            const response = await fetch('https://api.github.com/users/alpal309/repos');
            return await response.json();
        };

       this._callGitHub().then(repos => {
            this.setState({gitList: repos});
       });
    }

    componentWillUnmount() {
        if (this._callGitHub) {
            this._callGitHub.cancel();
        }
    }

    render(){
        if(this.state.gitList !== null){
            return(
                <div className={"card"}>
                    <h2 className={"marg-bot"}>Checkout my latest projects from GitHub</h2>
                    <div className={"gitcardwrapper"}>
                    {this.state.gitList.map(repo => {
                        if(repo.id === 242429231 || repo.id === 235963014 || repo.id === 238362471) {
                            return (
                                <div key={repo.id} className={"gitcard"}>
                                    <div className={"githeader"}>
                                        <i className={"material-icons i-marg-right"}>insert_drive_file</i>
                                        <h2><a href={repo.html_url} target={"_blank"}>{repo.name}</a></h2>
                                    </div>
                                    <div className={"gitsection"}>
                                        <p>{repo.description}</p>
                                    </div>
                                    <div className={"gitfooter"}>
                                        <span>{repo.language}</span>
                                    </div>
                                </div>
                            )
                        }
                        return null;
                    })}
                    </div>
                </div>
            )
        }else{
            return <div></div>
        }
    }

}

export default GitHub;