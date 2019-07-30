import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Gallery from '../Gallery'
import Images from './MainImage'
import { Divider } from '../../GlobalStyles'
import {  Container, Button, Contact } from './styles'

const HomePageTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  testimonials
}) => (
  <div>
    <Helmet>
      <title>{meta_title}</title>
      <meta name='description' content={meta_description} />
    </Helmet>
    <Container>
      <Button>Free Measure and Quote</Button>
      <Images />
    </Container>
    <section>
      <h1 className='has-text-weight-semibold is-size-3 has-text-centered'>
        Welcome to Vision Glass
      </h1>
      <div className="columns">
        <div className="column">
          <p 
            style={{
              padding: '50px'
            }}
            className='has-text-centered'>
            We view every kiwi home as a special investment warranting attention to 
            detail in all construction elements and finishings. It's more than just 
            glazing to fit a purpose. It's about adding value and glazing for a quality 
            lifestyle.
          </p>
        </div>
        <div 
          
          className="column">
          <p 
          style={{
            padding: '50px'
          }}
          className='has-text-centered'>
            We handle all types of residential glazing for new home builds, renovations
             and apartments. Our commercial team works exclusively with designers, 
             contractors and architects in storefront, curtain wall systems, canopies, 
             skylights, interior glass partitions and even flooring.
          </p>
        </div>
      </div>
    </section>
    <Divider />
    <section>
    <h1 className='has-text-weight-semibold is-size-3 has-text-centered'>
        Our Recent Projects
    </h1>
    <Gallery />
    </section>
    <Divider />

    <section>
      <Contact>
        <div className="consult">
          <div className="contact-element">
            <h1>Start a project</h1>
          </div>
          <div className="contact-element">
            <p>Thinking about starting a project? Lets talk about it</p>
          </div>
          <div className="contact-element">
          <button>Let's talk</button>
          </div>
          
        </div>       
      </Contact>
    </section>

    <Divider />

    <section className='section section--gradient'>
      <div className='container'>
        <div className='section'>
          <div className='columns'>
            <div className='column is-10 is-offset-1'>
              <div className='content'>
                <div>
                  <h3 className='has-text-weight-semibold is-size-2'>
                    {heading}
                  </h3>
                  <p>{description}</p>
                </div>
                <Offerings gridItems={offerings.blurbs} />
                <h2 className='has-text-weight-semibold is-size-2'>Testimonials</h2>
                <Testimonials testimonials={testimonials} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

HomePageTemplate.propTypes = {
  title: PropTypes.string,
  meta_title: PropTypes.string,
  meta_description: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  offerings: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  testimonials: PropTypes.array,

}

export default HomePageTemplate
