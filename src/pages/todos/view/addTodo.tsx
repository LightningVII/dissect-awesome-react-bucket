import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { grey400, grey50 } from 'material-ui/styles/colors';
import Actions from '../actions';
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
        this.props.actions.addTodo(value);
        this.setState({ inputValue: '' });
    };
    refInput = (node: any) => {
        this.input = node;
    };
    handleChange = (ev: any) => {
        this.setState({ inputValue: ev.target.value });
    };
    render() {
        return (
            <div className="add-todo">
                <form
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: grey400,
                        padding: 10
                    }}
                    onSubmit={this.onSubmit}
                >
                    <TextField
                        fullWidth
                        style={{
                            paddingLeft: 10,
                            backgroundColor: grey50,
                            borderRadius: 2,
                            marginRight: 5,
                            height: 36,
                            lineHeight: '12px'
                        }}
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
{/* floatingLabelText="Enter Task" */}                       

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export default connect(null, mapDispatchToProps)(AddTodo);

// ref={this.refInput}
