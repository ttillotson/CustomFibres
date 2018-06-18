import React from 'react';

class InfoSection extends React.Component {
    constructor(props) {
        super(props);

        // this.state;
        this.submitForm = this.submitForm.bind(this);
    }

    update(field) {
        return (e) => (
            this.setState({
                [field]: e.target.value
            })
        );
    }

    submitForm(e) {
        e.preventDefault();
        this.props.updateInfo(this.state);
        // Need a flag for submission then Update complete
    }

    render() {

        return (
            <form>
                <label> Title
                    <input 
                    type='text'
                    value={this.state.title}
                    onChange={this.update('title')}
                    />
                </label>

                <label>Body
                    <input 
                    type='textarea'
                    value={this.state.body}
                    onChange={this.update("body")}
                    />
                </label>

                <button onClick={this.submitForm}>Save</button>
            </form>
        );
    }
}

export default InfoSection;