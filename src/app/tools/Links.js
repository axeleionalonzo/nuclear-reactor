import React from 'react'

const Links = tool => {
  const tools = tool.links;
  return (
    <div className="container">
      <div class="row">
        <div className="input-group col-sm">
          <a className="btn btn-outline-primary" href={tools.pat.link} role="button">{tools.pat.name}</a>
          <a className="btn btn-outline-success" href={tools.hpj.link} role="button">{tools.hpj.name}</a>
          <a className="btn btn-outline-danger" href={tools.scorecard.link} role="button">{tools.scorecard.name}</a>
        </div>
        
        <div className="input-group col-sm">
          <input type="text" className="form-control" placeholder="Create new Journal" aria-label="Journal" aria-describedby="button-addon2" />
          <div className="input-group-append">
            <a className="btn btn-outline-success" href={tools.createHPJ.link} role="button">{tools.createHPJ.name}</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links