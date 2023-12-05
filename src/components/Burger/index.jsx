import { Transition } from '@headlessui/react';
import { Link as ReactScroll } from 'react-scroll';
import React, { useState } from 'react';
import Link from 'next/link'
import { IconeAberto, IconeFechado } from '../Icones';

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const OpenCloseMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      <div className='lg:hidden z-50 absolute inset-y-0 right-0'>
        <BurguerButton onClick={OpenCloseMenu}>
          <span className='sr-only'>Open main menu</span>
          <BurguerSvG isOpen={isOpen} />
        </BurguerButton>
      </div>
      <BurguerNav isOpen={isOpen}>
        <div className='lg:hidden' id='mobile-menu'>
          <BuguerLink onClick={OpenCloseMenu} />
        </div>
      </BurguerNav>
    </div>
  )
}

const BurguerButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type='button'
      className={`
        inline-flex justify-center items-center
        bg-green-soma  p-2 h-12 w-12 rounded-b-lg
      `}
      aria-controls='mobile-menu'
      aria-expanded='false'
    >
      {children}
    </button>
  )
}

const BurguerItem = ({ children }) => {
  return (
    <div className='hover:scale-110 hover:text-blue-soma inline'>
      {children}
    </div>
  )
}

const BuguerLink = ({ onClick }) => {
  return (
    <div className={`
      flex flex-col px-12 pt-6 h-96 absolute inset-x-0 top-0 z-30 space-y-6
      bg-green-soma shadow-xl text-2xl rounded-b-lg 
    `}>
      <ReactScroll onClick={onClick} to='home' smooth={true}>
        <BurguerItem>Home</BurguerItem>
      </ReactScroll>

      <ReactScroll onClick={onClick} to='about' smooth={true}>
        <BurguerItem>Sobre</BurguerItem>
      </ReactScroll>

      <ReactScroll onClick={onClick} to='services' smooth={true}>
        <BurguerItem> Serviços</BurguerItem>
      </ReactScroll>

      <ReactScroll onClick={onClick} to='clients' smooth={true}>
        <BurguerItem>Clientes</BurguerItem>
      </ReactScroll>

      <ReactScroll onClick={onClick} to='contact' smooth={true}>
        <BurguerItem>Contato</BurguerItem>
      </ReactScroll>

      <Link href='/blog'>
        <a target='_blank'>
          <BurguerItem>Blog</BurguerItem>
        </a>
      </Link>
    </div>
  )
}

const BurguerSvG = ({ isOpen }) => {
  return (
    <div>
      {!isOpen ? <> {IconeAberto} </> : <> {IconeFechado} </>}
    </div>
  )
}

const BurguerNav = ({ children, isOpen }) => {
  return (
    <Transition
      show={isOpen}
      enter='transition ease-out duration-100 transform'
      enterFrom='opacity-0 scale-95'
      enterTo='opacity-100 scale-100'
      leave='transition ease-in duration-75 transform'
      leaveFrom='opacity-100 scale-100'
      leaveTo='opacity-0 scale-95'
    >
      <div className='lg:hidden' id='mobile-menu'>
        <div className={`
          flex flex-col px-12 pt-6 h-96 absolute inset-x-0 top-0 z-30 space-y-6
          bg-green-soma backdrop-blur shadow-xl text-2xl rounded-b-lg
        `}>
          {children}
        </div>
      </div>
    </Transition>
  )
}

export default Burger;
