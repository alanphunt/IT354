import React from "react";

class GitHub extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gitList: null,
            gitColors: null
        };
    }

    componentDidMount() {
        this._callGitHub = async () => {
            const response = await fetch('https://api.github.com/users/alpal309/repos');
            return await response.json();
        };

        this._callGitColors = async () => {
            const response = await fetch('https://raw.githubusercontent.com/ozh/github-colors/master/colors.json');
            return await response.json();
        };

        this._callGitHub().then(repos => {
            this.setState({gitList: repos});
       });

        this._callGitColors().then(colors => {
           this.setState({gitColors: colors});
        })
    }

    render(){
        if(this.state.gitList !== null){
            return(
                <div className={"card"}>
                    <h2 className={"marg-bot"}>Checkout my latest projects from GitHub</h2>
                    <div className={"gitcardwrapper"}>
                    {this.state.gitList.map(repo => {
                        if(repo.id === 242429231 || repo.id === 235963014 || repo.id === 238362471) {
                            let bgColor = {backgroundColor: this.state.gitColors[repo.language].color};

                            return (
                                <div key={repo.id} className={"gitcard"} onClick={()=>{window.open(repo.html_url, '_blank');}}>
                                    <div className={"githeader"}>
                                        <i className={"material-icons i-marg-right"}>turned_in_not</i>
                                        <h2>{repo.name}</h2>
                                    </div>
                                    <div className={"gitsection"}>
                                        <p>{repo.description}</p>
                                    </div>
                                    <div className={"gitfooter"}>
                                        <div>
                                            <div className={"langColor i-marg-right"} style={bgColor}/>
                                            <span>{repo.language}</span>
                                        </div>
                                        <div className={"gitfootright"}>
                                            <span>{repo.owner.login}</span>
                                            <img src={repo.owner.avatar_url} alt={'user icon'}/>
                                        </div>
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