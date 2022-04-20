import "./TitlesSimulator.css"
import {Link} from "react-router-dom"

function TitlesSimulator() {
    return(
        <main>
            <header class="TitlesSimulator-header">
                <h1>MAIN main</h1>
                <h2>This is titles simulator</h2>
                <h3>There are some titles demonstrated here</h3>
                <box>
                    <h5>"Любовью чужой горят города</h5>
                    <h5>Извилистый путь затянулся петлёй</h5>
                    <h5>Когда все дороги ведут в никуда</h5>
                    <h4><Link to="/">НАСТАЛА ПОРА ВОЗВРАЩАТЬСЯ ДОМОЙ"</Link></h4>
                </box>
            </header>
        </main>
    )
}

export default TitlesSimulator;