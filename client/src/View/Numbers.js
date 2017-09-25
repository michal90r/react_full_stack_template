import React from 'react'
import Form from './Form'
import Boxes from './Boxes'

class Numbers extends React.Component {

    state={
        result: []
    };

    handleSubmit = (fields) => {
        const maxVal = Number.parseInt(fields.number, 10) + Number.parseInt(fields.increment, 10);
        const result = new Array(maxVal +1).fill().map((_, idx) => idx);
        this.setState({
            result: result
        })
    };

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}/>
                <Boxes result={this.state.result}/>
            </div>
        )
    }


}

export default Numbers;