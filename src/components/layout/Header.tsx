import Image from 'next/image'
import React from 'react'
import { ThemeToggle } from '../theme/ThemeToggle'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex gap-4 h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/">
          <div className="flex gap-2 items-center">
            <Image src="/assets/images/logo.svg" width={100} height={70} alt="app logo" />
          </div>
        </Link>
        <div className='flex flex-row gap-4'>
          <Link href="/generation">To Generations</Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header