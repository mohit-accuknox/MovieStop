import React from "react";
import CastCard from '../CastCard/CastCard'

export default{
    title: 'Components/CastCard',
    component:CastCard,
}

const Template = (args) => <CastCard {...args}/>

export const Primary = Template.bind({});


Primary.args = {
    cardData:{
        ImgUrl: "https://tinyurl.com",
        profile_path: "/47s9rkmu",
        name: "Tom Holland",
    },
}