import React from 'react';
import AdminHeading from './admin_heading';
import FieldSection from './field_section';
import LoadingIcon from '../../loading_icon';

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
        window.scrollTo(0,0);
        this.props.fetchPages();
    }

    handleSignOut() {
        this.props.signOut().then(() => (
            this.props.history.push('/')
        ));
    }

    updateTab(e) {
        window.scrollTo(0,0);
    }

    render() {
        const { pages, fields, loading, updateField } = this.props;
        // debugger;
        if (loading.pageLoading || !Object.values(pages).length ) return <LoadingIcon />;

        const tabs = Object.values(pages).map((page, idx) => 
            <li key={`key=${idx}`} className='tab'>
                {page.name}
            </li>
        );

        // debugger;
        let currentPage = this.props.pages[this.state.currentPage];

        const fieldItems = currentPage.fieldIds.map(fieldId => {
            let field = fields[fieldId];

            return (
                <FieldSection 
                title={field.title}
                body={field.body}
                id={field.id}
                pageId={currentPage.id}
                updateField={updateField}
                key={`key=${field.id}`}
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
                <section>
                    {fieldItems}
                </section>
            </main>
        );
    }
}

export default Dashboard;