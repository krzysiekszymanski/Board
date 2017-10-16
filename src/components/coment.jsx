import React from 'react';

class Comment extends React.Component {
    render() {
        return (
            <div className={"coments"}>
                <div className={"row"}>
                    <img src={"./images/face.png"} alt="face"/>
                    <div>
                        <span>Mike Ross</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem illum labore nisi quod unde. Aliquam aliquid delectus eum facere, illum itaque iusto nihil non odit officiis porro quasi quia voluptatibus.s</p>
                    </div>

                    <span>1d</span>
                </div>

            </div>
        )
    }
}

export default Comment;
