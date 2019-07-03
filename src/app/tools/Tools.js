import React, { Component } from 'react'
import Links from './Links'

class Tools extends Component {
  render () {
    const links = {
      pat: {
        name: 'PAT',
        link: 'http://127.0.0.3/fah.php?redir=5062&email=boyd@enspark.com&key=EB23ou0ngj'
      }, hpj: {
        name: 'HPJ',
        link: 'http://127.0.0.3/fah.php?redir=5092&email=boyd@enspark.com&key=EB23ou0ngj'
      }, scorecard: {
        name: 'Scorecard',
        link: 'http://127.0.0.3/fah.php?redir=5058&email=boyd@enspark.com&key=EB23ou0ngj'
      }, createHPJ: {
        name: 'create HPJ',
        link: 'http://127.0.0.3/fah.php?redir=5092&email=boyd@enspark.com&key=EB23ou0ngj&create=newset'
      }
    }
    return (
      <div className="container">
        <div className="row">
          <Links links = { links } />
        </div>
      </div>
    )
  }
}

export default Tools