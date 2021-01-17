import React from 'react'
import styles from './Clock.module.css'

class Clock extends React.Component{
    constructor (props) {
        super (props);
        this.state = {
            time: new Date(),
            months: [
                'January', 'February', 'March',
                'April', 'May', 'June', 
                'Jule', 'August', 'September', 
                'October', 'Novermber','December'
                ]
        };
    }

    tick () {
        this.setState({time: new Date()})
    }

    componentDidMount () {
        this.interval = setInterval( () => this.tick(), 60000);
    }

    componentWillUnmount () {
        clearInterval(this.interval)
    }
    
    render () {
        return (
        <div>
            <span className={styles.white}>Local time: {this.state.time.getHours()}:{`${this.state.time.getMinutes()}`.length == 2 ? this.state.time.getMinutes() : '0'+this.state.time.getMinutes()}
            &emsp; &#9729; &#9731; &emsp;
            {this.state.time.getDate()} <span className={styles.month}>{this.state.months[this.state.time.getMonth()]}</span> {this.state.time.getFullYear()}</span>
        </div>
        );
    }
}

export default Clock;