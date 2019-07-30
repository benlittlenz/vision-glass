import React from 'react'
import styled from "styled-components"
import Helmet from 'react-helmet'
import Offerings from '../Offerings'
import Testimonials from '../Testimonials'
import PropTypes from 'prop-types'
import Gallery from '../Gallery'
import Images from './Images'

const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
`

const Button = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 60%;
  padding: 20px 10px 20px 10px;
  color: #fff;
  font-size: 28px;
  font-weight: 400;
  text-transform: uppercase;
  z-index: 10;
  outline: none;
  background: #8C43FF;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #8C43FF;
  }
`

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
