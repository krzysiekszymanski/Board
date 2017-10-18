import React from 'react';

    class Header extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                like: this.props.statistic.like,
                fallowers: this.props.statistic.fallowers,
            }
        }
        clickLike = () => {

            const l = this.state.like +1;
            this.setState({
                like:  l,
            });
            const likes = {like: l};
            fetch('http://localhost:3000/statistic', {
                method : 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(likes)
            }).then(r => r.json())
                .then( data => {
                    console.log( data );
                }).catch( err => {
                console.log( err );
            });


        }

        clickFallowers = () => {

            const r = this.state.fallowers +1;
            this.setState({
                fallowers: r,
            });
            const fallowers = {fallowers: r};
            fetch('http://localhost:3000/statistic', {
                method : 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(fallowers)
            }).then(r => r.json())
                .then( data => {
                    console.log( data );
                }).catch( err => {
                console.log( err );
            });


        }

        render() {
            return (
                <section className={"header"}>
                    <div className={"headerContent container"}>
                        <div className={"personalDate row"}>
                                <img src={"./images/face.png"} alt="face" />
                            <div className={"Name"}>
                                <p>Harvey Spectra <span onClick={this.clickLike}></span></p>
                                <p>New York, USA</p>
                            </div>
                        </div>
                        <div className={"statistic row"}>
                            <div className={"col"}>
                                <span>{this.state.like}</span>
                                <p>Likes</p>
                            </div>
                            <div className={"col"}>
                                <span>15</span>
                                <p>Following</p>
                            </div>
                            <div className={"col"}>
                                <span>{this.state.fallowers}</span>
                                <p>Followers</p>
                            </div>
                            <div className={"col"}>
                                <a onClick={this.clickFallowers}>fallow</a>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }

export default Header;
