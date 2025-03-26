import Link from 'next/link';

export default function Menu() {
    return (
      <div>
        <ul className='flex justify-between p-4 bg-gray-900 border-2 rounded-2xl m-4 border-white-800'>
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