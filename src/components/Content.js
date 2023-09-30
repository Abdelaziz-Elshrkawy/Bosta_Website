import { useSelector } from "react-redux"
export function Content() {
    const state = useSelector(state => state.reducer)
    return (
        <div id="content">
            {state}
        </div>
    )
}