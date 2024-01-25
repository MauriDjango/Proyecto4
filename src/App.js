import React from 'react';
import { BrowserRouter, BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom'
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import MainNav from './components/MainNav';
import Filters from './components/Filters';
import { useState } from 'react';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';
import { userObjectStore } from './services/db/UserObjectStore';
import SuccessRegisterModal from './components/modals/SuccessRegisterModal';
import ItemList from './components/ItemList';
import ScrollToTopButton from './components/ScrollToTop';
import InactivityWarning from './components/InactivityWarning';
import ProfilePage from './components/ProfilePage';

function App() {
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        gender: '',
        password: '',
        profileImage: ''
    });


    const [showLoginModal, setShowLoginModal] = useState(false);
    const [items, setItems] = useState([]);

    const openLoginModal = () => {
        setShowLoginModal(true);
        console.log('openLoginModal called ', showLoginModal);
    };

    const closeLoginModal = () => {
        setShowLoginModal(false);
    };

    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const openRegisterModal = () => {
        setShowRegisterModal(true);
        closeLoginModal();
    };

    const closeRegisterModal = () => {
        setShowRegisterModal(false);
    };

    const [showSuccessRegisterModal, setShowSuccessRegisterModal] = useState(false);
    const openSuccessRegisterModal = () => {
        setShowSuccessRegisterModal(true);
    };

    const closeSuccessRegisterModal = () => {
        setShowSuccessRegisterModal(false);
    };

    const setLoginInfo = () => {
        console.log('Has not been implemented yet');
    };

    const registerUser = async (user) => {
        try {
            console.log('registerUser', user);
            const userData = await userObjectStore.getById(user.email);
            if (userData) {
                alert('This email address is already registered');
            } else {
                await userObjectStore.create(user);
                openSuccessRegisterModal();
                closeRegisterModal();
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <HeaderComponent
                                openLoginModal={openLoginModal}
                                userData={userData}
                            />
                            <MainNav />
                            <Filters />
                            {showLoginModal && (
                                <LoginModal
                                    closeLoginModal={closeLoginModal}
                                    showLoginModal={showLoginModal}
                                    openRegisterModal={openRegisterModal}
                                    setLoginInfo={setLoginInfo}
                                />
                            )}
                            {showRegisterModal && (
                                <RegisterModal
                                    registerUser={registerUser}
                                    closeRegisterModal={closeRegisterModal}
                                    showRegisterModal={showRegisterModal}
                                    userData={userData}
                                />
                            )}
                            {showSuccessRegisterModal && (
                                <SuccessRegisterModal
                                    showSuccessRegisterModal={showSuccessRegisterModal}
                                    closeSuccessRegisterModal={closeSuccessRegisterModal}
                                />
                            )}
                            <ItemList />
                            <ScrollToTopButton />
                            <InactivityWarning />
                        </>
                    }
                />
                <Route path="/profile" element={
                    <>
                    <HeaderComponent
                        openLoginModal={openLoginModal}
                        userData={userData}
                    />
                    <ProfilePage userData={userData} />
                    </>
                }
            />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
