import React, {Component} from 'react';
import './App.css';
import Bar from './Bar/Bar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="xylophone">
                    <Bar color="red" text="1" size="12"/>
                    <Bar color="orange" text="2" size="11"/>
                    <Bar color="yellow" text="3" size="10"/>
                    <Bar color="green" text="4" size="9"/>
                    <Bar color="blue" text="5" size="8"/>
                    <Bar color="darkblue" text="6" size="7"/>
                    <Bar color="violet" text="7" size="6"/>
                    <Bar color="red" text="8" size="5"/>
                    <Bar color="orange" text="9" size="4"/>
                    <Bar color="yellow" text="10" size="3"/>
                    <Bar color="green" text="11" size="2"/>
                    <Bar color="blue" text="12" size="1"/>
                </div>
            </div>
        );
    }
}

export default App;
