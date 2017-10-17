import React from 'react';

    class Header extends React.Component {
        constructor(props){
            super(props);

            this.state = {
                like: 0,
                fallowers: 0,
            }
        }
        clickLike = () => {
            this.setState({
                like: this.state.like + 1,
            });
        }

        clickFallowers = () => {
            this.setState({
                fallowers: this.state.fallowers + 1,
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
