import React, { Component, lazy, Suspense } from "react";
import axios from "axios";
const Post = lazy(() => import("./Post"));

const baseURL = process.env.REACT_APP_BASEURL || "http://localhost:5000";
const renderLoader = () => (
    <div className="spinner-container">
        <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

class PostsList extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            // Set the no of posts to be rendered to 5
            noOfPosts: 5,
        };
    }

    componentDidMount() {
        axios
            .get(`${baseURL}/api/posts/`)
            .then((response) => {
                // The order of posts is reversed to display the posts in reverse chronological order
                this.setState({ posts: response.data.reverse() });

                // Remove display of the spinner
                document.querySelector(".spinner-border").style.display =
                    "none";
            })
            .catch((err) => console.error(err));
    }

    contributor = () => {
         return Array(15).fill(null).map((item) => {
            return (
                <div style={{width: '100px', height: '100px', textAlign: 'center', marginLeft: '30px'}}>
                    <img
                        src={'/assets/aboutus/coo-3.jpg'}
                        alt='contributor'
                        className='mb-3'
                        style={{ objectFit: 'cover', height: '80px', width: '80px', borderRadius: '99999px'}}
                    />
                    <p>COO</p>
                </div>
            )
        });
    }

    render() {
        return (
            <div>
                <div className='container p-5 mb-3 bg-white overflow-x-auto' style={{display: 'flex', overflowX: 'auto'}}>
                    <div style={{width: '100px', height: '100px', textAlign: 'center'}}>
                        <img
                            src={'/assets/aboutus/coo-3.jpg'}
                            alt='contributor'
                            className='mb-3'
                            style={{ objectFit: 'cover', height: '80px', width: '80px', borderRadius: '99999px'}}
                        />
                        <p>COO</p>
                    </div>
                    {this.contributor()}
                </div>
                <div className="posts-list">
                    <h1 id="title">
                        Latest Posts<span className="full-stop">.</span>
                    </h1>

                    {/* A spinner to indicate loading until posts are stored in state */}
                    <div className="spinner-container">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>

                    {/* Display the posts in reverse chronological order */}
                    {this.state.posts
                        .slice(0, this.state.noOfPosts)
                        .map((currentPost) => (
                            <Suspense
                                key={currentPost._id}
                                fallback={renderLoader()}
                            >
                                <Post post={currentPost} />
                            </Suspense>
                        ))}

                    {/* To load more posts */}
                    {this.state.posts[this.state.noOfPosts] ? (
                        <button
                            className="btn btn-link"
                            onClick={() =>
                                // When the button is clicked change the state to reflect the change in the no of posts beoing rendered, which triggers a compnent
                                this.setState({
                                    noOfPosts: this.state.noOfPosts + 3,
                                })
                            }
                        >
                            Load More Posts...
                        </button>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        );
    }
}

export default PostsList;
