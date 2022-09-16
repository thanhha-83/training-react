// Tạo một đồng hồ component tự động cập nhật sau mỗi giây
import React from 'react'

// Sử dụng function component + setInterval => Nhược điểm: phải update lại toàn bộ UI mỗi giây
// const root = ReactDOM.createRoot(document.getElementById('root'));
// export function ClockFunc(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// function tick() {
//   root.render(<ClockFunc date={new Date()} />);
// }
// setInterval(tick, 1000);

// Sử dụng class component + local state + lifecycle methods
export class ClockCls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}