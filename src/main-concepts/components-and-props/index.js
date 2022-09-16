import React from 'react';

// Function component
export function WelcomeFunc(props) {
  return <p>Hello, {props.name}</p>;
}

// Class component
export class WelcomeCls extends React.Component {
  render() {
    return <p>Hello, {this.props.name}</p>;
  }
}


// Chia nhỏ component để dùng lại, nhúng component trong component
function formatDate(date) {
  return date.toLocaleDateString();
}

function Avatar(props) {
  return (
    <img className='avatar' src={props.user.avatarUrl} alt={props.user.name}/>
  );
}

function UserInfo(props) {
  return (
    <div className='userInfo'>
      <Avatar user={props.user} />
      <div className='userInfo-name'>
        {props.user.name}
      </div>
    </div>
  );
}

export function Comment(props) {
  return (
    <div className='comment'>
      <UserInfo user={props.author} />
      <div className='comment-text'>
        {props.text}
      </div>
      <div className='comment-date'>
        {formatDate(props.date)}
      </div>
    </div>
  );
}