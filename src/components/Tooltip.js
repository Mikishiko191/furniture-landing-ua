import React from 'react'
import styled from 'styled-components'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'

// Icons
import { Information } from './Icons'

const popperOptions = {
    modifiers: {
        addZIndex: {
            enabled: true,
            fn: data => ({
                ...data,
                styles: {
                    ...data.styles,
                    zIndex: 10,
                },
            }),
        },
    },
}

const StyledTooltip = styled.div`
    text-align: left;
    p {
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
        margin: 0;
    }
    h5 {
        font-size: 25px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #000000;
        margin: 0;
        padding-bottom: 14px;
    }
`

const TooltipComponent = ({ children }) => {
    return (
        <Tooltip
            popperOptions={popperOptions}
            html={<StyledTooltip>{children}</StyledTooltip>}
            theme="light"
        >
            <Information />
        </Tooltip>
    )
}

export default TooltipComponent
