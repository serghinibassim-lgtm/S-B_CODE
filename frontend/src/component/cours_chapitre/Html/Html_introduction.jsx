import React, {useState} from 'react'
import Dev_Editor from "../../code/dev_Editor.jsx";
import {Html_provider }from "../../../context/HtmlContext.jsx"
import IframeScreen from "../../code/Iframe_screen.jsx";

export default function Html_introduction() {
    return (
        <div>
            {/*
            <CodeProvider>
                <Dev_Editor />
                <JsConsole />
            </CodeProvider>
            */}
            <Html_provider>
                <Dev_Editor language={'html'} height={'500px'} width={'500px'}/>
                <IframeScreen h={'500px'} w={'500px'}/>
            </Html_provider>

        </div>
    )
}