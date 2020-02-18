import React from 'react'
import Flickity from 'react-flickity-component'

// Components
import ProductImage from './ProductImage'

const flickityOptions = {
    initialIndex: 1,
    lazyLoad: 2,
    groupCells: 1,
    wrapAround: true,
    fullscreen: true,
    pageDots: false,
}

const ProductShowCase = ({ item }) => {
    const [imageValue, setImage] = React.useState()

    const onHandleChangeImage = img => {
        setImage(img)
    }

    return (
        <div style={{ position: 'sticky', top: 100 }}>
            <div onClick={() => onHandleChangeImage(item.image)}>
                <ProductImage
                    alt="product"
                    filename={!imageValue ? item.image : imageValue}
                />
            </div>
            <div>
                <Flickity
                    className={'carousel'} // default ''
                    elementType={'div'} // default 'div'
                    options={flickityOptions} // takes flickity options {}
                    disableImagesLoaded={true} // default false
                    // reloadOnUpdate // default false
                    // static // default false
                >
                    {item.product.map(product => (
                        <div
                            onClick={() => onHandleChangeImage(product.image)}
                            key={product.id}
                        >
                            <ProductImage
                                alt={product.image}
                                filename={product.image}
                                className="product-carousel-image"
                                placeholderClassName="product-carousel-image"
                            />
                        </div>
                    ))}
                </Flickity>
            </div>
        </div>
    )
}

export default ProductShowCase
