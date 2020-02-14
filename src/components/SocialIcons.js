import React from 'react'

// Icons
import { Facebook, Instagram, Gmail } from './Icons'

const SocialIcons = () => {
    return (
        <div className="icons">
            <a
                href="https://www.facebook.com/capitonestylefurniture"
                target="_blank"
            >
                <Facebook />
            </a>
            <a
                href="https://www.instagram.com/capitone_style_furniture/"
                target="_blank"
            >
                <Instagram />
            </a>
            <a href="#!" target="_blank">
                <Gmail />
            </a>
        </div>
    )
}

export default SocialIcons
