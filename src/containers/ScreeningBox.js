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
          showtimes: ["14:50", "17:30", "18:30", "20:00", "22:45"]
        },
        {
          id: 2,
          title: "Cafe Society",
          showtimes: ["17:30", "19:15", "21:00", "21:45"]
        },
        {
          id: 3,
          title: "Morgan",
          showtimes: ["17:30", "20:00", "22:45"]
        },
        {
          id: 4,
          title: "The 9th Life of Louis Drax",
          showtimes: ["17:30", "20:00", "22:45"]
        },
        {
          id: 5,
          title: "Naam Hai Akira",
          showtimes: ["17:30", "18:45", "20:00", "22:45"]
        },
        {
          id: 6,
          title: "Equity",
          showtimes: ["17:30", "20:00", "22:45"]
        },
        {
          id: 7,
          title: "Things To Come",
          showtimes: ["16:00", "17:30", "20:00", "22:45"]
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
