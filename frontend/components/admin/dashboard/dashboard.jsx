import React from 'react';
import AdminHeading from './admin_heading';
import FieldSection from './field_section';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Splash"
        };
        this.handleSignOut = this.handleSignOut.bind(this);
    }

    componentDidMount() {
        // API Calls
        this.props.fetchPages();
    }

    handleSignOut() {
        this.props.signOut().then(() => (
            this.props.history.push('/')
        ));
    }

    render() {
        const { pages, fields } = this.props;

        const tabs = pages.map(page => 
            <li>
                {page.name}
            </li>
        );

        const fieldItems = this.props.pages[this.state.currentPage].fieldItems.map(fieldId => {
            let field = fields[fieldId];
            return (
                <FieldSection 
                title={field.title}
                body={field.body}
                />
            );
        });

        return (
            <main className='dashboard_container'>
                <AdminHeading signOut={this.handleSignOut} />
                <h1>DashBoard</h1>
                <nav>
                    <ul>
                        {tabs}
                    </ul>
                </nav>
                {fields}
            </main>
        );
    }
}

export default Dashboard;