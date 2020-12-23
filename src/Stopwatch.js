import React from 'react';
import './Stopwatch.css';

class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            minutesElapsed: 0,
            backgroundColor: 'black'
        };
    }
    getSeconds  = () => {
        console.info(('0' + Math.floor(this.state.secondsElapsed) % 60).slice(-2));
        return   ('0' + Math.floor(this.state.secondsElapsed) % 60).slice(-2);
    };
    getMinutes  = () => {
        console.log( ('0' + Math.floor(this.state.secondsElapsed / 60)).slice(-3));
        return ('0' + Math.floor(this.state.secondsElapsed / 60)).slice(-3);
    };
    incrementer = () => {
        this.timer = setInterval(() => {
            this.setState({
              secondsElapsed: this.state.secondsElapsed + 1
            });
        }, 1000);
        this.setState({
            //this.state.secondsElapsed = this.state.secondsElapsed + 1});
            color: 'red',
            secondsElapsed: this.state.secondsElapsed + 1
        });
    };
    handleStartClick = () => {
        //const _this = this;
        this.incrementer();
    };
    changeColor = () => {
        this.setState({
            backgroundColor: 'red'
        });
    };
    handleStopClick = () => {
        console.warn('Stopping...');
        clearInterval(this.timer);
    };
    handleResetClick = () => {
        console.info('reset...');
        this.setState({
            secondsElapsed: 0,
            backgroundColor: 'black'
        });
    };

    render () {
        console.log(this.state.backgroundColor);
        return (
            <div className={this.state.backgroundColor}>
                Stopwatch
                <h1>{this.getMinutes()} : {this.getSeconds()}</h1>
                <button type="button" onClick={this.handleStartClick}>Start</button>
                <button type="button" onClick={this.handleStopClick}>Stop</button>
                <button type="button" onClick={this.handleResetClick}>Reset</button>
                <button type="button" onClick={() => this.changeColor(this.state.backgroundColor)}>
                    {/*this.changeColor}*/}change</button>
            </div>
        );
    }
}
export default Stopwatch;
