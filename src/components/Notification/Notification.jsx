import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose, IoInformationCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import './Notification.css';

const Notification = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 2000); // Show after 2 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="notification-toast"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                >
                    <div className="notification-content">
                        <div className="notification-icon">
                            <IoInformationCircle />
                        </div>
                        <div className="notification-text">
                            <p>Contact Student Nominees for support or queries.</p>
                            <Link to="/about#student-nominees" onClick={handleClose} className="notification-link">
                                View Nominee Contacts
                            </Link>
                        </div>
                        <button className="notification-close" onClick={handleClose} aria-label="Close notification">
                            <IoClose />
                        </button>
                    </div>
                    <div className="notification-progress">
                        <motion.div
                            className="progress-bar"
                            initial={{ width: "100%" }}
                            animate={{ width: "0%" }}
                            transition={{ duration: 8, ease: "linear" }}
                            onAnimationComplete={handleClose}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Notification;
