import React from 'react';

class Technique extends React.Component {
    // 3 Sections: Cover Piece && Built Piece && Materials
    //      2 Sections: Description && pictures
    
    // Model: Title, text, img urls
    // Images are separate model?
    //      -> Talk with Nima on how to handle image upload
    //      -> Is it a separate model? Attached?
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchPage('Technique');
    }


    render() {
        return (
            <section className='technique_container'>
                <h1> Technique Container
                </h1>
            </section>
        );
    }
}

export default Technique;