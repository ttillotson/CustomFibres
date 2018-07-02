import React from 'react';
import { merge } from 'lodash/merge';

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
        this.renderImagePreview = this.renderImagePreview.bind(this);
    }

    update(field) {
        return (e) => (
            this.setState({
                [field]: e.target.value
            })
        );
    }

    handleFileInput(e) {
        const fileArr = Array.from(e.target.files);

        if (fileArr.length > 0) {
            fileArr.forEach(file => {
                let fileReader = new FileReader();
                fileReader.readAsDataURL(file);
                
                fileReader.onloadend = () => {
                    let imageFile = file;
                    let imageUrl = fileReader.result;
                    let newImageObj = { file: imageFile, imageUrl: imageUrl };
                    let newImageState = this.state.images;
            
                    newImageState.push(newImageObj);
                    this.setState({ images: newImageState });
                };
            });
        }
    }

    renderImagePreview() {
        if (this.state.images.length > 0) {
            return this.state.images.map((img, idx) => {
                return <img className='image_preview' key={idx} src={img.imageUrl} />;
            });
        } else {
            return null;
        }
    }

    removeForm(e) {
        e.preventDefault();
        this.props.removeField(this.state.id);
    }

    submitForm(e) {
        e.preventDefault();
        const fieldData = new FormData();

        fieldData.append("field[title]", this.state.title);
        fieldData.append("field[body]", this.state.body);
        fieldData.append("field[id]", this.state.id);
        fieldData.append("field[page_id]", this.state.page_id);
        this.state.images.forEach(img => {
            fieldData.append("field[images][]", img);
        });

        debugger;
        this.props.submitField(this.state);

    }

    render() {
        let lastUpdated = <span>Last Updated: {this.props.field.last_updated}</span>;

        let deleteButton = <button onClick={this.removeForm}
                                className='delete_item'
                                >Delete</button>;

        console.log(this.state);

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
                    onChange={this.handleFileInput}
                    // ref={this.fileInput}
                    />
                    { this.renderImagePreview() }
                </section>

                <section className={'form_logic_section'}>
                    { this.state.id ? lastUpdated : null }
                    <section>
                        { this.state.id ? deleteButton : null }

                        <button onClick={this.submitForm}
                                className='save_item'
                                >Save</button>
                    </section>
                </section>
                
            </form>
        );
    }
}

export default FieldItem;