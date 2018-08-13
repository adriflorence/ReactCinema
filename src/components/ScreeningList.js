import React, {Component} from 'react';
import Screening from './Screening.js';

const ScreeningList = (props) => {
  const screeningNodes = props.data.map(screening => {
      return(
         <Screening title={screening.title} showtimes={screening.showtimes} key={screening.id}> </Screening>
       );
  })
  return <div className="screening-list"> {screeningNodes} </div>
}

export default ScreeningList;
