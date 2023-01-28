import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import CartProvider from '../Context/CartProvider';
import ModalProvider from '../Context/CartPreviewProvider';

import ScrollToTop from '../../utils/ScrollToTop';

function MainLayout() {
    ScrollToTop();
    return (
        <ModalProvider>
            <CartProvider>
                <Header />
                <Outlet />
                <Footer />
            </CartProvider>
        </ModalProvider>
    );
}

export default MainLayout;
