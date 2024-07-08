import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Signup3Style from './Signup3.module.css';

const Signup3 = () => {
    const navigate = useNavigate();

    const redirectToConfirm = () => {
        navigate('/confirmation');
    };
    document.body.style.overflow='hidden'

    return (
        <div className={Signup3Style.container}>
            <Header />
            <div className={Signup3Style.signup}>
                <div className={Signup3Style['progress-bar1']}>
                    <p>Step 3</p>
                    <div className={Signup3Style['progress-container']}>
                        <div className={`${Signup3Style.bar} ${Signup3Style.percent66}`}>66%</div>
                    </div>
                </div>
            
                <div className={Signup3Style['payment-container']}>
                    <div className={Signup3Style['payment-box']}>
                        <h2 className={Signup3Style['payment-title']}>Please enter your payment details</h2>
                        <form onSubmit={redirectToConfirm}>
                            <div className={Signup3Style['form-group']}>
                                <input type="text" required className={Signup3Style['form-control']} id="cardHolderName" placeholder="Card Holder Name" />
                            </div>
                            <div className={Signup3Style['form-group']}>
                                <input type="text" required className={Signup3Style['form-control']} id="cardNumber" placeholder="Card Number" />
                            </div>
                            <div className={Signup3Style['form-group']}>
                                <input type="text" required className={Signup3Style['form-control']} id="expiryDate" placeholder="Expiry Date (MM/YY)" />
                            </div>
                            <div className={Signup3Style['form-group']}>
                                <input type="text" required className={Signup3Style['form-control']} id="cvc" placeholder="CVC" />
                            </div>    
                            <button type="submit" className={`${Signup3Style.btn} ${Signup3Style['btn-block']}`}>Confirm</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup3;
