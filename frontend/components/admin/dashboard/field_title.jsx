import React from 'react';

class FieldTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
        this.updateTitle = this.updateTitle.bind(this);
    }

    updateTitle(e) {
        return this.setState({ title: e.target.value });
    }

    render() {

        return (
            <form className="edit_page_title">
                <section className='page_title'>
                    <label>Page Title</label>
                    <input 
                    type="text" 
                    value={this.state.title}
                    onChange={this.updateTitle}
                    />
                </section>
                <section className='form_logic_section'>
                    <button onClick={this.submitTitle}
                            className='save_item'
                            >Save</button>
                </section>
            </form>
        );
    }
}

export default FieldTitle;