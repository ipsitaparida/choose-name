import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageHeader: 'Naming Contests',
            contests: []
        };
    }
    componentDidMount() {
        axios.get('/api/contests')
        .then(resp => {
            this.setState({
                contests: resp.data.contests
            });
        })
        .catch(console.error)
        
    }
    componentWillUnmount() {
        console.log("will mount");
    }

    render() {
        return (
            <div className="App">
                <Header message={this.state.pageHeader} />
                <div>
                    {this.state.contests.map(contest => 
                        <ContestPreview key={contest.id} {...contest} />
                    )}
                </div>
            </div>
        );

    }
}

export default App;