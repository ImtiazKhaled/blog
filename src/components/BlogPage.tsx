import React, { useEffect } from 'react';
import { Layout, Row, Col } from 'antd'
import '../App.css'
import Links from './Links'
import Picture from './Picture'
import LanguagePicker from './LanguagePicker'
import TextParagraph from './TextParagraph'
import ListParagraph from './ListParagraph'


const Page = (props: any) => {

  const data = require(`../blogs/${props.match.params.blog_id}.json`)

  useEffect(() => {
    document.documentElement.style.setProperty('--link-color', data.theme['link-color'])
    document.documentElement.style.setProperty('--text-color', data.theme['text-color'])
    document.documentElement.style.setProperty('--background-color', data.theme['background-color'])
    document.documentElement.style.setProperty('--link-color-highlight', data.theme['link-color-highlight'])
  },[data])
  
  const GenerateBody = (section : any) => {
    switch(section.type) {
      case 'picture':
        return <Picture {...section.data} />
      case 'text-paragraph':
        return <TextParagraph {...section.data} />
      case 'list-paragraph':
        return <ListParagraph {...section.data} />
      case 'social-links':
        return <Links {...section.data} />
      default:
        return <div />
    }
  }

  return <Layout>

    <Row>
      <Col span={4} className='color-container'>
        {/* color */}
      </Col>
      <Col span={16} className='text add-top'>
        <h2>{data.header}</h2>
      </Col>
      <Col span={4}>
        <LanguagePicker languages={data.languages} />
      </Col>
    </Row>

    <Layout.Content className='text full-page'>
      {
        data.content ? data.content.map( (section: any, index: number) => <div key={index}> {GenerateBody(section)} </div>  ) : <div /> 
      }
    </Layout.Content>

  </Layout>

}

export default Page;
