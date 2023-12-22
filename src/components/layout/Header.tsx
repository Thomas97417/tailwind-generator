import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-neutral-50 sticky top-0 z-40 w-full border-b">
      <div className="container flex gap-4 h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image src="/assets/images/logo.svg" width={100} height={70} alt="app logo" />
          </div>
        </Link>
        <div className='flex flex-row gap-4'>
          <Link href="/generation">To Generations</Link>
        </div>
      </div>
    </header>
  )
}

export default Header