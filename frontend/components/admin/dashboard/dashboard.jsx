import React from 'react';
import AdminHeading from './admin_heading';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentDidMount() {
        // API Calls
    }

    handleSignOut() {
        // console.log(this.props.history);
        // debugger;
        this.props.signOut().then(() => (
            this.props.history.push('/')
        ));
    }

    render() {

        return (
            <main className='dashboard_container'>
                <AdminHeading signOut={this.handleSignOut} />
                <h1>DashBoard</h1>

            </main>
        );
    }
}

export default Dashboard;