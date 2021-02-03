import Counter from "../components/Counter";

export default {
    title : "Counter",
    component : Counter
}

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