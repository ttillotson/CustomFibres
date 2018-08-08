import React from 'react';
import LoadingIcon from '../shared/loading_icon';
import DisplayFieldSection from './shared/display_field_section';
import ImageIndex from '../shared/gallery_index';
import styled from 'styled-components';


class Template extends React.Component {
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
        const { loading, fields, page, extras, StyledTemplate } = this.props;

        if (loading) return <LoadingIcon />;

        if (!page) return null;

        // Setup Page's Mast; if it exists, set it
        let mastImage = null;
        if (page.mastImage) {
            const StyledMast = styled.img`
                display: none;
                @media only screen and (min-width: 769px) {

                    height: 250px;
                    display: block;
                }
            `;
            
            mastImage = <StyledMast src={page.mastImage.service_url} />;
        }

        const pageTitle = <h2 className='page_title'>{page.title}</h2>;
        

        const fieldItems = fields.map((field, idx) => (
            <DisplayFieldSection
            field={field}
            key={`key=${field.id}`}
            idx={idx}
            pageName={page.name}
            StyledImage={StyledImage}
            />
        ));

        const extraItems = extras ? extras : null;


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
                StyledComponent={StyledImage} rowSize={rowSize}/>;
        }


        if (StyledTemplate) {
            return (
                <StyledTemplate>
                    { mastImage }
                    <main className='template_container'>
                        { pageTitle }
                        { fieldItems }
                        { extraItems }
                        { pageImages }
                    </main>
                </StyledTemplate>
            ); 
        } else {
            return (
                <React.Fragment>
                    { mastImage }
                    <main className='template_container'>
                        { pageTitle }
                        { fieldItems }
                        { extraItems }
                        { pageImages }
                    </main>
                </React.Fragment>
            );
        }
    }
}

export default Template;

const StyledImage = styled.img`
    height: 80vw;
    width: auto;
    margin: 1.5vw 1.5vw;

    @media only screen and (min-width: 480px) {
        height: 38vw;
    }

    @media only screen and (min-width: 768px) {
        height: 24vw;
    }

    @media only screen and (min-width: 992px) {
        height: 17vw;
        margin: 1vw 1vw;
    }

    @media only screen and (min-width: 1200px) {
        height: 14vw;
    }
`;