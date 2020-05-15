import React, { Fragment } from 'react'
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';
import { CreateSchoolInfo } from "./create-school-info";


export class CreateSchoolMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.handleShowSchoolInfo = this.handleShowSchoolInfo.bind(this);
    }

    handleShowSchoolInfo(event) {
        ReactDOM.render(
            <CreateSchoolInfo id={$('#schoolSelect').val()} />,
            document.getElementById("SchoolInfo")
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
            $("#Schools").attr("style", "visibility: visible");
            $("#SchoolInfo").attr("style", "visibility: hidden");
            return (
                <Fragment>
                    <h5>Steg 2: väjl en skol</h5>
                    <select id="schoolSelect" defaultValue={'0'} onChange={this.handleShowSchoolInfo} >
                        <option key="0" value="0" disabled="disabled">Välj en skol</option>
                        {items.map(item => (
                            (item.cityid == this.props.cityId) ?
                                <option key={item.id} value={item.id}>{item.schoolname}</option>
                                : null
                        ))}
                    </select>
                </Fragment>
            );
        }
    }
}

CreateSchoolMenu.propTypes = {
    error: PropTypes.bool,
    isLoaded: PropTypes.bool,
    items: PropTypes.array
}