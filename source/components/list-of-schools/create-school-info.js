import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { CreateWishSchool } from "./create-wish-list";


export class CreateSchoolInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.handleSaveSchool = this.handleSaveSchool.bind(this);
    }

    handleSaveSchool(event) {
        localStorage.setItem($("#schoolSelect option:selected").text(), $("#citySelect option:selected").text());
        ReactDOM.render(
            <CreateWishSchool />,
            document.getElementById("ChosenSchools")
        );
    }

    componentDidMount(props) {
        fetch("school.json")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            $("#SchoolInfo").attr("style", "visibility: visible");
            return (
                <Fragment>
                    <h5>Steg 3: information om skolan</h5>
                    {items.map(item => (
                        (item.id == this.props.id) ?
                            <Fragment key={item.id}>
                                <br></br>
                                <p>{item.schoolname} är en skola i {$("#citySelect option:selected").text()} och där finns {item.numberofstudents} studenter.</p>
                                <button className="btn btn-info btn-md" onClick={this.handleSaveSchool}>Spara skola</button>
                            </Fragment>
                            : null
                    ))}
                </Fragment>
            );
        }
    }
}

CreateSchoolInfo.propTypes = {
    error: PropTypes.bool,
    isLoaded: PropTypes.bool,
    items: PropTypes.array
}