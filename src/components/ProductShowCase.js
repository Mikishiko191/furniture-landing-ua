import React from 'react'
import styled from 'styled-components'

// Components
import Image from '../components/image'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const ProductShowCase = ({ imageValue, onHandleChange }) => {
    return (
        <div>
            <div>
                <Image
                    alt="product"
                    filename={!imageValue ? 'd4.jpg' : imageValue}
                />
            </div>
            <Grid>
                <div onClick={() => onHandleChange('d4.jpg')}>
                    <Image alt="product" filename="d4.jpg" />
                </div>
                <div onClick={() => onHandleChange('IMG_2930.jpg')}>
                    <Image alt="product" filename="IMG_2930.jpg" />
                </div>
            </Grid>
        </div>
    )
}

export default ProductShowCase
