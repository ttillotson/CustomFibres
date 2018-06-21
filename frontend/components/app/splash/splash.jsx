import React from 'react';


class Splash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPage('Splash');
    }

    render() {
        return (
            <main>
                <h3>Splash Page</h3>
            </main>
        );
    }
}

export default Splash;