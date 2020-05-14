import React, { Fragment } from 'react';
import ReactDOM from "react-dom";
import { CreateSchoolMenu } from "./create-school-menu";

export class CreateCitiesMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        this.handleShowSchoolMenu = this.handleShowSchoolMenu.bind(this);
    }

    handleShowSchoolMenu(event) {
        ReactDOM.render(
            <CreateSchoolMenu cityId={$('#citySelect').val()} />,
            document.getElementById("Schools")
        );
    }

    componentDidMount() {
        fetch("cities.json")
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
            return (
                <Fragment>
                    <h5>Steg 1: väjl en stad</h5>
                    <select id="citySelect" defaultValue={'0'} onChange={this.handleShowSchoolMenu}>
                        <option key="0" value="0" disabled="disabled">Välj en stad</option>
                        {items.map(item => (
                            <option key={item.id} value={item.id}>{item.stadname}</option>
                        ))}
                    </select>
                </Fragment>
            );
        }
    }
}

