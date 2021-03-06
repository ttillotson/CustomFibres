import React from 'react';
import styled from 'styled-components';
import ImageIndex from '../../shared/gallery_index';
import * as styledComponents from './shared_styled_components';

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

        // return combinedImages.map((img, idx) => {
        //     let klass = "image_preview";
        //     klass += img.signed_id ? "" : " new";

        //     return (
        //         <li key={idx}>
        //             <img className={ klass } src={img.service_url} />
        //             <span className='image_removal' onClick={() => this.removeImage(img.signed_id)}>Remove</span>
        //         </li>
        //     );
        // });
        const StyledImage = styledComponents.StyledImage;

        return (
            [
                <ImageIndex key={0} images={this.props.savedImages} 
                    StyledComponent={StyledImage} 
                    removeImage={this.removeImage} rowSize={4} />,
                <ImageIndex key={1} images={this.state.newImages} 
                    StyledComponent={StyledImage} 
                    removeImage={this.removeNewImage} rowSize={4} />
            ]
        );

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
        // Styled Components
        const FieldForm = styledComponents.FieldForm;
        const FormLogicSection = styledComponents.FormLogicSection;
        const DashInputSection = styledComponents.DashInputSection;
        const DeleteButton = styledComponents.DeleteButton;
        const SaveButton = styledComponents.SaveButton;
        const ImageGallerySection = styledComponents.ImageGallerySection;
        const ImageInputSection = styledComponents.ImageInputSection;
        const ImageInput = styledComponents.ImageInput;
        const ImageList = styledComponents.ImageList;

        let lastUpdated = <span>Last Updated: {this.props.field.last_updated}</span>;

        let deleteButton = <DeleteButton onClick={this.removeForm}>
                                Delete
                            </DeleteButton>;

        const inputClass = this.state.id ? "" : "new";                        

        return (
            <FieldForm>
                <DashInputSection>
                    <label>Title</label>
                    <input 
                    className={inputClass}
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </DashInputSection>

                <DashInputSection>
                    <label>Body</label>
                    <textarea 
                    className={inputClass}
                    value={this.state.body}
                    onChange={this.update("body")}
                    />
                </DashInputSection>

                <DashInputSection>
                    <label>Images</label>
                    <ImageGallerySection>
                        <ImageList className='image_list'>
                            { this.renderImagePreview() }
                        </ImageList>
                        <ImageInputSection>
                            <ImageInput
                            className={inputClass}
                            type='file'
                            multiple={true}
                            onChange={this.handleFileInput}
                            />
                            <p>Click Here to Add Images!</p>
                        </ImageInputSection>
                    </ImageGallerySection>
                </DashInputSection>

                <FormLogicSection>
                    <section className="form_buttons" >
                        { this.state.id ? deleteButton : null }

                        <SaveButton onClick={this.submitForm}>Save</SaveButton>
                    </section>
                    { this.state.id ? lastUpdated : null }
                </FormLogicSection>
            </FieldForm>
        );
    }
}

export default FieldItem;