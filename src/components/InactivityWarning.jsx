import { useCallback, useEffect, useRef } from 'react'

const InactivityWarning = (callback, deps) => {

    let inactivityTimer = useRef(null);

    const resetTimer = useCallback(() => {

        clearTimeout(inactivityTimer.current);
        inactivityTimer.current = setTimeout(() => {
            alert('Your session is inactive. Please interact to continue.');
        }, 1 * 1000); // 6 seconds for testing purposes
    }, [])

    const handleInteraction = useCallback (() => {
        resetTimer();
    }, [resetTimer]);

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
            clearTimeout(inactivityTimer.current);
        };
    }, [handleInteraction, inactivityTimer, resetTimer]);

    // Use another useEffect to reset the timer periodically
    useEffect(() => {
        const timerInterval = setInterval(() => {
            resetTimer();
        }, 60 * 1000); // Reset the timer every 60 seconds

        // Cleanup
        return () => clearInterval(timerInterval);
    }, [resetTimer]);

    return null; // Since we are using an alert, there is no need for a visible component
};

export default InactivityWarning;
