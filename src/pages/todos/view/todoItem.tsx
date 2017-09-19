import * as React from 'react';
import { connect } from 'react-redux';
import Checkbox from 'material-ui/Checkbox';
import { ListItem } from 'material-ui/List';
import Actions from '../actions';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import { grey500 } from 'material-ui/styles/colors';

interface PropsInterface {
    text: string;
    id: number;
    onToggle: Function | any;
    onRemove: Function | any;
    completed: boolean;
}

class TodoItem extends React.Component<PropsInterface, {}> {
    shouldComponentUpdate(nextProps: PropsInterface, nextState: {}) {
        console.log('TodoItemDidMount:' + this.props.text);
        return (
            nextProps.completed !== this.props.completed ||
            nextProps.text !== this.props.text
        );
    }
    componentDidMount() {
        console.log('TodoItemDidMount:' + this.props.text);
    }
    render() {
        console.log('TodoItemRender:' + this.props.text);
        const { text, onToggle, onRemove, completed } = this.props;
        const checkedProp: any = completed ? { checked: true } : {};
        /* 对象引用优化 避免重复创造新对象 */
        const textDecorationStyle: any = {
            textDecoration: completed ? 'line-through' : 'none'
        };
        return (
            <ListItem
                primaryText={text}
                leftCheckbox={
                    <Checkbox
                        uncheckedIcon={<Visibility />}
                        checkedIcon={<VisibilityOff />}
                        {...checkedProp}
                        onCheck={onToggle}
                    />
                }
                rightIcon={<CloseIcon onClick={onRemove} />}
                hoverColor={grey500}
                style={textDecorationStyle}
            />
        );
    }
}

/* 方案1 redux mapDispatchToProps 第二个参数 ownProps 获取参数，
此时Actions的方法是从 外面传进来的方法中 执行的，
所以直接执行 传进来的方法就可以了，不用引入 Actions  */
/* const mapDispatchToProps = (
    dispatch: any,
    { onToggle, onRemove, id }: any
) => ({
    onToggle: () => onToggle(id),
    onRemove: () => onRemove(id)
}); */

/* 方案2 redux mapDispatchToProps 第二个参数 ownProps 获取参数，
此时Actions的方法是从 外面传进来的方法中 执行的，
所以直接执行 传进来的方法就可以了，不用引入 Actions  */
const { toggleTodo, removeTodo } = Actions;
const mapDispatchToProps = (dispatch: any, { id }: any) => ({
    onToggle: () => dispatch(toggleTodo(id)),
    onRemove: () => dispatch(removeTodo(id))
});

export default connect(null, mapDispatchToProps)(TodoItem);
