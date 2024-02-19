import React from 'react'
import Link from 'next/link';
import styles from '../app/styles/navigation.module.css';
import CalculatorLink from '../ui/CalculatorLink';

const Navigation = () => {  

  

  return (
    <nav className={styles.nav}>
      <Link href='/rankings/?rank=diamond&lane=top' className={styles.btn}>
        <button>Champion perfomance statistics</button>
      </Link>

     <CalculatorLink />

      <Link 
        href='https://summerset94.github.io/wrquickmaths/'
        target='_blank'
      >
        <button>Build Calculator (Legacy version)</button>
      </Link>

      <Link
        href='/resources'
      >
        <button>Resources and Sources</button>
      </Link>
      {/* <Link href='/items'>
        <button>Items</button>
      </Link>
      <Link href='/runes'>
        <button>Runes</button>
      </Link> */}
    </nav>
    
  )
}

export default Navigation