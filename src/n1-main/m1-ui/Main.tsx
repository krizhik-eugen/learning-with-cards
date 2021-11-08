import React from 'react';
import {Header} from './header/Header';
import {RoutesComponent} from './routes/Routes';


export const Main = () => {
    return (
        <div>
            <Header/>
            <RoutesComponent/>
        </div>
    )
}