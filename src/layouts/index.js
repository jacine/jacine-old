import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Footer from '../components/Footer'

import './index.scss'

require('prismjs/themes/prism-solarizedlight.css');

const TemplateWrapper = ({ children, data }) => (
  <div>
    <Helmet
      title={` ${data.site.siteMetadata.title} | Jacine Luisi`}
      meta = {[
        { name: 'keywords', content: 'Jacine, Drupal, web development' },
        { name: 'msapplication-TileColor', content: '#603cba' },
        { name: 'theme-color', content: '#ffffff' },
      ]}
      link = {[
        { rel: 'apple-touch-icon', sizes: '180x180', href: require('../../static/apple-touch-icon.png') },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('../../static/favicon-32x32.png') },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('../../static/favicon-16x16.png') },
        { rel: 'mask-icon', color: '#5bbad5', href: require('../../static/safari-pinned-tab.svg') },
      ]}
    />
    <Header />
    <main className="main">
      <div className="container">
        { children() }
      </div>
    </main>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        desc
      }
    }
  }
`;
