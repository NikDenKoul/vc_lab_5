import "./Form.css"
import {Link} from "react-router-dom";

function InputSimulator() {
    return(
        <main>
            <form className="authorization-form" id="authorizationForm">
                <h1 align="center">Авторизация:</h1>

                <input className="authorization-element" name="authorizationUsername" id="authorizationUsername"
                       placeholder="Имя пользователя">
                </input>
                <input className="authorization-element" name="authorizationPassword" id="authorizationPassword"
                       placeholder="Пароль">
                </input>
                <input className="authorization-element"
                       placeholder="Что-то ещё">
                </input>

                <button className="authorization-element authorization-button">
                    <Link to="/">Авторизоваться</Link>
                </button>
            </form>
        </main>
    )
}

export default InputSimulator;