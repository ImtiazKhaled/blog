import React from 'react'
import { Avatar, Card } from 'antd'
import { Link } from 'react-router-dom'
import { EyeOutlined, LikeOutlined } from '@ant-design/icons';


const BlogCard = (props: any) => {
 
    const blog = props.blog

    return <div style={{width: '350px'}}>
        <Link to={`/${blog.id}`}>
            <Card
                hoverable
                cover={<img alt={blog.id} src={blog.img_src} />}
            >
                <Card.Meta
                    avatar={<Avatar size={65} src={blog.author_img} />}
                    title={blog.name}
                    description={`by ${blog.author} | ${blog.read_time} Min Read`}
                />
            </Card>
        </Link>
    </div>
}

export default BlogCard