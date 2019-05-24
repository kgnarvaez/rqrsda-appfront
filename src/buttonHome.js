import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

export const ButtonBackToHome = () => (
  <Link
    className='button-home'
    to='/PagePrincipal'>
    Page Principal
  </Link>
)
