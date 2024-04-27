import React from 'react'

export const ForgetPassword = () => {
  return (
    <>
    <img src="https://hrcdn.net/fcore/assets/brand/hr-logo-cursor-new-black-green-5f27ef11b8.svg" alt="logo" />
    <div>ForgetPassword</div>
    <p>No Problem! Enter your email or username below and we will send you an email with instructions to reset your password.</p>
    <form action="">
      <input type="text" placeholder='Email or Username' /><br/>
      <input type="checkbox"  />
      <p>I'm not a robot</p>
      <button>Send Reset Link</button>
    </form>
    </>
  )
}
