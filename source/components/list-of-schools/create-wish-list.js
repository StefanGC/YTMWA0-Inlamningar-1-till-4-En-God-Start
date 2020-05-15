import React, { Fragment } from 'react'
import PropTypes from 'prop-types';

export class CreateWishSchool extends React.Component {
  constructor(props) {
    super(props);

    this.handleDeleteHistory = this.handleDeleteHistory.bind(this);
  }

  handleDeleteHistory(event) {
    localStorage.clear();
    $("#ChosenSchools").attr("style", "visibility: hidden");
  }

  render() {

    $("#ChosenSchools").attr("style", "visibility: visible");
    var arrayOfItem = [];

    for (let i = 0; i < localStorage.length; i++) {
      (localStorage.key(i) !== 'loglevel:webpack-dev-server' &&
        localStorage.key(i) !== 'user' &&
        localStorage.key(i) !== 'rememberMe') ?
        arrayOfItem.push({ name: localStorage.key(i), city: localStorage.getItem(localStorage.key(i)) })
        : null
    }
    let myTable = (
      <tbody>
        {arrayOfItem.map(item => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    );

    return (

      <Fragment>
        <h5>Skolor jag önskar</h5><br></br>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Skolnamn</th>
                <th>Stad</th>
              </tr>
            </thead>
            {myTable}
          </table>
        </div>
        <button className="btn btn-info btn-md" onClick={this.handleDeleteHistory}>Rensa historik</button>
      </Fragment>
    );
  }
}

CreateWishSchool.propTypes = {
  name: PropTypes.string,
  city: PropTypes.string
}