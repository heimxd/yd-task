import "./footer.css";
import React from "react";

export default class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <footer>
                <div className="footer-wrap">
                    <div className="btn">首页</div>
                    <div className="btn">我的</div>
                </div>
            </footer>
        );
    }
}