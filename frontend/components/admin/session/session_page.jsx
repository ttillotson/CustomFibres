import React from 'react';

class AdminForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
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
                [field]: e.target.value,
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.signIn(this.state);
    }

    renderErrors(){
        if (this.props.errors) {
            return (
                <ul>
                    {this.props.errors.map((error, i) => (
                        <li key={`${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {

        return(
            <form className='admin_session_form'>
                <label>Username
                    <input type='text'
                    value={this.state.user}
                    onChange={this.update('username')}
                    />
                </label>

                <label>Password
                    <input type='password'
                    value={this.state.password}
                    onChange={this.update('password')}/>
                </label>

                <button onClick={this.handleSubmit}>Sign In</button>

                {this.renderErrors()}
            </form>
        );
    }
}

export default AdminForm;