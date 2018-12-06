import React, { Component } from 'react';
import PageTop from './Components/PageTop';
import BlogContent from './Components/BlogContent';
import BlogSideBar from './Components/BlogSideBar';
import SinglePost from './Components/SinglePost';

const postUrl = "http://118.31.54.140/api/post/";
const blogPreviewsUrl="http://118.31.54.140/api/post";
const tagsUrl = "http://118.31.54.140/api/blog_tags";
class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSingle: false,
            currentPreviews: [],
            hasPrev: false,
            hasNext: false,
            allPreviews: [],
            tags: []
        };

        this.update.bind(this);
    }

    componentDidMount() {
        fetch(blogPreviewsUrl).then(res => res.json())
            .then(res => {
                this.setState({
                    allPreviews: res,
                    currentPreviews: res
                });
            });

        fetch(tagsUrl).then(res => res.json())
            .then(res => {
                this.setState({
                    tags: res,
                });
            });
            
        if (this.props.match.params.blogid === undefined)
            return;

        fetch(postUrl + this.props.match.params.blogid).then(res => res.json())
            .then(res => {
                this.setState({
                    isSingle: true,
                    post: res
                });
            });
    }

    update(category) {
        const blogid = this.props.match.params.blogid;
        if (blogid === undefined) {
            this.setState(
                (prevState, props) => {
                    return {
                        isSingle: false,
                        currentPreviews : this.state.allPreviews.filter( preview => category === "*" || preview.tags.some(tag => tag.fullName === category)),
                        hasPrev : false,
                        hasNext : false,
                    };
                }
            );
        }
        
    }

    render() {
        console.log(this.state);
        const BlogArea = this.state.isSingle ? <SinglePost post={this.state.post} callback={(category) => this.update(category)}/> 
            : <BlogContent previews={this.state.currentPreviews} callback={(category) => this.update(category)}/>;
        return (
            <React.Fragment>
                <PageTop bgurl="/img/headers-bg/5.jpg" page="Blog" pageurl="/blog"/>
                <section className="blog-posts-area section-gap">
                    <div className="container">
                        <div className="row">
                            {BlogArea}                            
                            <BlogSideBar tags={this.state.tags} callback={(category) => this.update(category)}/>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;
