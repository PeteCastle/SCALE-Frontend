import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, BarChart, Rectangle, Bar, Cell, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {

    const data = [
        {
            name: '12 Hours',
            'Detected Mosquito': 25,
            'Number of Recent Fumigation Efforts': 70,
        },
        {
            name: '8 Hours',
            'Detected Mosquito': 5,
            'Number of Recent Fumigation Efforts': 60,
        },
        {
            name: '4 Hours',
            'Detected Mosquito': 10,
            'Number of Recent Fumigation Efforts': 50,
        },
        {
            name: '2 Hours',
            'Detected Mosquito': 15,
            'Number of Recent Fumigation Efforts': 40,
        },
        {
            name: '1 Hour',
            'Detected Mosquito': 20,
            'Number of Recent Fumigation Efforts': 30,
        },
    ];

    const dataLine = [
        {
            name: 'Page A',
            'Recent Detected Mosquitos': 2400,
        },
        {
            name: 'Page B',
            'Recent Detected Mosquitos': 1398,
        },
        {
            name: 'Page C',
            'Recent Detected Mosquitos': 9800,
        },
        {
            name: 'Page D',
            'Recent Detected Mosquitos': 3908,
        },
        {
            name: 'Page E',
            'Recent Detected Mosquitos': 4800,
        },
        {
            name: 'Page F',
            'Recent Detected Mosquitos': 3800,
        },
        {
            name: 'Page G',
            'Recent Detected Mosquitos': 4300,
        },
    ];

    const dataFumigation = [
        {
            name: 'Page A',
            'Number of Recent Fumigation': 2400,
        },
        {
            name: 'Page B',
            'Number of Recent Fumigation': 1398,
        },
        {
            name: 'Page C',
            'Number of Recent Fumigation': 9800,
        },
        {
            name: 'Page D',
            'Number of Recent Fumigation': 3908,
        },
        {
            name: 'Page E',
            'Number of Recent Fumigation': 4800,
        },
        {
            name: 'Page F',
            'Number of Recent Fumigation': 3800,
        },
        {
            name: 'Page G',
            'Number of Recent Fumigation': 4300,
        },
    ];

    const dataPie = [
        { name: 'Week 1', value: 400 },
        { name: 'Week 2', value: 300 },
        { name: 'Week 3', value: 300 },
        { name: 'Week 4', value: 200 },
    ];

    

    return (
        <section className='w-full h-full min-h-screen'>
            <div className='h-full w-11/12 m-auto'>
                <h1 className='font-bold text-2xl py-5'>Live Summary</h1>
                <div className='h-full grid grid-cols-auto grid-rows-2 gap-5 pb-5'>
                    <div className="col-span-1 row-span-1 grid grid-cols-1 md:grid-cols-5 gap-5">
                        <div className="col-span-3 border shadow-md rounded-xl flex flex-col p-5">
                            {/* <div className='w-4/5 m-auto h-fit flex items-center justify-between'>
                                <div className='flex items-center gap-2 py-2'>
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-xs md:text-base'>Detected Mosquito</label>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <input type="checkbox" />
                                    <label htmlFor="" className='text-xs md:text-base'>Number of recent fumigation efforts</label>
                                </div>
                            </div> */}
                            <div className='w-full h-full'>
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart
                                        width={500}
                                        height={300}
                                        data={data}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Detected Mosquito" fill="rgba(224,189,104)" activeBar={<Rectangle fill="rgba(224,189,104)" stroke="rgba(224,189,104)" />} />
                                        <Bar dataKey="Number of Recent Fumigation Efforts" fill="black" activeBar={<Rectangle fill="black" stroke="black" />} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className="col-span-2 border">
                            
                        </div>
                    </div>

                    <div className="col-span-1 row-span-1 flex flex-col">
                        <h1 className='p-5 font-bold text-2xl'>Statistics</h1>
                        <div className='h-full grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <div className="col-span-1 rounded-xl shadow-md flex flex-col gap-5 p-5">
                                {/* <p className='font-semibold'>Recent Detected Mosquitos</p> */}
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={dataLine}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis yAxisId="left" />
                                        <Tooltip />
                                        <Legend />
                                        <Line yAxisId="left" type="monotone" dataKey="Recent Detected Mosquitos" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="col-span-1 rounded-xl shadow-md flex flex-col gap-5 p-5">
                                {/* <p className='font-semibold'>Number of Recent Fumigation</p> */}
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart
                                        width={500}
                                        height={300}
                                        data={dataFumigation}
                                        margin={{
                                            top: 5,
                                            right: 30,
                                            left: 20,
                                            bottom: 5,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis yAxisId="left" />
                                        <Tooltip />
                                        <Legend />
                                        <Line yAxisId="left" type="monotone" dataKey="Number of Recent Fumigation" stroke="#8884d8" activeDot={{ r: 8 }} />
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;
