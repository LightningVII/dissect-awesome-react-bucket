import * as React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';
import { darkBlack } from 'material-ui/styles/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Actions from '../actions';
import * as Thunk from '../thunks';
class Count extends React.Component<any, any> {
    state = {
        data: { times: 0 },
        open: false,
        message: '',
        newsList: []
    };
    channels: Array<string> = [];
    async contributePost(type: any, callback: Function | null) {
        let url = '/api/jd/' + type;
        try {
            const result = await fetch(url);
            const data = await result.json();
            callback && callback(data);
            this.setState({ open: true, message: data.msg });
        } catch (err) {
            console.error('ES7 Async/products >>>', err);
        }
    }

    handleRequestClose = () => {
        this.setState({
            open: false
        });
    };

    getNews(type: string) {
        fetch('/api/jd/news?channel=' + type)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    newsList: data.result.result.list
                });
            });
    }

    createNewsListComponent(data: Array<any>) {
        return data.map((item: any) => {
            return (
                <span key={item.weburl}>
                    <a href={item.url}>
                        <ListItem
                            leftAvatar={
                                <Avatar
                                    style={{ borderRadius: 5 }}
                                    size={50}
                                    src={item.pic}
                                />
                            }
                            primaryText={item.title}
                            secondaryText={
                                <p>
                                    <span style={{ color: darkBlack }}>
                                        {item.src}
                                    </span>{' '}
                                    {item.category} {item.time}
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                    </a>
                    <Divider inset={true} />
                </span>
                // <li key={item.weburl}>
                //     <a href={item.url}>
                //         <h3>{item.title}</h3>
                //         <br />
                //         <mark>
                //             {item.src} | {item.category}
                //         </mark>
                //         {item.content}
                //         <br />
                //         {item.time}
                //         <img src={item.pic} alt={item.weburl} />
                //     </a>
                // </li>
            );
        });
    }

    createChannelComponent(data: any) {
        const channelsStyle = {
            marginTop: 10,
            textAlign: 'center',
            display: 'inline-block',
            width: '25%'
        };
        return data.map((channel: any) => {
            return (
                <div key={channel} style={channelsStyle}>
                    <RaisedButton
                        onClick={this.getNews.bind(this, channel)}
                        label={channel}
                    />
                </div>
            );
        });
    }
    componentDidMount() {
        /*  */
        // this.dispatch(fetchChannelRequested('/api/jd/channel'));  
        this.props.thunks.getChannel('/api/jd/channel');
    }
    render() {
        console.log(this.props);
        return (
            <div>
                {this.createChannelComponent(this.props.channel)}
                <br />
                <Snackbar
                    open={this.state.open}
                    message={this.state.message}
                    autoHideDuration={4000}
                    onRequestClose={this.handleRequestClose}
                />
                <List>{this.createNewsListComponent(this.state.newsList)}</List>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => state.countState;

const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators<any>(Actions, dispatch),
    thunks: bindActionCreators<any>(Thunk, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Count);
