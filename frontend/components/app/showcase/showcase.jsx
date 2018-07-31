import React from 'react';
import LoadingIcon from '../../shared/loading_icon';
import DisplayFieldSection from '../shared/display_field_section';
// import ShowcaseItem from './showcase_item';
import ImageIndex from '../../shared/gallery_index';
import styled from 'styled-components';

class Showcase extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);

        // Only Request if Store doesn't already have it
        // Having static content enables this behavior
        if (!Object.values(this.props.fields).length) {
            this.props.fetchPage(this.props.pageName);
        }
    }

    render() {
        const { loading, fields, page, extras } = this.props;

        if (loading) return <LoadingIcon />;

        if (!page) return null;

        const fieldItems = fields.map(field => (
            <DisplayFieldSection
            field={field}
            key={`key=${field.id}`}
            pageName={page.name}
            />
        ));

        // const titleElement = <h2 className='page_title'>{pageTitle}</h2>;

        const extraItems = extras ? extras : null;

        // Setup Page's Mast; if it exists, set it
        let mastImage;
        if (page.mastImage) {
            const StyledMast = styled.img`
                display: none;
                @media only screen and (min-width: 769px) {

                    // src: ${page.mastImage.service_url};
                    height: 250px;
                    display: block;
                    // max-width: 
                }
            `;
            
            mastImage = <StyledMast src={page.mastImage.service_url} />;
        }

        // Setup Page Images; If any exist, format them
        let pageImages;
        if (page.images) {
            let rowSize = 1;
            if (window.matchMedia("(min-width: 1200px)").matches) {
                rowSize = 5;
            } else if (window.matchMedia("(min-width: 992px)").matches) {
                rowSize = 4;
            } else if (window.matchMedia("(min-width: 768px)").matches) {
                rowSize = 3;
            } else if (window.matchMedia("(min-width: 480px)").matches) {
                rowSize = 2;
            }
            pageImages = <ImageIndex images={page.images} display={true}
                StyledComponent={StyledPageImage} rowSize={rowSize}/>;
        }

        // debugger;

        return (
            <React.Fragment>
                { mastImage }
                <main className='template_container'>
                    {/* { titleElement } */}
                    { fieldItems }
                    { extraItems }
                    { pageImages }
                </main>
            </React.Fragment>
        );
    }
}

export default Showcase;

const StyledPageImage = styled.img`
    width: 80vw;
    margin: 1vh 1.5vw;

    @media only screen and (min-width: 480px) {
        width: 38vw;
    }

    @media only screen and (min-width: 768px) {
        width: 24vw;
    }

    @media only screen and (min-width: 992px) {
        width: 17vw;
    }

    @media only screen and (min-width: 1200px) {
        width: 14vw;
        margin: 1vh 1vw;
    }
`;