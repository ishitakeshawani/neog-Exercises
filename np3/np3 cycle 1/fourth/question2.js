// Make a form, which will take the following 3 inputs from the user,  name, email, and mobile number
// And the form will have a save button at the end.

// When the user completes the form, the user should be able to save it.
// After saving data, **show a success message.**

// After data is submitted input fields should be disabled.

// Then, Besides every field, there should be an edit button, which allows users to edit the field and save it.
// https://codesandbox.io/s/reverent-fire-4dsy5i?file=/src/eightth.js


import { React, useState } from "react";

export const EightTh = () => {
  const [name, setName] = useState({ name: "", disable: false });
  const [email, setEmail] = useState({ email: "", disable: false });
  const [mobile, setMobile] = useState({ mobile: "", disable: false });
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(false);
    setName({ name: name.name, disable: true });
    setEmail({ email: email.email, disable: true });
    setMobile({ mobile: mobile.mobile, disable: true });
    setShow(true);
  };

  return (
    <div>
      <label>name</label>
      <input
        disabled={name.disable}
        value={name.name}
        onChange={(e) => setName({ name: e.target.value })}
      />
      <button onClick={() => setName((prev) => ({ ...prev, disable: false }))}>
        edit
      </button>
      <br />
      <label>email</label>
      <input
        disabled={email.disable}
        value={email.email}
        onChange={(e) => setEmail({ email: e.target.value })}
      />{" "}
      <button onClick={() => setEmail((prev) => ({ ...prev, disable: false }))}>
        edit
      </button>
      <br />
      <label>mobile</label>
      <input
        disabled={mobile.disable}
        value={mobile.mobile}
        onChange={(e) => setMobile({ mobile: e.target.value })}
      />{" "}
      <button
        onClick={() => setMobile((prev) => ({ ...prev, disable: false }))}
      >
        edit
      </button>
      <br />
      <button onClick={() => clickHandler()}>submit</button>
      {show && (
        <div>
          <p>{name.name}</p>
          <p>{email.email}</p>
          <p>{mobile.mobile}</p>
        </div>
      )}
    </div>
  );
};
