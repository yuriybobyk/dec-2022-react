import {Component} from "react";

class Post extends Component {
    render() {
        const {id, title, body} = this.props.post;
        return (
            <div>
                <div>ID: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        )
    }

}


export {Post}