import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './Pages/Home';
import WeatherTable from './Pages/WeatherForecast';
const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/weather' element={<WeatherTable />} />
            </Routes>
        </Layout>
    );
}

export default App;