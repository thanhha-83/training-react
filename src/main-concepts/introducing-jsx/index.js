// Nhúng biểu thức hoặc biến vào trong JSX
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Ha',
  lastName: 'Phan',
  avatarUrl: 'https://png.pngtree.com/png-clipart/20201223/ourlarge/pngtree-cute-cartoon-boy-avatar-material-illustration-element-png-png-image_2604806.jpg',
  fbUrl: 'https://www.facebook.com/qinghe83/'
};

export const introducing = (
  <p>
    Hello, {formatName(user)}!
  </p>
);

// Dùng JSX trong if hoặc for
export function getGreeting(user) {
  if (user) {
    return <p>Hello, {formatName(user)}!</p>;
  }
  return <p>Hello, Stranger.</p>;
}

// Chỉ định thuộc tính với JSX
export const avatar = <img className="avatar" src={user.avatarUrl} alt='avt'></img>;
export const facebook = <a href={user.fbUrl} target="_blank" rel="noopener noreferrer">Xem trang cá nhân facebook</a>;