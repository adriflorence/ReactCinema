import React, {Component} from 'react';
import ScreeningList from '../components/ScreeningList.js';

class ScreeningBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          title: "Sausage Party",
        },
        {
          id: 2,
          title: "Cafe Society",
        },
        {
          id: 3,
          title: "Morgan",
        },
        {
          id: 4,
          title: "The 9th Life of Louis Drax",
        },
        {
          id: 5,
          title: "Naam Hai Akira",
        },
        {
          id: 6,
          title: "Equity",
        },
        {
          id: 7,
          title: "Things To Come",
        }
      ]
    }
  }
  render(){
    return <div className="screening-box">
      <h2>UK Opening This Week</h2>
      <ScreeningList data={this.state.data}/>
      <a href="#">See more opening this week >> </a>
      <a href="https://www.imdb.com/calendar/?region=gb"><div className="get-showtimes-button"> Get Showtimes >> </div></a>
    </div>
  }
}

export default ScreeningBox;
