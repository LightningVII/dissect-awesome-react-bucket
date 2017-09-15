import * as React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { grey400, grey50 } from 'material-ui/styles/colors';
import Actions from '../actions';
const textFieldStyle: any = {
    paddingLeft: 10,
    backgroundColor: grey50,
    borderRadius: 2,
    marginRight: 5,
    height: 36,
    lineHeight: '12px'
};
const formStyle: any = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: grey400,
    padding: 10
};
class AddTodo extends React.Component<any, any> {
    input: any;
    state = {
        inputValue: ''
    };
    onSubmit = (ev: any) => {
        ev.preventDefault();
        const value = this.state.inputValue;
        if (!value.trim()) {
            return;
        }
        this.props.addTodo(value);
        this.setState({ inputValue: '' });
    }
    handleChange = (ev: any) => {
        this.setState({ inputValue: ev.target.value });
    }
    render() {
        return (
            <div className="add-todo">
                <form style={formStyle} onSubmit={this.onSubmit}>
                    <TextField
                        fullWidth
                        style={textFieldStyle}
                        underlineShow={false}
                        rows={1}
                        hintText="Enter Task"
                        value={this.state.inputValue}
                        onChange={this.handleChange}
                    />
                    <RaisedButton type="submit" label="添加" primary={true} />
                </form>
            </div>
        );
    }
}

export default connect(null, Actions)(AddTodo);
