import React from 'react';
import AdminHeading from './admin_heading';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // API Calls
    }

    handleSignOut() {
        this.props.signout();
    }

    render() {

        return (
            <main className='dashboard_container'>
                <AdminHeading signOut={this.props.signOut} />
                <h1>DashBoard</h1>

            </main>
        );
    }
}

export default Dashboard;