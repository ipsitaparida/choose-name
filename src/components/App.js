import React, { Component } from 'react';

import Header from './Header';
import ContestList from './ContentList';

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

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <ContestList contests={this.state.contests} />
            </div>
        );

    }
}

export default App;