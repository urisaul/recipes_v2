import * as React from 'react';


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <input name='firstname' />
        <input name='lastname' />
        <input name='email' type='email' />
        <input name='password' type='password' />
        <input name='password_confirmation' type='password' />
    </form>
  );
}