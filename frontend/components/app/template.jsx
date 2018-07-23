import React from 'react';
import LoadingIcon from '../loading_icon';
import DisplayFieldSection from './shared/display_field_section';
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
        const { loading, fields, page, extras, pageTitle } = this.props;

        if (loading) return <LoadingIcon />;

        if (!page) return null;

        const fieldItems = fields.map(field => (
            <DisplayFieldSection
            field={field}
            key={`key=${field.id}`}
            pageName={page.name}
            />
        ));

        const titleElement = <h2 className='page_title'>{pageTitle}</h2>;

        const extraItems = extras ? extras : null;

        // Setup Page's Mast; if it exists, set it
        let mastImage;
        if (page.mastImage) {
            const StyledMast = styled.section`
                display: none;
                @media (min-width: 361px) {
                    background-image: url(${page.mastImage.service_url});
                    height: 300px;
                    display: block;
                    // max-width: 
                }
            `;
            
            mastImage = <StyledMast />;
        }

        // debugger;

        return (
            <React.Fragment>
                { mastImage }
                <main className='template_container'>
                    { titleElement }
                    { fieldItems }
                    { extraItems }
                </main>
            </React.Fragment>
        );
    }
}



export default Template;