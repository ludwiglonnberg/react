import React from "react";



class Likebutton extends React.Component{

    state = {
        likes: 138,
        liked: false
    };

    handleClick = () => {

        if (!this.state.liked) {

            this.setState({
                likes: this.state.likes + 1,
                liked: true
            })
        } else {
            this.setState({
                likes: this.state.likes - 1,
                liked: false
            })
        }
    }

    render(){
        return (
            <div>
                <button 
                    className={`Likes ${this.state.liked ? "liked" : ""}`}  
                    onClick={this.handleClick}
                >
                    {this.state.liked ? "♥ Liked " : "♡ Like "} | {this.state.likes}
                </button>
            </div>
        );
    }
}

export default Likebutton;