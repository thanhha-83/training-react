import useEmailValidation from "./useEmailValidation";

function EmailValidatingForm() {
  const { setEmail, count, email, emailValid, setCount } = useEmailValidation(30)
  return (
    <div className="container">
      <div className="content">
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          disabled={count <= 0}
          value={email}
          placeholder="Enter email address"
          type="email"
          name="email"
          required
        />
        <button
          disabled={count <= 0 || !emailValid}
          onClick={() => {
            setCount(0);
            alert(`button clicked with ${email}`)
          }} className="btn btn-primary" type="submit"
        >Press me
        </button>
        <div>
          {count > 0
            ? `You have ${count} seconds to enter your email` : 'Email entered or time expired'
          }
        </div>
      </div>
    </div>
  );
}

export default EmailValidatingForm;