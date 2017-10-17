import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className={"coments"}>
                <div className={"row"}>
                    <img src={"./images/face.png"} alt="face"/>
                    <div>
                        <span>{this.props.name}</span>
                        <p> {this.props.text}</p>
                    </div>
                    <span>{this.props.date}</span>
                </div>
            </div>
        )
    }
}

export default Comment;
