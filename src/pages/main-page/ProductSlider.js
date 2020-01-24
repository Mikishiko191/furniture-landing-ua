import React from 'react'
import styled from 'styled-components'

// Components
import Card from '../../components/Card'

const Section = styled.section`
    margin: 0 auto;
    max-width: 1300px;
    padding: 0 1.0875rem 1.45rem;
`

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 12px;
`

const ProductSlider = () => {
    const onClick = () => {
        console.log('on handle click')
    }
    return (
        <Section>
            <ProductList>
                <Card
                    imageSources="d4.jpg"
                    imageAlt="d4.jpg"
                    title="Двуспальная кровать DAKOTA"
                    content="Материал покрытия: велюр, ортопедическая рамка, большая
                    ниша для вещей, скрытые пластиковые ножки, цвет и размер
                    на выбор"
                    reference="БЕСПЛАТНАЯ ДОСТАВКА В ПОДАРОК!"
                    price="15 500"
                    onHandleClick={onClick}
                />
                <Card
                    imageSources="ODRI_DELUXE_VELOUR007.jpg"
                    imageAlt="ODRI_DELUXE_VELOUR007.jpg"
                    title="Двуспальная кровать EMILIA"
                    content="Материал покрытия: велюр, ортопедическая рамка, большая
                    ниша для вещей, скрытые пластиковые ножки, цвет и размер
                    на выбор"
                    reference="БЕСПЛАТНАЯ ДОСТАВКА В ПОДАРОК!"
                    price="14 900"
                    onHandleClick={onClick}
                />
                <Card
                    imageSources="IMG_2930.jpg"
                    imageAlt="IMG_2930.jpg"
                    title="Двуспальная кровать BRIDGET"
                    content="Материал покрытия: велюр, ортопедическая рамка, большая
                    ниша для вещей, скрытые пластиковые ножки, цвет и размер
                    на выбор"
                    reference="БЕСПЛАТНАЯ ДОСТАВКА В ПОДАРОК!"
                    price="18 000"
                    onHandleClick={onClick}
                />
            </ProductList>
        </Section>
    )
}

export default ProductSlider
