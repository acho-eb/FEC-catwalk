import React, { useState } from 'react';
import {
  empty,
  quarter,
  half,
  threeQuarter,
  full
} from './Stars/starsIndex.js';
/////////////////////////////////////////////////
//INPUTS
//takes in either single rating as props.rating
// <StarRating rating={4} />
//
//or meta rating object as props.meta
//<StarRating meta={{
// 5: 17,
// 4: 10,
// 3: 4,
// ...
// }}/>
/////////////////////////////////////////////////
const StarRating = (props) => {
  if (props.rating) {
    var rating = props.rating;
  } else if (props.meta) {
    var netRating = 0;
    var nRatings = 0;
    for (var key in props.meta) {
      var ratingValue = parseInt(key);
      netRating += parseInt(key) * parseInt(props.meta[key]);
      nRatings += parseInt(props.meta[key]);
    }
    var rating = netRating / nRatings;
  } else {
    var rating = 0;
  }
  var stars = [];
  var fraction = (rating % 1).toFixed(2)
  //set full stars to be rendered
  for(var i = 1; i <= rating; i++) {
    stars.push({img: full, testid: 'full'})
  }
  //set the one factional star if needed
  if(fraction >= .75) {
    stars.push({img: threeQuarter, testid: 'threeQuarter'});
  } else if (fraction >= .5) {
    stars.push({img: half, testid: 'half'});
  } else if (fraction >= .25) {
    stars.push({img: quarter, testid: 'quarter'});
  }
  //set remaining stars to be empty
  while(stars.length < 5) {
    stars.push({img: empty, testid: 'empty'});
  }
  return (
    <div data-testid='starRating'>
      <img src={stars[0].img} className='star' data-testid={stars[0].testid}/>
      <img src={stars[1].img} className='star' data-testid={stars[1].testid}/>
      <img src={stars[2].img} className='star' data-testid={stars[2].testid}/>
      <img src={stars[3].img} className='star' data-testid={stars[3].testid}/>
      <img src={stars[4].img} className='star' data-testid={stars[4].testid}/>
    </div>
  )
}

export default StarRating;