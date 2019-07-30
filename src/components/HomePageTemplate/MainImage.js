import React from 'react'
import Img from "gatsby-image"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
const StyledImage = styled(Img)`
  position: relative;
  z-index: 1;
`

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
                <StyledImage fluid={data.imageFile.childImageSharp.fluid} />
            </div>
        )}
    />
)

export default Images