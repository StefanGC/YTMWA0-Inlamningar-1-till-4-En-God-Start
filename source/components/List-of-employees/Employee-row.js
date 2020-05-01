import React from 'react'

export class EmployeeRow extends React.Component {
  render() {
    return(
      <li className="media">
        <div className="media-body">
          <h4>{this.props.name}</h4>
          <p>
            {this.props.title} &nbsp;
            <span className="p-3 mb-2 bg-primary text-white rounded-pill">{this.props.department}</span>
          </p>
        </div>
        <hr/>
      </li>
    )
  }
}