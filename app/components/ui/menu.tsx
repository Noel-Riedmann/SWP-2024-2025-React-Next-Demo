import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/cars">Cars</Link>
            </li>
            <li>
                <Link href="/trucks">Trucks</Link>
            </li>
        </ul>
    </div>
  )
}
