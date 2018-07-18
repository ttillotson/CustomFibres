import React from 'react';
import styled from 'styled-components';

class PageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // mastImage: this.props.currentPage.mastImage,
            savedImages: this.props.currentPage.images,
            newImages: []
        };
        this.submitImages = this.submitImages.bind(this);
        this.submitMastImage = this.submitMastImage.bind(this);
        this.removeImage = this.removeImage.bind(this);
        // this.renderImagePreview = this.renderImagePreview.bind(this);
    }

    submitMastImage(e) {
        let fileReader = new FileReader();
        const fileArr = Array.from(e.target.files);
        // fileReader.readAsDataURL(e.target.files[0]);

        // fileReader.onloadend = () => {
            let pageData = new FormData();
            // debugger;
            let imageFile = e.target.files[0];
            // let imageUrl = fileReader.result;

            pageData.append("page_id", this.props.currentPage.id);
            pageData.append("mast_image", imageFile);

            this.props.updatePage(pageData);

            // Immediately send off Update Request
            // Possibly Reset State

            // this.setState({mastImage: imageUrl});
        // };

    }

    handleFileInput(e) {
        const fileArr = Array.from(e.target.files);
        // debugger;
        if (fileArr.length > 0) {
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
    }

    // renderMastPreview() {

    // }

    renderImagePreview(type) {
        const { mastImage } = this.props.currentPage;

        const combinedImages = this.state.savedImages.concat(this.state.newImages);
        if (type === "images") {

            if (combinedImages.length > 0) {
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
            } else {
                return null;
            }
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

        // pageData.append("mast_image", this.state.mastImage);
        this.state.newImages.forEach(img => 
            pageData.append('images[]', img.file)
        );
        pageData.append('name', this.props.currentPage.name);

        this.props.updatePage(pageData);
    }

    render() {
        // const { mastImage, images } = this.props.currentPage;
        // debugger;
        
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
                        onChange={this.handleFileInput}
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