import React from 'react'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: "/img/frameless-balustrade.jpg",
        thumbnail: "/img/frameless-balustrade.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "/img/Stair-Balustrade.jpg",
        thumbnail: "/img/Stair-Balustrade.jng",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "/img/Stairwell.jpg",
        thumbnail: "/img/Stairwell.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "/img/outdoor-balustrade.jpg",
        thumbnail: "/img/outdoor-balustrade.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
}
]

const ServicesTemplate = ({
  title,
  heading,
  description,
  offerings,
  meta_title,
  meta_description,
  contentComponent,
  content,
  testimonials,
}) => {
  const PageContent = contentComponent || Content
  return (
    <div>
      <Helmet>
        <title>{meta_title}</title>
        <meta name='description' content={meta_description} />
      </Helmet>
      <section className='hero is-primary is-bold'>
          <div className='hero-body'>
          <div className='container'>
              <div className='columns'>
              <div className='column is-10 is-offset-1'>
                  <div className='section'>
                  <h1 className='title'>
                      Balustrades
                  </h1>
                  </div>
              </div>
              </div>
          </div>
          </div>
      </section>
      <section className='section section--gradient'>
          <div className='container'>
            <div className='columns'>
              <div className='column is-10 is-offset-1'>
                <div className='section'>
                  <PageContent className='content' content={content} />
                </div>
              </div>
            </div>
          </div>
        </section>
      <section>
          <div style={{width: '90%', margin: '0 auto'}}>
              <Gallery images={IMAGES}/>
          </div>
          
      </section>
    </div>
  )
}

export default ServicesTemplate
