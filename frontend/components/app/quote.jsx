import React from 'react';
import DisplayFieldSection from './shared/display_field_section';

export default (props) => {
    const { loading, fields, pageName, pageTitle } = this.props;

    const eriksEmail = "customfibres4@gmail.com";


    return (
        <section className="quote_container">
            <h1>Request a Quote</h1>
            <article>
                <p>
                    Every job is priced on an individual basis, considering factors such as 
                    part size and complexity as well as cost of materials, hours expected, and 
                    time constraints.
                </p>
            </article>
            <a href={`mailto:${eriksEmail}`} className={`button quote_request`}>
                <button>Request a Quote</button>
            </a>
        </section>
    );
};