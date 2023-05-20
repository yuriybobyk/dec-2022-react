import {Component} from "react";
import {commentService} from "../../services";
import {Comment} from "../Comment/Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state = {comments:[]}
    }

    componentDidMount() {
        commentService.getALL().then(value => value.data).then(value => this.setState({comments:value}))
    }

    render() {
        return(
            <div>
                {this.state.comments.map(comment=> <Comment key={comment.id} comment={comment}/>)}
            </div>
        )
    }
}

export {Comments}