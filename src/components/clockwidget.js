import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './styles/clockwidget.css';

export default class Clockwidget extends React.Component {

    constructor(props) {
      super(props);
      this.update = this.update.bind(this);
    }
    //update function called every second to update the time
    update() {
        var elem = document.getElementById('clock');
        elem.innerHTML = 'Time: ' + (moment().format('H:mm:ss'));
    }
    componentWillMount() {
        setInterval(this.update, 1000);
    }
    render(){
        return (
            <div className="clock">
                <div id="date">{(moment().format('DD MMMM YYYY'))}</div>
                <div id="clock"></div>
            </div>
        );
    }
}
