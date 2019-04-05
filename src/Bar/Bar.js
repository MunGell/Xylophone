import React, {Component} from 'react';
import './Bar.scss';

class Bar extends Component {
    constructor(props) {
        super(props);
        this.audio = React.createRef();
        this.playSound = this.playSound.bind(this);
    }

    playSound() {
        this.audio.current.play();
    }

    render() {
        return <div className={'bar bar-color-' + this.props.color + ' bar-size-' + this.props.size}
                    onClick={this.playSound.bind(this)}>
            <div className="bar-text">{this.props.text}</div>
            <audio ref={this.audio} src={'./audio/C' + (13 - this.props.size) + '.wav'}/>
        </div>
    }
}

export default Bar;
