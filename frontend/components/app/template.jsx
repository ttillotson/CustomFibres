import React from 'react';
import LoadingIcon from '../loading_icon';
import DisplayFieldSection from './shared/display_field_section';


class Template extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPage(this.props.name);
    }

    render() {
        const { loading, fields, name } = this.props;

        if (loading) return <LoadingIcon />;

        const fieldItems = fields.map(field => (
            <DisplayFieldSection
            title={field.title}
            body={field.body}
            key={`key=${field.id}`}
            />
        ));

        return (
            <main>
                <h3>{name} Page</h3>
                {fieldItems}
            </main>
        );
    }
}

export default Template;