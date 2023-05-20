import {Component} from "react";
import {postService} from "../../services";
import {Post} from "../Post/Post";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {posts:[]}
    }

    componentDidMount() {
        postService.getALL().then(value => value.data).then(value => this.setState({posts:value}))
    }
    render() {
        return(
            <div>
                {this.state.posts.map(post=> <Post key={post.id} post={post}/>)}
            </div>
        )
    }
}

export {Posts}