import React from 'react';



    class Header extends React.Component {
        render() {
            return (
                <section className={"header"}>
                    <div className={"headerContent container"}>
                        <div className={"personalDate row"}>
                                <img src={"./images/face.png"} alt="face" />
                            <div className={"Name"}>
                                <p>Harvey Spectra <span></span></p>
                                <p>New York, USA</p>
                            </div>
                        </div>
                        <div className={"statistic row"}>
                            <div className={"col"}>
                                <span>10</span>
                                <p>Likes</p>
                            </div>
                            <div className={"col"}>
                                <span>15</span>
                                <p>Following</p>
                            </div>
                            <div className={"col"}>
                                <span>20</span>
                                <p>Followers</p>
                            </div>
                            <div className={"col"}>
                                <a href="#">fallow</a>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }

export default Header;
