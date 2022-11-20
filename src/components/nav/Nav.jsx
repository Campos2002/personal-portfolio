import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { FaRegHandshake } from 'react-icons/fa'
import { BiMessageSquareDetail } from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>
      <a href="#"><AiOutlineHome /></a>
      <a href="#about"><AiOutlineUser /></a>
      <a href="#experiene"><BiBook /></a>
      <a href="#services"><FaRegHandshake /></a>
      <a href="#contact"><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav;