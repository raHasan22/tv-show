import React, { useEffect, useState } from 'react';

const Home = () => {
    const [data, setData]= useState([]);
    useEffect(()=>{
        fetch('https://api.tvmaze.com/search/shows?q=all')
        .then(response => response.json())
        .then(data => setData(data))
    },[])
    console.log(data)
    return (
        <div>
            <h1 className='text-center text-5xl font-mono font-bold'>Details</h1>
            <div className='mx-auto my-10 grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-5
            '>
                {
                    data.map(d => <div key={d.show.id} className="card bg-base-100 shadow-xl">
                    {
                       d.show.image?.original ? <figure><img src={d.show.image?.original} alt="Show" /></figure> : <h1 className='text-3xl font-mono text-center my-5 text-red-600'>
                        no banner
                       </h1>
                    }
                    <div className="card-body">
                      <h2 className="card-title">
                       {d.show.name}
                        <div className="badge badge-secondary">{d.score}</div>
                      </h2>
                      <p>{d.show.summary.replace(/<[^>]+>/g, "")} </p>
                      <p><span className='font-sans font-bold'>Link:</span><a href={`${d.show.url}`}> {d.show.url}</a> </p>
                      <div className="card-actions justify-end">
                        <div className="badge badge-outline">{d.show.type}</div>
                        <div className="badge badge-outline">{d.show.language}</div>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Home;