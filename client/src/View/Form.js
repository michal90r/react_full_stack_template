import React from 'react'


class Form extends React.Component {

    state = {
        fields: {
            number: "",
            increment: ""
        },
        fieldsErrors: {}
    };

    handleSubmit = (e) => {
        const fields = this.state.fields;
        const fieldsErrors = this.validate(fields);
        this.setState({
            fieldsErrors
        });
        e.preventDefault();

        if(Object.keys(fieldsErrors).length) return;
        this.props.onSubmit(this.state.fields);
        this.setState({
            fields: {
                number: "",
                increment: ""
            }
        })

    };


    handleChange = (e) => {
        const fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        })

    };

    validate = (fields) => {
        const errors = {};
        if(!fields.number || !fields.number.match(/^\d+$/)) errors.number = 'Is not a number';
        if(!fields.increment.match(/^\d+$/)) errors.increment = 'Is not a number';
        return errors;
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>{"number 0-20"}</label><input name="number" value={this.state.fields.number} placeholder="number" onChange={this.handleChange} autoFocus/>
                    <label>{"increment value"}</label><input name="increment" value={this.state.fields.increment} placeholder="increment" onChange={this.handleChange}/>
                    <input type="submit"/>
                </form>
                <div style={{color: 'red'}}>{this.state.fieldsErrors.number}</div>
                <div style={{color: 'red'}}>{this.state.fieldsErrors.increment}</div>
            </div>
        )
    }
}

export default Form;

