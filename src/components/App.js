import React, { Component } from 'react';

import Header from './Header';
import ContestList from './ContentList';
import Contest from './Contest';
import * as api from '../api';
import PropTypes from 'prop-types';

const pushState = (obj, url) => {
    debugger;
    window.history.pushState(obj, '', url);
};

const onPopState = handler => {
    window.onpopstate = handler;
}


class App extends Component {
    constructor(props) {
        super(props);
        this.state = this.props.initialData;
    }
    componentDidMount() {
        onPopState((event) => {
            this.setState({
                currentContestId: (event.state || {}).currentContestId
            });
            
        });
    }
    componentWillUnmount() {
        onPopState(null);
    }

    fetchContest = (contestId) => {
        pushState(
            { currentContestId: contestId },
            `/contest/${contestId}`
        );
        api.fetchContest(contestId).then(contest => {
            this.setState({
                currentContestId: contest.id,
                contests: {
                    ...this.state.contests,
                    [contest.id]:contest
                }
            });
        });
    };

    fetchContestList = () => {
        pushState(
            { currentContestId: null },
            `/`
        );
        api.fetchContestList().then(contests => {
            this.setState({
                currentContestId: null,
                contests
            });
        });
    };

    pageHeader() {
        if(this.state.currentContestId) {
            return this.currentContest().contestName;
        }
        return "Naming Contest";

    }

    currentContest() {
        return this.state.contests[this.state.currentContestId]
    }

    currentContent() {
        if(this.state.currentContestId) {
            return <Contest 
            contestListClick={this.fetchContestList}
            {...this.currentContest()} />
        }

        return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} 
        />
    }
    render() {
        return (
            <div className="App">
                <Header message={this.pageHeader()} />
                {this.currentContent()}
            </div>
        );

    }
}

App.propTypes = {
    initialData: PropTypes.object.isRequired
}

export default App;