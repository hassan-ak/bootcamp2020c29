import React from 'react'
import Counter from '../components/Counter'

export default {
    title: 'Counter',
    component: Counter
}

export const defaultCounter = () => (
    <Counter />
)

export const CounterStartsWith10 = () => (
    <Counter initialValue={10} />
)