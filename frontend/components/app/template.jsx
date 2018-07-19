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

        const StyledMast = styled.section`
            background-image: url(${page.mastImage.service_url});
            height: 300px;
            max-width: 100vw;
        `;

        const mastImage = page.mastImage ? <img src={page.mastImage.service_url} /> : page.mastImage;

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