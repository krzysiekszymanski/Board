import React from 'react';
import Comment from './coment.jsx';

     class Board extends React.Component {
        render() {
            return (
                <section className={"board"}>
                    <div className={"boardContent"}>
                        <a href="#">Hide comments <span>(353)</span></a>
                        <div className={"comments"}>
                            <ul>
                                <li>
                                    <Comment />
                                </li>
                                <li>
                                    <Comment />
                                </li>
                                <li>
                                    <Comment />
                                </li>
                                <li>
                                    <Comment />
                                </li>
                            </ul>
                        </div>
                        <input type="text"/>
                    </div>
                </section>
            )
        }
    }

    export default Board;