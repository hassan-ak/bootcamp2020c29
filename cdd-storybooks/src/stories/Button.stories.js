import Button from "../components/Button";

let buttonStories = {
    title: "Button",
    component: Button
}
export default buttonStories;

export function DefaultButton() {
    return(
        <Button title="Hello"/>
    )
    
}

export function SmallButton() {
    return(
        <Button title="Hello" size="small"/>
    )
    
}

export function LargeButton() {
    return(
        <Button title="Hello" size="large"/>
    )
    
}