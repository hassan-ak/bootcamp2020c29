import React from 'react';
import Text from '../components/Text';

export default {
    title: "Text",
    component: Text
}

export const TextLg = () => (
    <Text value={"Text Large"}
        style={{ fontSize: '32px' }}
    />
)

export const TextMd = () => (
    <Text value={"Text Medium"}
        style={{ fontSize: '22px' }}
    />
)

export const TextSm = () => (
    <Text value={"Text Small"}
        style={{ fontSize: 'px' }}
    />
) 