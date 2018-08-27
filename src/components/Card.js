import React from 'react'
import styled from 'styled-components'

const Card = ({listingData, btnType}) => {

  const Card = styled.div`
    border: 1px solid grey;
    box-shadow: 3px 3px 3px grey;
    margin: 20px 0;
  `

  const Title = styled.div`
    background-color: ${listingData.agency.brandingColors.primary};
  `

  const MainImage = styled.img`

  `

  const Price = styled.h2`

  `

  const Button = styled.button`
    border: 1px solid ${btnType='add' ? 'green' : 'red'}
  `

  return (
    <Card>
      <Title><img src={listingData.agency.logo} alt='logo'/></Title>
      <MainImage src={listingData.mainImage}></MainImage>
      <Price>{listingData.price}</Price>
      <Button>{btnType}</Button>
    </Card>
  )
}

export default Card;
