import React from 'react';

class FieldItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.field.title,
            body: props.field.body,
            id: props.field.id,
            pageId: props.pageId
        };
        this.submitForm = this.submitForm.bind(this);
    }

    update(field) {
        return (e) => (
            this.setState({
                [field]: e.target.value
            })
        );
    }

    submitForm(e) {
        e.preventDefault();
        this.props.submitField(this.state);
        // Need a flag for submission then Update complete
    }

    render() {

        let deleteButton = <button onClick={this.removeForm}>Delete</button>;

        return (
            <form className='edit_field'>
                <label> Title
                    <input 
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </label>

                <label>Body
                    <input 
                    type='textarea'
                    value={this.state.body}
                    onChange={this.update("body")}
                    />
                </label>

                { this.state.id ? deleteButton : null }

                <button onClick={this.submitForm}>Save</button>
            </form>
        );
    }
}

export default FieldItem;