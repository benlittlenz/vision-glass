import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'

const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <img 
              src={`/icons/vision-logo.jpg`} 
              width="112" 
              height="60"
              style={{marginLeft: '20px', marginRight: '60px', maxHeight: '5.25rem'}}
            />
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-start'>
            <Link className='navbar-item' style={{color: '#413F44'}} to='/services/bathrooms'>
                            Bathrooms
            </Link>
            <Link className='navbar-item' style={{color: '#413F44'}}to='/services/balustrades'>
                            Balustrades
            </Link>
            <Link className='navbar-item' style={{color: '#413F44'}} to='/services/splashbacks'>
                            Splashbacks
            </Link>
            <Link className='navbar-item' style={{color: '#413F44'}} to='/blog'>
                            Glazing
            </Link>
            <Link className='navbar-item' style={{color: '#413F44'}} to='/blog'>
                            Cat Doors
            </Link>
            <Link className='navbar-item' style={{color: '#413F44'}} to='/about'>
                            About
            </Link>
            <div className='navbar-item'>
              <div className='field is-grouped'>
                <p className='control'>
                  <Link
                    style={{background: '#8C43FF', color: '#fff', fontWeight:'400'}}
                    className='button'
                    to='/contact'>
                            Contact Us
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
