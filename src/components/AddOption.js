import React from 'react';

export default class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.formSubmit = this.formSubmit.bind(this);
        this.state = {
            error: undefined
        };
    }
    formSubmit(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);
        this.setState(()=>{
            return { error }
        })
        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.formSubmit}>
                    <input 
                        type="text"
                        name="option"
                        placeholder="Type an action here..."
                        autoFocus={true}
                    />
                    <button>Add Option</button>
                </form>
                {this.state.error && <p className="error">{this.state.error}</p>}
            </div>
        );
    }
}