import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions';
class AddTodo extends React.Component<any, any> {
    input: any;
    onSubmit = (ev: any) => {
        ev.preventDefault();
        const input = this.input;
        if (!input.value.trim()) {
            return;
        }

        this.props.actions.addTodo(input.value);
        input.value = '';
    }
    refInput = (node: any) => {
        this.input = node;
    }
    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input
                        className="new-todo"
                        ref={this.refInput}
                        type="text"
                    />
                    <button className="add-btn" type="submit">
                        添加
                    </button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export default connect(null, mapDispatchToProps)(AddTodo);
