import React from 'react'
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Gallery from '../Gallery'
import Images from './Images'

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
    <section>
      <Images />
    </section>

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
            Established in Howick in 1993, Haynes Glass is a full service glass, 
            glazing and glass hardware company. Through innovation, hard work and 
            dedication, Haynes Glass has grown into a glazing company capable of 
            undertaking both small and large scale projects. We are proud to efficiently 
            service the Greater Auckland region.
            We handle all types of residential glazing for new home builds, renovations
             and apartments. Our commercial team works exclusively with designers, 
             contractors and architects in storefront, curtain wall systems, canopies, 
             skylights, interior glass partitions and even flooring.
          </p>
        </div>
      </div>
    </section>

    <Gallery />

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
