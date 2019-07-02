import React, { Component } from 'react'

class Tools extends Component {
  render () {
    // links
    const tools = {
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
          <div className="col-sm">
            <a className="btn btn-outline-primary" href={tools.pat.link} role="button">{tools.pat.name}</a>
            <a className="btn btn-outline-success" href={tools.hpj.link} role="button">{tools.hpj.name}</a>
            <a className="btn btn-outline-danger" href={tools.scorecard.link} role="button">{tools.scorecard.name}</a>
            <a className="btn btn-outline-success" href={tools.createHPJ.link} role="button">{tools.createHPJ.name}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Tools