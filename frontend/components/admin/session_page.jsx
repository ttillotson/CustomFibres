import React from 'react';

class AdminForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillUnmount(){
        this.props.clearErrors([]);
    }

    update(field){
        return (e) => {
            this.setState({
                field: e.target.value,
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    renderErrors(){

    }

    render() {

        return(
            <form>
                <label>Username
                    <input type='text'
                    value={this.state.user}
                    onChange={this.update('user')}
                    />
                </label>

                <label>Password
                    <input type='password' />
                </label>
            </form>
        );
    }
}