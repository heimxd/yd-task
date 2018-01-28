import React from "react";
import ReactDOM from "react-dom";
import Footer from "../../widgets/footer/footer";

class Home extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                hello 我的
                <Footer></Footer>
            </div>
        );
    }

}

ReactDOM.render(<Home></Home>, document.getElementById("app"));