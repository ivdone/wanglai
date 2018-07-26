import React, { Component } from 'react';
import PageTop from './Components/PageTop'
import BlogContent from './Components/BlogContent'
import BlogSideBar from './Components/BlogSideBar'
import SinglePost from './Components/SinglePost'

const test = [
    {
        blogid : 0,
        img : "img/b1.jpg",
        tags: [{id : 1, title : "Travel"}, {id : 0, title : "Life"}],
        title: "Portable latest Fashion for young women",
        preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        post_date: "31st January, 2018"        
    },
    {
        blogid : 1,
        img : "img/b2.jpg",
        tags: [{id : 1, title : "Travel"}, {id : 0, title : "Life"}],
        title: "Portable latest Fashion for young women 2",
        preview: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        post_date: "31st January, 2018"
    },
    {
        blogid : 1,
        img : "img/b2.jpg",
        tags: [{id : 1, title : "Travel"}],
        title: "Portable latest Fashion for young women 2",
        preview: "2 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
        post_date: "31st January, 2018"
    }
];

const tags = [ 
    {
        name: "Travel",
        count: 24
    },
    {
        name: "Life",
        count: 55
    }
];

const post = {
    blogid : 0,
    img : "img/b1.jpg",
    tags: [{id : 1, title : "Travel"}, {id : 0, title : "Life"}],
    title: "Portable latest Fashion for young women",
    preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore  et dolore.",
    post_date: "31st January, 2018",
    content: "something"
}

class Blog extends Component {
    constructor(props) {
        super(props);
        console.log(props.match);
        this.state = {
            isSingle: false,
            result: {
                previews: test,
                hasPrev: false,
                hasNext: false
            }
        };

        this.update.bind(this);
    }

    componentDidMount() {
        this.update("*");
    }

    update(category) {
        this.setState(
            (prevState, props) => {
                return {
                    isSingle: props.match.params.blogid !== undefined,
                    result : {
                        previews : test.filter( preview => category === "*" || preview.tags.some(tag => tag.title === category)),
                        hasPrev : false,
                        hasNext : false,
                        post : post
                    }
                };
            }
        );
    }

    render() {
        console.log(this.state);
        const BlogArea = this.state.isSingle ? <SinglePost post={this.state.result.post}/> : <BlogContent previews={this.state.result.previews}/>;
        return (
            <React.Fragment>
                <PageTop bgurl="img/headers-bg/4.jpg" page="Blog"/>
                <section className="blog-posts-area section-gap">
                    <div className="container">
                        <div className="row">
                            {BlogArea}                            
                            <BlogSideBar tags={tags} callback={(category) => this.update(category)}/>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Blog;
