// src/components/Plans.js

import React from 'react';
import Header from './Header';
import PlansStyle from './Plans.module.css'


const Plans = () => {
    document.body.style.overflow='hidden';

    return (
        <div>
            <Header />
            <div className={PlansStyle['plans-container']}>
                <div className={PlansStyle['plan-card']}>
                    <h2>Basic Plan</h2>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Price</h4>
                        <p className={PlansStyle['price']}>$9.99/month</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Quality</h4>
                        <p className={PlansStyle['quality']}>Good</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Resolution</h4>
                        <p className={PlansStyle['resolution']}>480p</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Devices</h4>
                        <p className={PlansStyle['devices']}>1 device</p>
                    </div>
                </div>
                <div className={PlansStyle['plan-card']}>
                    <h2>Standard Plan</h2>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Price</h4>
                        <p className={PlansStyle['price']}>$13.99/month</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Quality</h4>
                        <p className={PlansStyle['quality']}>Good</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Resolution</h4>
                        <p className={PlansStyle['resolution']}>720p</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Devices</h4>
                        <p className={PlansStyle['devices']}>2 devices</p>
                    </div>
                </div>
                <div className={PlansStyle['plan-card']}>
                    <h2>Premium Plan</h2>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Price</h4>
                        <p className={PlansStyle['price']}>$17.99/month</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Quality</h4>
                        <p className={PlansStyle['quality']}>Best</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Resolution</h4>
                        <p className={PlansStyle['resolution']}>1080p</p>
                    </div>
                    <hr />
                    <div className={PlansStyle['plan-info']}>
                        <h4>Devices</h4>
                        <p className={PlansStyle['devices']}>4 devices</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;
