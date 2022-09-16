import './App.css'

// Ví dụ phần main concepts
import { introducing, getGreeting, avatar, facebook } from './main-concepts/introducing-jsx'
import { WelcomeFunc, WelcomeCls, Comment } from './main-concepts/components-and-props'
import { ClockCls } from './main-concepts/state-and-lifecycle';
import { Form, Toggle } from './main-concepts/handling-events';
import { Greeting, LoginControl, Mailbox, LoginState, Page } from './main-concepts/conditional-rendering';
import { NumberList, NumberListV2 } from './main-concepts/lists-and-keys';
import { NameForm, EssayForm, FlavorForm, Reservation } from './main-concepts/forms';
import Calculator from './main-concepts/lifting-state-up/Calculator';
import SignUpDialog from './main-concepts/composition-vs-inheritance/SignUpDialog';

// Ví dụ trong khóa học trên phluralsight
import { Challenge1, OneWayDataFlow } from './phluralsight/the-basic';
import GithubCardApp from './phluralsight/the-github-card-app/GithubCardApp';
import StarMatch from './phluralsight/the-star-match-game/StarMatch';

function App() {
  const user = {
    text: 'Hello ReactJS',
    date: new Date(),
    author: {
      name: 'Ha',
      avatarUrl: 'https://png.pngtree.com/png-clipart/20201223/ourlarge/pngtree-cute-cartoon-boy-avatar-material-illustration-element-png-png-image_2604806.jpg'
    }
  };

  return (
    <>
      <h1 className='text-center'>Training ReactJS</h1>
      <section className='main-concepts'>
        <h2>I. Ví dụ trong main concepts</h2>

        <h3>2. Introduing JSX</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>a/ Nhúng biểu thức hoặc biến vào trong JSX</h4>
          {introducing}

          <h4 className='bg-cyan'>b/ Dùng JSX trong if hoặc for</h4>
          {getGreeting()}
          {getGreeting({firstName: 'Ha', lastName: 'Phan'})}

          <h4 className='bg-cyan'>c/ Chỉ định thuộc tính với JSX</h4>
          {avatar}
          {facebook}
        </div>

        <h3>4. Components and Props</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>a/ Function component</h4>
          <WelcomeFunc name='Phan Thanh Ha' />

          <h4 className='bg-cyan'>b/ Class component</h4>
          <WelcomeCls name='Ha Thanh Phan' />

          <h4 className='bg-cyan'>c/ Chia nhỏ component để dùng lại, nhúng component trong component</h4>
          <Comment {...user} />
        </div>

        <h3>5. State and Lifecycle</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>Đồng hồ với class component + local state + lifecycle methods</h4>
          <ClockCls />
        </div>

        <h3>6. Handling Events</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>a/ Không thể dùng <i>return false</i> găn chặn hành vi mặc định của element, phải dùng <i>preventDefault</i></h4>
          <Form />

          <h4 className='bg-cyan'>b/ Tạo một button toggle 2 trạng thái ON/OFF</h4>
          <Toggle />
        </div>

        <h3>7. Conditional Rendering</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>a/ Dùng mệnh đề if để quyết định component nào được render</h4>
          <Greeting isLoggedIn={false} />
          <Greeting isLoggedIn={true} />

          <h4 className='bg-cyan'>b/ Element variables: Component được render dựa trên trạng thái hiện tại</h4>
          <LoginControl />

          <h4 className='bg-cyan'>c/ Inline If with Logical &amp;&amp; Operator</h4>
          <Mailbox unreadMessages={['React', 'Re: React', 'Re:Re: React']} />
          <Mailbox unreadMessages={['React']} />

          <h4 className='bg-cyan'>d/ Inline If-Else with Conditional Operator</h4>
          <LoginState isLoggedIn={true} />
          <LoginState isLoggedIn={false} />

          <h4 className='bg-cyan'>e/ Preventing Component from Rendering</h4>
          <Page />
        </div>

        <h3>8. Lists and Keys</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>a/ Basic List Component</h4>
          <NumberList numbers={['08', '03', '2000']} />

          <h4 className='bg-cyan'>b/ Keys: giúp React nhận định item nào thay đổi, được thêm hay xóa đi</h4>
          <h4 className='bg-cyan'>c/ Keys: phải là duy nhất</h4>
          <NumberListV2 numbers={['08', '03', '2000']} />
        </div>

        <h3>9. Forms</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>a/ Input Tag</h4>
          <NameForm />

          <h4 className='bg-cyan'>b/ Textarea Tag</h4>
          <EssayForm />

          <h4 className='bg-cyan'>c/ Select Tag</h4>
          <FlavorForm />

          <h4 className='bg-cyan'>d/ Handling Multiple Inputs</h4>
          <Reservation />
        </div>

        <h3>10. Lifting State Up</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>Máy tính chuyển đổi đơn vị nhiệt độ</h4>
          <Calculator />
        </div>

        <h3>11. Composition vs Inheritance</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>Thông báo đăng nhập</h4>
          <SignUpDialog />
        </div>
      </section>
      <section className='phluralsight'>
        <h2>II. Bài tập trong khóa ReactJS phluralsight</h2>

        <h3>1. The Basics</h3>
        <div className='wrapper-box'>
          <h4 className='bg-cyan'>a/ Challenge 1: Button bắt đầu với 5, click thì double giá trị</h4>
          <Challenge1 />

          <h4 className='bg-cyan'>b/ One-way Data Flow + Components Reusability</h4>
          <OneWayDataFlow />

          <div className='bg-cyan'>
            <h4>Tổng kết</h4>
            <ul>
              <li>Components and Reactive Updates</li>
              <li>Virtual DOM nodes and JSX</li>
              <li>Props and State
                <ul>
                  <li>{'(props) => {}'}</li>
                  <li>{'[val, setVal] = useState(initialVal)'}</li>
                  <li>Immutable props, Mutable state</li>
                </ul>
              </li>
              <li>ReactDOM.render
                <ul>
                  <li>{'<Component />'}</li>
                  <li>DOM node</li>
                </ul>
              </li>
              <li>React Events (onClick, onSubmit...)</li>
              <li>Function and Class Component</li>
            </ul>
          </div>
        
        </div>

        <h3>2. The Github Card App</h3>
        <div className='wrapper-box'>
        <GithubCardApp />
        </div>

        <h3>3. The Star Match Game</h3>
        <div className='wrapper-box'>
        <StarMatch />
        </div>

      </section>
    </>
  );
}

export default App;
