import React from 'react'
import Features from '../../component/features/Features'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Chart from '../../component/chart/Chart';
import { xAxisData } from '../../datas';
import WidgetSm from '../../component/widgetSm/WidgetSm';
import WidgetLg from '../../component/widgetLg/WidgetLg';

import './Home.css'

export default function Home() {

  let info = [
    {
      id : 1 ,
      title :'Revanue' ,
      money :'$2.45' ,
      rate :'-11.4' ,
      icon :<ArrowDownwardIcon className='featureIcon negative'/> ,
      sub :'Compared to last month'
    },

    {
      id : 2 ,
      title :'Sales' ,
      money :'$3.5' ,
      rate :'-1.4' ,
      icon :<ArrowDownwardIcon className='featureIcon negative'/> ,
      sub :'Compared to last month'
    },

    {
      id : 3 ,
      title :'Cost' ,
      money :'$2.415' ,
      rate :'+2.4' ,
      icon :<ArrowUpwardIcon className='featureIcon'/> ,
      sub :'Compared to last month'
    },
  ]

  return (
      <>
      <div className='home'>
        <Features {...info[0]} />
        <Features {...info[1]} />
        <Features {...info[2]} />
      </div>
      
      <div className='chart-container'>
        <Chart grid title='Monthly Sale' data={xAxisData} datakey='sale' />
      </div>

      <div className='homeWidgets'>
        <WidgetSm/>
        <WidgetLg/>
      </div>
      </>
    
    
  )
}
