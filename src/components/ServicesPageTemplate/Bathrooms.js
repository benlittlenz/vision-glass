import React from 'react'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: "/img/frameless-shower.jpg",
        thumbnail: "/img/frameless-shower.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "/img/glass-shower.jpg",
        thumbnail: "/img/glass-shower.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "/img/Mirror.jpg",
        thumbnail: "/img/Mirror.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
},
{
        src: "/img/shower-screen.jpeg",
        thumbnail: "/img/shower-screen.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Glass Shower", title: "Frameless Glass Shower"}, {value: "People", title: "People"}],
        caption: "Frameless Glass Shower Screen"
},
{
        src: "/img/shower.jpg",
        thumbnail: "/img/shower.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Frameless Glass Shower", title: "Frameless Glass Shower"}, {value: "People", title: "People"}],
        caption: "Frameless Glass Shower"
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
