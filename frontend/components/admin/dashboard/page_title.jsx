import React from 'react';
import * as styledComponents from './shared_styled_components';

class FieldTitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            page_id: props.currentPage.id,
            // name: props.currentPage.name,
            title: props.currentPage.title,
        };
        this.updateTitle = this.updateTitle.bind(this);
        this.submitTitle = this.submitTitle.bind(this);
    }

    updateTitle(e) {
        console.log(this.state)
        return this.setState({ title: e.target.value });
    }

    submitTitle(e) {
        e.preventDefault();
        const pageData = new FormData();

        pageData.append('page_id', this.props.currentPage.id);
        pageData.append('title', this.state.title);

        this.props.updatePage(pageData);
    }

    render() {
        const SaveButton = styledComponents.SaveButton;
        const DashSection = styledComponents.DashSection;
        const DashInputSection = styledComponents.DashInputSection;
        const DashForm = styledComponents.DashForm;
        const FormLogicSection = styledComponents.FormLogicSection;

        return (
            <DashSection>
                <DashForm className="edit_page_title">
                    <DashInputSection>
                        <label>Page Title</label>
                        <input 
                        type="text" 
                        value={this.state.title}
                        onChange={this.updateTitle}
                        />
                    </DashInputSection>
                    <FormLogicSection>
                        <SaveButton onClick={this.submitTitle}>
                            Save
                        </SaveButton>
                    </FormLogicSection>
                </DashForm>
            </DashSection>
        );
    }
}

export default FieldTitle;