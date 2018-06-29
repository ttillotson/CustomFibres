import React from 'react';

class FieldItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.field.title,
            body: props.field.body,
            id: props.field.id,
            page_id: props.pageId,
            images: []
        };
        this.submitForm = this.submitForm.bind(this);
        this.removeForm = this.removeForm.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
        this.fileInput = React.createRef();
    }

    update(field) {
        return (e) => (
            this.setState({
                [field]: e.target.value
            })
        );
    }

    handleFileInput(e) {
        // debugger;
        // console.log(e)
        // e.target.files => file list with uploads
        // const fileArr = Array.from(fileList);
        
        const fileArr = Array.from(e.target.files);
        this.setState({ images: fileArr });

        debugger;
    }

    removeForm(e) {
        e.preventDefault();
        this.props.removeField(this.state.id);
    }

    submitForm(e) {
        e.preventDefault();
        const fileRefs = Array.from(this.fileInput.current.files);
        // // this.setState({ "images": fileRefs });
        // // this.state.images = fileRefs;
        // this.state.images = fileRefs;
        debugger;
        this.props.submitField(this.state, fileRefs);
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

                <section className='form_item'>
                    <label>Images</label>
                    <input
                    type='file'
                    multiple={true}
                    // value=
                    // onChange={this.handleFileInput}
                    ref={this.fileInput}
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