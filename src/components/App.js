import React, { Component } from 'react';

import Header from './Header';
import ContestList from './ContentList';

const pushState = (obj, url) => {
    debugger;
    window.history.pushState(obj, '', url);
};
    

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageHeader: 'Naming Contests',
            contests: this.props.initialContest
        };
    }
    componentDidMount() {
        
    }
    componentWillUnmount() {
        console.log("will mount");
    }

    fetchContest = (contestId) => {
        pushState(
            {currentContestId: contestId},
            `/contest/${contestId}`
        );
    };

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ContestList 
                    onContestClick={this.fetchContest}
                    contests={this.state.contests} />
            </div>
        );

    }
}

export default App;