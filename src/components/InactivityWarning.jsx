import React, { useState, useEffect } from 'react';

const InactivityWarning = () => {
    const [isInactive, setIsInactive] = useState(false);

    let inactivityTimer;

    const resetTimer = () => {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            setIsInactive(true);
            alert('Your session is inactive. Please interact to continue.');
        }, 1 * 1000); // 6 seconds for testing purposes
    };

    const handleInteraction = () => {
        setIsInactive(false);
        resetTimer();
    };

    useEffect(() => {
        // Initial setup
        resetTimer();

        // Event listeners for user interactions
        document.addEventListener('mousemove', handleInteraction);
        document.addEventListener('keydown', handleInteraction);

        // Cleanup
        return () => {
            document.removeEventListener('mousemove', handleInteraction);
            document.removeEventListener('keydown', handleInteraction);
            clearTimeout(inactivityTimer);
        };
    }, []);

    // Use another useEffect to reset the timer periodically
    useEffect(() => {
        const timerInterval = setInterval(() => {
            resetTimer();
        }, 60 * 1000); // Reset the timer every 60 seconds

        // Cleanup
        return () => clearInterval(timerInterval);
    }, []);

    return null; // Since we are using an alert, there is no need for a visible component
};

export default InactivityWarning;
