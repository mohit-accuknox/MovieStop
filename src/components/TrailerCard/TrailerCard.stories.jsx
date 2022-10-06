import React from "react";
import TrailerCard from '../TrailerCard/TrailerCard'

export default{
    title: 'Components/TrailerCard',
    component: TrailerCard,
}

const Template = (args) => <TrailerCard {...args}/>

export const Primary = Template.bind({});

Primary.args = {
    trailerData:{
        name: "Honey Singh",
        key: 'zM6s3JgF9_0',
    }
}