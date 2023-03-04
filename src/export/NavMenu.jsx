import { useState } from 'react'
import htmlIcon from '../assets/icons/html.png'
import cssIcon from '../assets/icons/hashtag.png'
import jsIcon from '../assets/icons/js.png'
import reactIcon from '../assets/icons/react.png'
import sassIcon from '../assets/icons/sass.png'
const navMenu = [
    {
        index: 1,
        title : 'Home',
        icon : `${htmlIcon}`,
        url : '/',
        linked : true
    },
    {
        index : 2,
        title : 'About',
        icon : `${cssIcon}`,
        url : "/about",
        linked : false
    },
    {
        index:3,
        title : 'Portfolio',
        icon : `${jsIcon}`,
        url : '/portfolio',
        linked : false
    },
    {
        index : 4,
        title : 'Skills',
        icon : `${reactIcon}`,
        url : '/skills',
        linked : false
    },
    {
        index : 5,
        title : 'Contact',
        icon : `${sassIcon}`,
        url : '/contact',
        linked : false
    }
]


export {navMenu}