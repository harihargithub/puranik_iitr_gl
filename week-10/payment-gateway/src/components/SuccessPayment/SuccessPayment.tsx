import Dialog from "../Dialog/Dialog";
import PaymentOptions from "../../types/PaymentOptions";

import './SuccessPayment.css';

type Props = {
    onClose: () => void,
    paymentOption: PaymentOptions
}

const SuccessPayment = ( props : Props ) => {
    return (
        <Dialog
            show={true}
        >
            <div style={{ textAlign: 'center' }}>
                <h2 className="order-value">Successful payment of Rs. 5000</h2>
                <p className="order-delivery">Your order will be delivered by Sun Oct 22 2023</p>

                <div>Transaction Id:	123456789012</div>
                <div>Transaction Date:	12-03-2021</div>
                <div>Payment Mode:	{props.paymentOption}</div>

                <button
                    className='btn btn-confirm'
                    onClick={props.onClose}
                >
                    Close
                </button>
            </div>
        </Dialog>
    );
}
 
export default SuccessPayment;