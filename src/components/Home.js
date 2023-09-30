
import { FirstDiv } from './SubComponents/FirstDivView';

export function Home() {
    const img = (
        <img src='../../assets/home2.png' />
    )
    return (
        <div id="home">
            <FirstDiv img={img} />
        </div>
    )
}