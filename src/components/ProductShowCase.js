import React from 'react'
import styled from 'styled-components'

// Components
import Image from './Image'

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`

const ProductShowCase = ({ item }) => {
    const [imageValue, setImage] = React.useState()

    const onHandleChangeImage = img => {
        setImage(img)
    }

    return (
        <div style={{ position: 'sticky', top: 100 }}>
            <div onClick={() => onHandleChangeImage(item.image)}>
                <Image
                    alt="product"
                    filename={!imageValue ? item.image : imageValue}
                />
            </div>
            <Grid>
                {item.product.map(product => (
                    <div
                        onClick={() => onHandleChangeImage(product.image)}
                        key={product.id}
                    >
                        <Image alt="product" filename={product.image} />
                    </div>
                ))}
            </Grid>
        </div>
    )
}

export default ProductShowCase
