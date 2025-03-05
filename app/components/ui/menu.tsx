import Link from 'next/link'
import React from 'react'

export function Menu() {
    return (
      <div>
        <ul className='flex p-4 bg-blue-900 border-2 rounded-2xl m-4 border-blue-500'>
          <li className='flex p-4 hover:bg-blue-500 rounded-2xl'>
            <Link href="/">Home</Link>
          </li>
          <li className='flex p-4 hover:bg-blue-500 rounded-2xl'>
            <Link href="/cars">Cars</Link>
          </li>
          <li className='flex p-4 hover:bg-blue-500 rounded-2xl'>
            <Link href="/trucks">Trucks</Link>
          </li>
        </ul>
      </div>
    );
  }