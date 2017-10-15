import React from 'react';

     class Board extends React.Component {
        render() {
            return (
                <section className={"board"}>
                    <div className={"boardContent"}>
                        <a href="#">Hide comments <span>(353)</span></a>
                        <div className={"comments"}>
                            <ul>
                                <li>1</li>
                                <li>2</li>
                                <li>3</li>
                                <li>4</li>
                                <li>5</li>
                                <li>6</li>
                            </ul>
                        </div>
                    </div>
                </section>
            )
        }
    }

    export default Board;