import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import MainLayout from './components/MainLayout/MainLayout';
import HomePage from './components/HomePage/HomePage';
import ShoesSection from './components/ShoesSection/ShoesSection';
import ItemSection from './components/ItemSection/ItemSection';
import PurchasePage from './components/PurchasePage/PurchasePage';
import ItemNotFound from './components/ItemNotFound/ItemNotFound';
import './App.css';

function App() {
    const [shoesCatalogue, setShoesCatalogue] = useState([]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/gucci-react" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route
                        path="/gucci-react/shoes"
                        element={
                            <ShoesSection
                                shoesCatalogue={shoesCatalogue}
                                setShoesCatalogue={setShoesCatalogue}
                            />
                        }
                    />
                    <Route
                        path="/gucci-react/shoes/:id"
                        element={
                            <ItemSection
                                shoesCatalogue={shoesCatalogue}
                                setShoesCatalogue={setShoesCatalogue}
                            />
                        }
                    />
                    <Route
                        path="/gucci-react/purchase"
                        element={<PurchasePage />}
                    />
                    <Route
                        path="/gucci-react/not-made"
                        element={<ItemNotFound />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
