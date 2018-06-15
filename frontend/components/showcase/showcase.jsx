import React from 'react';
import ShowcaseItem from './showcase_item';

class Showcase extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // API Call
    }

    render() {

        return (
            <section className='showcase_container'>
                <h1> Showcase Page
                </h1>
            </section>
        );
    }
}

export default Showcase;