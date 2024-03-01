import Link from 'next/link';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href="/login">Login</Link>
      <Link href="/signup">Signup</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
      <h1 style={{ color : 'red', fontSize : '3em' }} >My Home Page</h1>

      <hr />
      <br />
      <input type="text" />

      <button className='my-btn'>Nice</button>
    </div>
  )
}

export default Home;