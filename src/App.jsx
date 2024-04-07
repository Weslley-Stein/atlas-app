import React from 'react';
import logo from './assets/logo.svg';

export default function App(){
  return(
    <main className="flex justify-between font-mono">
      <aside className="bg-white w-4/5 h-screen flex justify-center items-center flex-col">
        <h1 className="text-3xl font-bold">Atlas - Infrastructure Manager</h1>
        <img src={logo} className="m-8"/>
        <h4 className="text-sm font-thin">Manage your Infrastructure in a way you never seen before.</h4>
      </aside>
      <aside className="bg-black w-3/5 h-screen">
        
      </aside >
    </main>
  );
};