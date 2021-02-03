import Counter from "../components/Counter";

let counterStories = {
    title : "Counter",
    component : Counter
}

export default counterStories;

export function CounterDefault(){
    return(
        <Counter/>
    )
}

export function CounterValue(){
    return(
        <Counter initialValue={34}/>
    )
}

export function CounterColor(){
    return(
        <Counter initialValue={34} backgroundColor="red"/>
    )
}