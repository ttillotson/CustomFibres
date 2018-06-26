import React from 'react';
import LoadingIcon from '../loading_icon';
import DisplayFieldSection from './shared/display_field_section';


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
        const { loading, fields, pageName } = this.props;

        if (loading) return <LoadingIcon />;

        const fieldItems = fields.map(field => (
            <DisplayFieldSection
            title={field.title}
            body={field.body}
            key={`key=${field.id}`}
            pageName={pageName}
            />
        ));

        return (
            <main className='template_container'>
                <h3>{pageName} Page</h3>
                {fieldItems}
            </main>
        );
    }
}

export default Template;