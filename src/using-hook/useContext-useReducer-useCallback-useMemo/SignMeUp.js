import { useContext, useState } from "react";
import { ConfigContext } from "../../Phase2";

function SignMeUp({ signupCallback }) {
  const [email, setEmail] = useState('');
  const context = useContext(ConfigContext);
  return context.showSignMeUp === false ? null: (
    <div className="container">
      <div>
        <div className="content">
          <input placeholder="Enter email" type="email" name="email" value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          &nbsp;
          <button
            disabled={!email.includes('@')}
            onClick={() => {
              signupCallback(email);
              setEmail('');
              alert('sign up confirmed');
            }}
            className="btn btn-secondary" type="submit"
          >
            Get Updates
          </button>
        </div>
      </div>
    </div>
    )
}

export default SignMeUp;