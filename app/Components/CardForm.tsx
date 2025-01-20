import React from 'react';
import BillingInfoLabel from "../Components/BillingInfoLabel";

export default function CardForm() {
  return (
    <form className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
     <BillingInfoLabel content="Card Number" inputType="number" holder="Card Number" />
     <BillingInfoLabel content="Expiration Date" inputType="number" holder="DD/MM/YY" />
     <BillingInfoLabel content="Card Holder" inputType="number" holder="Card Holder" />
     <BillingInfoLabel content="CVC" inputType="text" holder="CVC" />
   </form> 
  )
}
