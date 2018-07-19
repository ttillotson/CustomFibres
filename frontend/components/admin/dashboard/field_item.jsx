import React from 'react';
// import { merge } from 'lodash/merge';

class FieldItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.field.title,
            body: props.field.body,
            id: props.field.id,
            page_id: props.pageId,
            savedImages: props.savedImages,
            newImages: []
        };
        this.submitForm = this.submitForm.bind(this);
        this.removeForm = this.removeForm.bind(this);
        this.handleFileInput = this.handleFileInput.bind(this);
        this.removeImage = this.removeImage.bind(this);
        // this.renderImagePreview = this.renderImagePreview.bind(this);
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
        fileArr.forEach(file => {
            let fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            
            fileReader.onloadend = () => {
                let imageFile = file;
                let imageUrl = fileReader.result;
                let newImageObj = { file: imageFile, imageUrl: imageUrl };
                let newImageState = this.state.newImages;
                
                newImageState.push(newImageObj);
                this.setState({ newImages: newImageState });
            };
        });
    }

    renderImagePreview() {
        const combinedImages = this.props.savedImages.concat(this.state.newImages);

        return combinedImages.map((img, idx) => {
            let klass = "image_preview";
            klass += img.signed_id ? "" : " new";

            return (
                <li key={idx}>
                    <img className={ klass } src={img.service_url} />
                    <span className='image_removal' onClick={() => this.removeImage(img.signed_id)}>Remove</span>
                </li>
            );
        });
    }

    removeForm(e) {
        e.preventDefault();
        this.props.removeField(this.state.id);
    }

    removeImage(imageId) {
        // e.preventDefault();
        const target = new FormData();
        target.append("imageId", imageId);
        target.append("fieldId", this.state.id);
        this.props.removeImage(target);
    }

    submitForm(e) {
        e.preventDefault();
        const fieldData = new FormData();

        fieldData.append("title", this.state.title);
        fieldData.append("body", this.state.body);
        fieldData.append("field_id", this.state.id);
        fieldData.append("page_id", this.state.page_id);
        this.state.newImages.forEach(img => {
            fieldData.append("images[]", img.file);
        });

        this.props.submitField(fieldData);
        this.setState({ newImages: [] });

    }

    render() {
        let lastUpdated = <span>Last Updated: {this.props.field.last_updated}</span>;

        let deleteButton = <button onClick={this.removeForm}
                                className='delete_item'
                                >Delete</button>;

        const itemClass = this.state.id ? "form_item" : "form_item new";

        return (
            <form className='edit_field'>
                <section className={ itemClass }>
                    <label>Title</label>
                    <input 
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </section>

                <section className={ itemClass }>
                    <label>Body</label>
                    <textarea 
                    className='field_body'
                    value={this.state.body}
                    onChange={this.update("body")}
                    />
                </section>

                <section className={ itemClass }>
                    <label>Images</label>
                    <section className='image_input'>
                        <ul className='image_list'>
                            { this.renderImagePreview() }
                        </ul>
                        <input
                        type='file'
                        multiple={true}
                        onChange={this.handleFileInput}
                        />
                    </section>
                </section>

                <section className={'form_logic_section'}>
                    { this.state.id ? lastUpdated : null }
                    <section className="form_buttons" >
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