import React, {Component} from 'react';

class Screening extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
  }

  render(){
    return(
      <div className="screening">
        <div className="flex">
          <section>
            <h4 className="screening-title">{this.props.title}</h4>
          </section>
          <section className="showtimes-button">
            <button onClick={this.toggle}>Showtimes</button>
          </section>
        </div>
        <div className={this.state.isOpen ? "show" : "hide" }>
          <section className="showtimes flex"> {this.props.showtimes.map(time => <div>{time}</div>)} </section>
        </div>
      </div>
    )
  }
}

export default Screening;
