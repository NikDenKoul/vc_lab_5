import "./Form.css"

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

                <button type="submit" className="authorization-element authorization-button">
                    Авторизоваться
                </button>
            </form>
        </main>
    )
}

export default InputSimulator;