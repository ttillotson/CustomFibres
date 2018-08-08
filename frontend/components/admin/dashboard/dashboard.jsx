import React from 'react';
import AdminHeading from './admin_heading';
import FieldItemContainer from './field_item_container';
import NewFieldItemContainer from './new_field_item_container';
import LoadingIcon from '../../shared/loading_icon';
import PageGallery from './page_gallery';
import PageTitle from './page_title';
import * as styledComponents from './shared_styled_components';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: "Splash",
            newField: false,
        };
        this.handleSignOut = this.handleSignOut.bind(this);
        this.updateTab = this.updateTab.bind(this);
        this.toggleNewField = this.toggleNewField.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchPage("Splash");
    }

    handleSignOut() {
        this.props.signOut().then(() => (
            this.props.history.push('/')
        ));
    }

    toggleNewField() {
        if (this.state.newField) {
            this.setState({ newField: false});
        } else {
            this.setState({ newField: true});
        }
    }

    updateTab(e) {
        if (this.state.currentPage !== e.target.textContent ) {
            console.log(e.target.textContent);
            window.scrollTo(0,0);
            this.setState({ currentPage: e.target.textContent,
                            newField: false });
            // Pull New Page
            this.props.fetchPage(e.target.textContent);
        }
    }

    render() {
        const { pages, fields, loading, updatePage, removeImage } = this.props;

        if (loading.pageLoading || !Object.values(pages).length ) return <LoadingIcon />;

        // Create Page Tabs
        const tabHeads = ["Splash", "Technique", "Showcase", "Quote"];
        const tabs = tabHeads.map((page, idx) => {
            let klass = 'tab';
            let key = `key=${idx}`;
            if (this.state.currentPage === page) klass += " current";

            return (
                <li key={key} 
                    className={klass}
                    onClick={this.updateTab}
                    >
                    {page}
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
        const newFieldItem = <NewFieldItemContainer 
                                pageId={currentPage.id} 
                                toggle={this.toggleNewField} />
                                ;

        const addButton = <button onClick={this.toggleNewField}>Add New Field</button>;

        const fieldLogic = this.state.newField ? newFieldItem : addButton ;

        // Styled Components
        const DashSection = styledComponents.DashSection;

        return (
            <main className='dashboard_container'>
                <AdminHeading signOut={this.handleSignOut} />
                <nav>
                    <ul className={'tabs_container'}>
                        {tabs}
                    </ul>
                </nav>
                <PageTitle currentPage={currentPage} updatePage={updatePage} />
                {/* <section className={'fields_container'}> */}
                <DashSection>
                    { fieldItems }
                    { fieldLogic }
                </DashSection>
                {/* </section> */}
                <PageGallery currentPage={currentPage} updatePage={updatePage} removeImage={removeImage} />
            </main>
        );
    }
}

export default Dashboard;