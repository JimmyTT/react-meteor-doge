import React from 'react';
import RankFeedItem from './RankFeedItem.jsx'

export default class RankFeed extends React.Component {

  /*
    Render based on API call for top 20 profiles
    store in array and pass using loop props to each instance 
    of RankFeedItem [Img, Rank #, Name, pos]
  */
  render () {
    return (
    <ul className="collection">
        <RankFeedItem />   
        <RankFeedItem />
        <RankFeedItem />
        <RankFeedItem />
        <RankFeedItem />
        <RankFeedItem />
        <RankFeedItem />
        <RankFeedItem />
        <RankFeedItem />
        <RankFeedItem />
        <RankFeedItem />
      </ul>
    );
  }
}
