import React from 'react'
import './App.css'
import { Layout } from 'antd'
import Links from './components/Links'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import BlogPage from './components/BlogPage'
import HomePage from './components/HomePage' 
import data from './blogs/home_page.json'

const App = () => {
    return <Router>
        <Switch>
            <Route path='/:blog_id' component={BlogPage} />
            <Route path='/' component={HomePage} />
        </Switch>
        
    <Layout.Footer className='text'>
        <Links {...data.social_links.data} />
        © 2020
    </Layout.Footer>
  </Router>
}

export default App