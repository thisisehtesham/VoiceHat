import React from 'react'
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    );

    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>VoiceHat News</h2>
                <InfoIcon />
            </div>

            {newsArticle("Ensuring mental wellness at work", 'Top news - 9099 readers')}
            {newsArticle("Study abroad: the right option?", 'Top news - 8728 readers')}
            {newsArticle("Tesla hits new highs", 'Cars & auto - 348 readers')}
            {newsArticle("Bitcoin Breaks $22k", 'Crypto - 531 readers')}
            {newsArticle("A digital-first approach to insurance", 'Finance - 846 readers')}
            {newsArticle("When can ChatGPT go mainstream?", 'Tech - 4550 readers')}
        </div>
        
    );
}



export default Widgets