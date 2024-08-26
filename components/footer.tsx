import React from 'react'
import Link from 'next/link'
import { SiDiscord, SiGithub, SiTwitter } from 'react-icons/si'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toggle'

const Footer: React.FC = () => {
  return (
    <footer className="w-full p-1 md:p-2 fixed bottom-0 right-0">

      <div className="flex float-left">
        <ModeToggle />
      </div>

      <div className="flex justify-end mr-2">
        <Link href="https://buy.stripe.com/cN26sl4B3eBu4Fy00g" target="_blank" className="text-stone-400 hover:text-stone-700 visited:hidden text-sm">
        Invite me for a <span className="text-xl">🍺</span>
        </Link>
      </div>


    </footer>
  )
}

export default Footer
