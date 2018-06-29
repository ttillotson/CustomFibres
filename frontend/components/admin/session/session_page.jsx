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
                <ul className='errors'>
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
            <section className ='admin_session_container'>
                <form className='admin_session_form'>
                    
                    <label>Username</label>
                    <input type='text'
                    value={this.state.user}
                    onChange={this.update('username')}
                    />

                    <label>Password</label>
                    <input type='password'
                    value={this.state.password}
                    onChange={this.update('password')}/>
                    
                    <section>
                        <button onClick={this.handleSubmit}>Sign In</button>
                    </section>

                    {this.renderErrors()}
                </form>
            </section>
        );
    }
}

export default AdminForm;