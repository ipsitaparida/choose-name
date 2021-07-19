import React, { Component } from 'react';

import Header from './Header';
import ContestList from './ContentList';
import Contest from './Contest';

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
            { currentContestId: contestId },
            `/contest/${contestId}`
        );
        // lookup the contest
        // this.state.contests[contestId]
        this.setState({
            pageHeader: this.state.contests[contestId].contestName,
            currentContestId: contestId
        });
    };

    currentContent() {
        if(this.state.currentContestId) {
            return <Contest {...this.state.contests[this.state.currentContestId]} />
        }

        return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} 
        />
    }
    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                {this.currentContent()}
            </div>
        );

    }
}

export default App;