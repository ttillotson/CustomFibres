import React from 'react';

class PageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mastImage: this.props.mastImage,
            savedImages: this.props.images,
            newImages: []
        };
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
                    let newImageState = this.state.newImages;
                    
                    newImageState.push(newImageObj);
                    this.setState({ newImages: newImageState });
                };
            });
        }
    }

    renderImagePreview() {
        const combinedImages = this.state.savedImages.concat(this.state.newImages);

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
    }

    submitPage(e) {
        e.preventDefault();
        const pageData = new FormData();

        pageData.append("mast_image", this.state.mastImage);
        this.state.newImages.forEach(img => 
            pageData.append('images[]', img.file)
        );


        this.props.updatePage(pageData);
    }

    render() {
        const { mastImage, images } = this.props;
        debugger;
    
        return (
            <section>
                <p>Page Gallery Section</p>
            </section>
        );
    }
}

export default PageGallery;