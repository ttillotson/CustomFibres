import React from 'react';
import AdminHeading from './admin_heading';
import FieldItemContainer from './field_item_container';
import NewFieldItemContainer from './new_field_item_container';
import LoadingIcon from '../../loading_icon';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Splash",
            newField: false
        };
        this.handleSignOut = this.handleSignOut.bind(this);
        this.updateTab = this.updateTab.bind(this);
        this.toggleNewField = this.toggleNewField.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // remove toggle for new FieldSet
        const currentPage = this.props.pages[this.state.currentPage];
        if (currentPage) {

            const currentIds = this.props.pages[this.state.currentPage].fieldIds;
            const newIds = nextProps.pages[this.state.currentPage].fieldIds;
            
            if (currentIds.length !== newIds.length) this.setState({ newField: false });
        }
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

    toggleNewField() {
        this.setState({ newField: true});
    }

    updateTab(e) {
        if (this.state.currentPage !== e.target.textContent ) {
            window.scrollTo(0,0);
            this.setState({ currentPage: e.target.textContent,
                            newField: false });
        }
    }

    render() {
        const { pages, fields, loading, updateField } = this.props;

        if (loading.pageLoading || !Object.values(pages).length ) return <LoadingIcon />;

        // Create Page Tabs
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

        let currentPage = pages[this.state.currentPage];

        // Set Fields for Current Page
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

        // Add Field Logic
        const newFieldItem = <NewFieldItemContainer pageId={currentPage.id} />;

        const addButton = <button onClick={this.toggleNewField}>Add New Field</button>;

        const fieldLogic = this.state.newField ? newFieldItem : addButton ;

        return (
            <main className='dashboard_container'>
                <AdminHeading signOut={this.handleSignOut} />
                <nav>
                    <ul className={'tabs_container'}>
                        {tabs}
                    </ul>
                </nav>
                <section className={'fields_container'}>
                    { fieldItems }
                    { fieldLogic }
                </section>
            </main>
        );
    }
}

export default Dashboard;