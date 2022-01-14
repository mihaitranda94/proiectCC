import React, { useState } from 'react'
import logoDark from '../img/logo-big-dark.svg'
import i18n from '../i18n.json'

export default function Footer({ lang }) {
  const [labels] = useState(i18n.footer)

  return (
    <footer className='bg-light'>
      <div className='container pb-5'>
        <div className='row justify-content-md-center'>
          <div className='col align-self-center text-left'>
            <img alt='logo' src={logoDark} className='resized-logo' />
            <p className='mt-2'> © 2021 Mihai Trandafirescu & Alexandra Onose & Claudiu Neagu</p>
          </div>
          <div className='col align-self-end'>
            <p className='lead'>{labels.text[lang]}</p>
            <p>
              <span className='badge badge-success'>#TMDb</span> <span className='badge badge-warning'>#trending</span>{' '}
              <span className='badge badge-light'>#ReactJS</span> <span className='badge badge-danger'>#bootstrap</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
