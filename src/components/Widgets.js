import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { grey } from '@mui/material/colors';

function Widgets() {

const newsArticle = (heading, subtitle) => (
    <div className='widgets_article'>
        <div className='widgets_articleLeft'>
            <FiberManualRecordIcon sx={{ fontSize: 10 , color:'gray'}}/>
        </div>

        <div className='widgets_articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
);

  return (
    <div className='widgets'>
        <div className='widgets_header'>
            <h2>LinkedIn News</h2>
            <InfoIcon sx={{ fontSize: 12 , color:'gray',marginRight:'10'}}/>
        </div>
        {newsArticle("FMCG to step up ad spends","Beverage giant Bisleri Ltd is looking to increase its marketing budget by 30%-40% this financial year")}
        {newsArticle("Prioritising employee well-being","There has been a 51% increase in companies offering outpatient department benefits")}
        {newsArticle("Fidelity International to hire 800","Fidelity International, a global investment and retirement savings firm")}
        {newsArticle("Travel loans rise in non-metros","More than seven in 10 people across India who took such loans are salaried professionals")}
        {newsArticle("Young buyers to drive retail growth","Credit card spending hit an all-time high of 1.4 lakh crore in May this year")}

    </div>
  );
}

export default Widgets