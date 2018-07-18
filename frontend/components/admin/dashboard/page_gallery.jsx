import React from 'react';
import styled from 'styled-components';

class PageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newImages: []
        };
        this.submitImages = this.submitImages.bind(this);
        this.submitMastImage = this.submitMastImage.bind(this);
        this.processImages = this.processImages.bind(this);
        this.removeImage = this.removeImage.bind(this);
    }

    submitMastImage(e) {
        let pageData = new FormData();
        let imageFile = e.target.files[0];

        pageData.append("page_id", this.props.currentPage.id);
        pageData.append("mast_image", imageFile);

        this.props.updatePage(pageData);
    }

    processImages(e) {
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

    renderImagePreview(type) {
        const { mastImage, images } = this.props.currentPage;

        const combinedImages = images.concat(this.state.newImages);
        if (type === "images") {
            return combinedImages.map((img, idx) => {
                let klass = "image_preview";
                klass += img.signed_id ? "" : " new";
                
                return (
                    <li key={idx}>
                        <img className={ klass } src={img.imageUrl} />
                        <span className='image_removal' onClick={() => this.removeImage(img.signed_id)}>Remove</span>
                    </li>
                );
            });
        } else if (type === "mastImage" && mastImage) {
            return (
                <StyledMast >
                    <img src={mastImage.service_url} alt={`Mast Image`}/>
                    <span onClick={() => this.removeImage(mastImage.signed_id)}>Remove</span>
                </StyledMast>
            );
        }
    }

    removeImage(imageId) {
        // e.preventDefault();
        const target = new FormData();
        target.append("imageId", imageId);
        target.append("pageId", this.props.currentPage.id);
        this.props.removeImage(target);
    }

    submitImages(e) {
        e.preventDefault();
        const pageData = new FormData();

        this.state.newImages.forEach(img => 
            pageData.append('images[]', img.file)
        );
        pageData.append('name', this.props.currentPage.name);

        this.props.updatePage(pageData);
    }

    render() {
        return (
            <section>
                <p>Page Gallery Section</p>

                <section>
                    <label>Mast Image</label>
                    <section className='image_input'>
                        <ul className='image_list'>
                            { this.renderImagePreview("mastImage") }
                        </ul>
                        <input
                        type='file'
                        onChange={this.submitMastImage}
                        />
                    </section>
                </section>
                <section>
                    <label>Images</label>
                    <section className='image_input'>
                        <ul className='image_list'>
                            { this.renderImagePreview("images") }
                        </ul>
                        <input
                        type='file'
                        multiple={true}
                        onChange={this.processImages}
                        />
                    </section>

                </section>
            </section>
        );
    }
}

const StyledMast = styled.article`

    img {
        max-height: 180px;
        width: auto;
    }

    span:hover {
        cursor: pointer;
    }
`;

export default PageGallery;