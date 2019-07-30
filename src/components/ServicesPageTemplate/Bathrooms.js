import React from 'react'
import Helmet from 'react-helmet'
import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: "/img/showers/frameless-shower.jpg",
        thumbnail: "img/showers/img/frameless-shower.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        tags: [{value: "Frameless Shower", title: "Frameless Shower"}, {
          value: "Inline", title: "Inline"
        }],
        caption: "Inline Frameless Shower"
},
{
        src: "/img/showers/glass-shower.jpg",
        thumbnail: "/img/showers/glass-shower.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Frameless Shower", title: "Frameless Shower"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "/img/Mirror.jpg",
        thumbnail: "/img/Mirror.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "Mirror"
},
{
        src: "/img/showers/shower-screen.jpeg",
        thumbnail: "/img/showers/shower-screen.jpeg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Glass Shower", title: "Frameless Glass Shower"}, {value: "People", title: "People"}],
        caption: "Frameless Glass Shower Screen"
},
{
        src: "/img/showers/shower.jpg",
        thumbnail: "/img/showers/shower.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Frameless Glass Shower", title: "Frameless Glass Shower"}, {value: "People", title: "People"}],
        caption: "Frameless Glass Shower"
}
]

const Bathrooms = ({
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
      <section className="hero">
        <div>
          <img
            style={{
                maxHeight: '400px',
                width: '100%',
                opacity: '0.5'
            }} 
            src='/img/headers/bathroom-header.png'/>
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
          <h1 className="title has-text-centered">Recent Work</h1>
          <div style={{width: '90%', margin: '0 auto'}}>
              <Gallery images={IMAGES}/>
          </div>
      </section>
    </div>
  )
}

export default Bathrooms
