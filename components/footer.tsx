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

      <div className="flex justify-end">
        <Button
          variant={'ghost'}
          size={'icon'}
          className="text-muted-foreground/50 rounded-full hover:shadow-lg"
        >
          
        </Button>
      </div>


    </footer>
  )
}

export default Footer
