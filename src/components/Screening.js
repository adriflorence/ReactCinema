import React, {Component} from 'react';

class Screening extends Component {
  render(){
    return(
      <div className="screening">
        <section>
          <h4 className="screening-title">{this.props.title}</h4>
        </section>
        <section className="showtimes">
          <a href="#">Showtimes</a>
        </section>
      </div>
    )
  }
}
export default Screening;
