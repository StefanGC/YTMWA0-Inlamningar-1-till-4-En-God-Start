import React from 'react'
import { EmployeeRow } from './Employee-row'

export class EmployeeList extends React.Component {
  render() {
    return (
      <ul className="media-list">
        {
          this.props.listado.map((empleado) => {
            return <EmployeeRow key={ empleado.id }
                                name={ empleado.fullName }
                                title={ empleado.title }
                                department={ empleado.department } />
          })
        }
      </ul>
    )
  }
}