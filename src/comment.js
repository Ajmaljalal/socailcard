import React from 'react';

class Comment extends React.Component {
  
  render() {
    let comment = this.props.comment;
    return (
      <div className = 'comment'>
        <div className='socialcard-profile'><img src={require('./ajmal.jpg')} alt = 'profile'/></div>
        <div className = 'comment-prof'>
          <h4>Ajmal Jalal</h4>
          <p className = 'comment-text'>{comment}</p>
          </div>
      </div>
    );
  }
}

export default Comment;