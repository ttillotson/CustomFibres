import React from 'react';
import styled from 'styled-components';
import ImageIndex from '../../shared/gallery_index';

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
        this.removeNewImage = this.removeNewImage.bind(this);
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
            return (
                [
                    <ImageIndex key={0} images={images} 
                        StyledComponent={StyledImage} 
                        removeImage={this.removeImage} rowSize={4} />,
                    <ImageIndex key={1} images={this.state.newImages} 
                        StyledComponent={StyledImage} 
                        removeImage={this.removeNewImage} rowSize={4} />
                ]
            );
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
        target.append("page_id", this.props.currentPage.id);
        this.props.removeImage(target);
    }

    removeNewImage(imageId) {
        let newImages = this.state.newImages.filter(img => img.imgUrl !== imageId);
        this.setState({ newImages: newImages });
    }

    submitImages(e) {
        e.preventDefault();
        const pageData = new FormData();

        this.state.newImages.forEach(img => 
            pageData.append('images[]', img.file)
        );
        pageData.append('page_id', this.props.currentPage.id);

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
                    <SaveButton onClick={this.submitImages}>Save</SaveButton>
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

const StyledImage = styled.img`
    max-width: 150px;
`;

const SaveButton = styled.button`

`;

export default PageGallery;