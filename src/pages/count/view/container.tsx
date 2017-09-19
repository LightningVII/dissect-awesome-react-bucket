import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions';
class Count extends React.Component<any, any> {
    state = {
        data: { times: 0 },
        open: false,
        message: ''
    };

    async contributePost() {
        let url = '/api/jd/channel';
        try {
            const result = await fetch(url);
            const data = await result.json();
            this.setState({'open': true, message: data.msg});
        } catch (err) {
            console.error('ES7 Async/products >>>', err);
        }
    }
    handleAdd = () => {
        this.contributePost();
    };
    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };
    render() {
        return (
            <div>
                <RaisedButton
                    onClick={this.handleAdd}
                    label="Channel"
                />
                <RaisedButton
                    onClick={this.handleAdd}
                    label="News"
                />
                <RaisedButton
                    onClick={this.handleAdd}
                    label="Driver"
                />
                <Snackbar
                    open={this.state.open}
                    message={this.state.message}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any) => state.countState;

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
