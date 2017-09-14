import * as React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { ListItem } from 'material-ui/List';
// import FlatButton from 'material-ui/FlatButton';
import CloseIcon from 'material-ui/svg-icons/navigation/close';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import { grey500 } from 'material-ui/styles/colors';

const TodoItem = ({ onToggle, onRemove, completed, text }: any) => {
    const checkedProp = completed ? { checked: true } : {};
    return (
        <ListItem
            primaryText={text}
            leftCheckbox={
                <Checkbox
                    uncheckedIcon={<Visibility />}
                    checkedIcon={<VisibilityOff />}
                    readOnly
                    {...checkedProp}
                    onCheck={onToggle}
                />
            }
            rightIcon={<CloseIcon onClick={onRemove} />}
            hoverColor={grey500}
            style={{
                textDecoration: completed ? 'line-through' : 'none'
            }}
        />
    );
};

export default TodoItem;
