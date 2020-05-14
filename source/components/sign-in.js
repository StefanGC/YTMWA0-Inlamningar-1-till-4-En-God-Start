import React, { Component } from "react";

export class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            rememberMe: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }


    handleChange(event) {
        const input = event.target;
        const value = input.type === 'checkbox' ? input.checked : input.value;

        this.setState({ [input.name]: value });
    };

    handleFormSubmit() {
        const { user, rememberMe } = this.state;
        localStorage.setItem('rememberMe', rememberMe);
        localStorage.setItem('user', rememberMe ? user : '');
    };

    componentDidMount() {
        const rememberMe = localStorage.getItem('rememberMe') === 'true';
        const user = rememberMe ? localStorage.getItem('user') : '';
        this.setState({ user, rememberMe });
    }

    render() {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    User: <input name="user" value={this.state.user} onChange={this.handleChange} />
                </label>
                <label>
                    <input name="rememberMe" checked={this.state.rememberMe} onChange={this.handleChange} type="checkbox" /> Kom ihåg mig
                </label>
                <button type="submit">Logga in</button>
            </form>
        );
    }
}