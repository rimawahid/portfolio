import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GrIcons from 'react-icons/gr'

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon:<AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon:<IoIcons.IoMdContact/>,
        cName: 'nav-text'
    },
    {
        title: 'Project',
        path: '/project',
        icon:<AiIcons.AiFillProject/>,
        cName: 'nav-text'
    },
    {
        title: 'Blog',
        path: '/blog',
        icon:<FaIcons.FaBlog/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon:<IoIcons.IoMdContact/>,
        cName: 'nav-text'
    },
    {
        title: 'Resume',
        path: '/resume',
        icon:<FaIcons.FaDownload/>,
        cName: 'nav-text'
    },
]