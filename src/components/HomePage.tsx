import React, { useEffect } from 'react'
import { Typography } from 'antd'
import BlogCard from './BlogCard'
import data from '../blogs/home_page.json'

const HomePage = () => {

    useEffect(() => {
        document.documentElement.style.setProperty('--link-color', data.theme['link-color'])
        document.documentElement.style.setProperty('--text-color', data.theme['text-color'])
        document.documentElement.style.setProperty('--background-color', data.theme['background-color'])
        document.documentElement.style.setProperty('--link-color-highlight', data.theme['link-color-highlight'])
    },[])

    return <div className='full-page'>
        <Typography.Title level={3}> {data.header} </Typography.Title>
        {
            data.blogs.map( (blog) => <BlogCard key={blog} blog={blog} /> )
        }
    </div>
}

export default HomePage