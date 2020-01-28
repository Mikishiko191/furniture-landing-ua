import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components'

// Components
import MainFrom from './MainForm'

const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
`

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

Modal.setAppElement('#___gatsby')

const ModalComponent = ({ modalIsOpen, onHandelCloseModal }) => {
    return (
        <Modal
            isOpen={modalIsOpen}
            //   onAfterOpen={afterOpenModal}
            onRequestClose={onHandelCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div style={{ position: 'relative', padding: '30px 30px 0 30px' }}>
                <CloseButton onClick={onHandelCloseModal}>
                    <svg
                        height="30"
                        viewBox="0 0 413.348 413.348"
                        width="30"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" />
                    </svg>
                </CloseButton>
                <MainFrom isModal />
                <p
                    style={{
                        fontSize: 16,
                        fontWeight: 300,
                        lineHeight: 'normal',
                    }}
                >
                    После оформления заказа, с вами свяжется оператор: уточнит
                    адрес доставки. <br /> После подтверждения заказа и оплаты
                    50% стоимости товара мебель отправляется <br /> к вам по
                    указанному адресу в течении 3-х рабочих дней. По факту
                    отправки Вы <br />
                    получаете фото ТТН.
                </p>
            </div>
        </Modal>
    )
}

export default ModalComponent
