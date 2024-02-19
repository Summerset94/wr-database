import React from 'react';
import Link from 'next/link';

const Homebutton = () => {
  return (
    <Link href='/'>
      <button>Go to home page</button>
    </Link>
  )
}

export default Homebutton