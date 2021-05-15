import React, { useEffect, useState } from 'react';


const Covid = () => {
  
  const [data, setData] = useState([]);

    const getCovidData = async() => {
        try {
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualData = await res.json();
            console.log(actualData.statewise[0]); 
            setData(actualData.statewise[0]);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
      getCovidData();
    }, [])

    return (
        <>
            <h3 className="live">🔴Live</h3>
            <h2 className="head">COVID-19 CORONAVIRUS TRACKER</h2>

 <div className="grid-container">
            <div className="grid-item grid-item1">
              <span> OUR </span> <h3>COUNTRY</h3>
                <h4>INDIA</h4>
            </div>
            <div className="grid-item grid-item2">
                <span> TOTAL </span> <h3>RECOVERED</h3>
                <h4>{data.recovered}</h4>
            </div>
            <div className="grid-item grid-item3">
              <span> TOTAL </span> <h3>CONFIRMED</h3>
                <h4>{data.confirmed}</h4>
            </div>
            <div className="grid-item grid-item4">
              <span> TOTAL </span> <h3>DEATHS</h3>
                <h4>{data.deaths}</h4>
            </div>
            <div className="grid-item grid-item5">
              <span> TOTAL </span> <h3>ACTIVE</h3>
                <h4>{data.active}</h4>
            </div>
            <div className="grid-item grid-item6">
              <span> LAST </span> <h3>UPDATED</h3>
                <h4>{data.lastupdatedtime}</h4>
            </div>
</div>
        </>
    )
}

export default Covid;

