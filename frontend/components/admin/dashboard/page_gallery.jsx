import React from 'react';

class PageGallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
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