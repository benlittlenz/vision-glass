import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <>
      <div className="is-divider" />
      <footer className='footer'>
        <div className='container'>
          <div className='content has-text-centered'>
            <p>
              {config.copyright}
            </p>
            <p>Powered by <a href='https://www.nextsky.co.nz'>Nextsky</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
