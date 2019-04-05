import React, {Component} from 'react';
import './App.scss';
import Bar from './Bar/Bar';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sequence: [],
            touchedBar: 0
        }
        this.playSequence = this.playSequence.bind(this);
        this.inputSequence = this.inputSequence.bind(this);
    }

    playSequence() {
        let sequence = [...this.state.sequence];

        const handler = () => {
            let touchedBar = sequence.splice(0, 1)[0];
            this.setState({
                touchedBar
            });
            if (sequence.length === 0) {
                clearInterval(interval);
                this.setState({
                    touchedBar: 0
                });
            }
        };

        const interval = setInterval(handler.bind(this), 300);
    }

    inputSequence(event) {
        const textSequence = event.target.value;
        if (!isNaN(textSequence)) {
            this.setState({
                sequence: textSequence.split('').map(n => parseInt(n))
            });
        }
    }

    render() {
        return (
            <div className="App">
                <div className="sequence">
                    <input type="number" className="sequenceInput" onChange={this.inputSequence}/>
                    <button onClick={this.playSequence} className="play">Play!</button>
                </div>
                <div className="xylophone">
                    <Bar color="red" text="1" size="12" touched={this.state.touchedBar === 1}/>
                    <Bar color="orange" text="2" size="11" touched={this.state.touchedBar === 2}/>
                    <Bar color="yellow" text="3" size="10" touched={this.state.touchedBar === 3}/>
                    <Bar color="green" text="4" size="9" touched={this.state.touchedBar === 4}/>
                    <Bar color="blue" text="5" size="8" touched={this.state.touchedBar === 5}/>
                    <Bar color="darkblue" text="6" size="7" touched={this.state.touchedBar === 6}/>
                    <Bar color="violet" text="7" size="6" touched={this.state.touchedBar === 7}/>
                    <Bar color="red" text="8" size="5" touched={this.state.touchedBar === 8}/>
                    <Bar color="orange" text="9" size="4" touched={this.state.touchedBar === 9}/>
                </div>
            </div>
        );
    }
}

export default App;
