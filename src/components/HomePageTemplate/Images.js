import React from 'react'
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Images = () => (
    <StaticQuery query = {graphql`
        query {
            imageFile: file(relativePath: { eq: "home-image.jpg" }) {
            childImageSharp {
                fluid(maxHeight: 600) {
                ...GatsbyImageSharpFluid
                }
            }
            }
        }
    `} 
        render={data => (
            <div>
                <Img fluid={data.imageFile.childImageSharp.fluid} />
            </div>
        )}
    />
)

export default Images