import ReactDOM  from "react-dom";
import App from "./App/App"
import "./CSS/reset.css"
import "./CSS/style.css"

function Index(){
    return(
        <App/>
    )
}

ReactDOM.render(<Index/>, document.querySelector(".root"))

