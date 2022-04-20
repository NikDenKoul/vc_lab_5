import './styles.css';
import {Link} from "react-router-dom";

function ButtonSimulator() {
    return(
        <main>
            <div className="BS-div">
                <button>MAIN main</button>
                <br/>
                <box>
                    <box>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                    </box>
                    <br/>
                    <box>
                        <button>4</button>
                        <button>5</button>
                        <button>6</button>
                    </box>
                    <br/>
                    <box>
                        <button>7</button>
                        <button>8</button>
                        <button>9</button>
                    </box>
                </box>
                <br/>
                <button><Link to="/">Go back, I want to be monkey</Link></button>
            </div>
        </main>
    )
}

export default ButtonSimulator;