import Counter from "../components/Counter";
import { withKnobs, number } from '@storybook/addon-knobs';

let counterStories = {
    title : "Counter",
    component : Counter,
    decorators: [withKnobs]
}

export default counterStories;

export function CounterDefault(){
    return(
        <Counter/>
    )
}

export function CounterValue(){
    return(
        <Counter initialValue={number('initialValue',35)}/>
    )
}

export function CounterColor(){
    return(
        <Counter initialValue={34} backgroundColor="red"/>
    )
}