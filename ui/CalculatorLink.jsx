'use client'

import React, { useEffect } from 'react'
import Link from 'next/link';
import useStorage from '../hooks/UseStorage';

const CalculatorLink = () => {
  const { setItem, getItem } = useStorage();
  

  const calculatorHref = () => {  
    return `/calculator?champ1=${getItem('champion1') ? getItem('champion1') : '10666'}&champ2=${getItem('champion2') ? getItem('champion2') : '10666'}`
  }


  return (
    <Link href={calculatorHref()}>
      <button>Build Calculator</button>
    </Link>
  )
}

export default CalculatorLink