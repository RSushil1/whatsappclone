import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(3);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((preValue) => --preValue);
        }, 100000);
        count === 0 && navigate('/', {
            state: location.pathname
        });
        return () => clearInterval(interval)
    }, [count, navigate, location])

    return (
        <>
            <div className="d-flex flex-column justify-content-center">
                <div className="spinner-border m-5 text-warning align-center " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h1 className='text-center m-5'>redirecting to you in {count} seconds</h1>
            </div>
        </>
    )
}

export default Spinner