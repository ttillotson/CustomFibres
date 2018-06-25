import React from 'react';

class FieldItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.field.title,
            body: props.field.body,
            id: props.field.id,
            page_id: props.field.pageId
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

        let deleteButton = <button onClick={this.removeForm}
                                className='delete_item'
                                >Delete</button>;

        return (
            <form className='edit_field'>
                <section className='form_item'>
                    <label>Title</label>
                    <input 
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </section>

                <section className='form_item'>
                    <label>Body</label>
                    <textarea 
                    className='field_body'
                    value={this.state.body}
                    onChange={this.update("body")}
                    />
                </section>

                <section>
                    { this.state.id ? deleteButton : null }

                    <button onClick={this.submitForm}
                            className='save_item'
                    >Save</button>
                </section>
                
            </form>
        );
    }
}

export default FieldItem;