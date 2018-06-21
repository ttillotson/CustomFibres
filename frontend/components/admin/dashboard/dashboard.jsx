import React from 'react';
import AdminHeading from './admin_heading';
import FieldItemContainer from './field_item_container';
import LoadingIcon from '../../loading_icon';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Splash"
        };
        this.handleSignOut = this.handleSignOut.bind(this);
        this.updateTab = this.updateTab.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchPages();
    }

    handleSignOut() {
        this.props.signOut().then(() => (
            this.props.history.push('/')
        ));
    }

    updateTab(e) {
        if (this.state.currentPage !== e.target.textContent ) {
            window.scrollTo(0,0);
            this.setState({ currentPage: e.target.textContent });
        }
    }

    render() {
        const { pages, fields, loading, updateField } = this.props;

        if (loading.pageLoading || !Object.values(pages).length ) return <LoadingIcon />;

        const tabs = Object.values(pages).map((page, idx) => {
            let klass = 'tab';
            let key = `key=${idx}`;
            if (this.state.currentPage === page.name) klass += " current";

            return (
                <li key={key} 
                    className={klass}
                    onClick={this.updateTab}
                    >
                    {page.name}
                </li>
            );
        });

        let currentPage = this.props.pages[this.state.currentPage];

        const fieldItems = currentPage.fieldIds.map(fieldId => {
            let field = fields[fieldId];

            return (
                <FieldItemContainer 
                pageId={currentPage.id}
                fieldId={field.id}
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