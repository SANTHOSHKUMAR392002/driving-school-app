import React, { useState } from 'react';

const PaymentTracking = () => {
    const [amount,setamount]=useState('');

    const handleamount=(e)=>{
    
        if (amount===""){
            alert("Please Enter The Amount")
        }
        else{
            var option={
                key:"rzp_test_GiBXeMfw5P7lga",
                key_secret:"Fxfl521jNeK3IUFvjY7cIIN3",
                amount:amount*100,
                currency:"INR",
                name:"DRIVING SCHOOL PROJECT",
                description:"for testing",
                handler:function(response){
                    alert(response.razorpay_payment_id)
                    
                },
                prefill:{
                    name:"santhosh",
                    email:"sk123@gmail.com",
                    contact:"9874561245"
                },
                notes:{
                    address:"Razorpay Coperate Office"
                },
                theme:{
                    color:"#31daf7"
                }
            }
            var pay=new window.Razorpay(option)
            pay.open()
        }
    }
    return(
        <div style={{paddingTop:"200px"}} className='d-flex flex-column justify-content-center align-item-center w-50 m-auto gap-4'>
            <h1>Razorpay Payment Intergration</h1>
            <input style={{padding:"10px",borderRadius:"20px"}} type='text' placeholder='Enter the Amount'  onChange={(e)=>setamount(e.target.value)}/>
            <button style={{borderRadius:"20px", padding:"10px"}} onClick={handleamount}>Pay</button>
        </div>
    )
}

export default PaymentTracking;
