'use client'

import React, { useEffect } from 'react'
import ChampionPage from '../../ui/ChampionPage'
import { useState } from 'react';
import {StatsProvider} from '../../hooks/useStats';
import '../styles/calculatorPage.css';

const Page = () => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  const pages = [
    {component: <ChampionPage index={0}/>, label: 'Champion 1' },
    {component: <ChampionPage index={1}/>, label: 'Champion 2' },
    // {component: <ChampionPage index={1}/>, label: 'Stats comparison' },
  ]

  return (
    <div className='calculator-wrap'>
      <StatsProvider>
       <nav>
          {pages.map((page, index) => (
            <button key={index} onClick={() => setActivePageIndex(index)}>
              {page.label}
            </button>
          ))}
        </nav>

        <div className="page-container">
          {pages.map((page, index) => (
            <div
              key={index}
              className={`page ${activePageIndex === index ? 'active' : 'hidden'}`}
            >
              {page.component}
            </div>
          ))}
        </div>
      </StatsProvider>
    </div>
    
  )
}

export default Page