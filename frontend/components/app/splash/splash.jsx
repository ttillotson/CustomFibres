import React from 'react';
import LoadingIcon from '../../loading_icon';
import DisplayFieldSection from '../shared/display_field_section';


class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPage('Splash');
    }

    render() {
        const { loading, fields } = this.props;

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
                <h3>Splash Page</h3>
                {fieldItems}
            </main>
        );
    }
}

export default Splash;