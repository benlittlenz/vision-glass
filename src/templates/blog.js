import React, {Component} from 'react'
import {Link} from 'gatsby'
import config from '../../config'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'

import Gallery from 'react-grid-gallery';
 
const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "Boats (Jeshu John - designerspics.com)"
},
 
{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 320,
        thumbnailHeight: 212
}]

export default class BlogPage extends Component {
  render () {
    const {pageContext} = this.props
    const {group, index, first, last} = pageContext
    const previousUrl = index - 1 === 1 ? '' : (index - 1).toString()
    const nextUrl = (index + 1).toString() + '/'

    const websiteSchemaOrgJSONLD = {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: config.siteUrl,
      name: config.siteTitle,
      alternateName: config.siteTitleAlt ? config.siteTitleAlt : '',
    }

    return (
      <Layout>
        <Helmet>
          <title>Blog | Gatsby Starter Business</title>
          {/* Schema.org tags */}
          <script type='application/ld+json'>
            {JSON.stringify(websiteSchemaOrgJSONLD)}
          </script>
        </Helmet>
        <section className='hero is-primary is-bold'>
          <div className='hero-body'>
            <div className='container'>
              <div className='columns'>
                <div className='column is-10 is-offset-1'>
                  <div className='section'>
                    <h1 className='title'>
                      Blog
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Gallery images={IMAGES}/>
        </section>
      </Layout>
    )
  }
}
