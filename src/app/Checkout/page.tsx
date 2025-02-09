
"use client"
import React, { useEffect, useState } from 'react'
import { Product } from '../../../types/product'
import { getCartItems } from '../actions/action';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import {CgChevronRight} from 'react-icons/cg'
import Swal from 'sweetalert2';
import { client } from '@/sanity/lib/client';

const page = () => {
    const [cartItems,setCartItems] = useState<Product[]>([]);
    const [discount,setDiscount] = useState<number>(0)
    const [formValues, setFormValues] = useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        address:"",
        zipCode:"",
        city:"",
        discount:0
    
    })
//for erros
    const [fromErrors,setFormErrors]= useState({
        firstName:false,
        lastName:false,
        email:false,
        phone:false,
        address:false,
        zipCode:false,
        city:false,
    })

    //for get data
    useEffect(()=>{
        setCartItems(getCartItems())
        const appliedDiscount = localStorage.getItem("appliedDiscount");
        if(appliedDiscount){
            setDiscount(Number(appliedDiscount))
        }
    },[])

    const subTotal = cartItems.reduce((total,item)=> total+item.price * item.quantity,0 )
    const total = Math.max(subTotal - discount, 0);

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setFormValues({
            ...formValues,
            [e.target.id]:e.target.value
        })
    }

    //validation
    const validateFrom = ()=>{
        const errors = {
            firstName:!formValues.firstName,
            lastName:!formValues.lastName,
            address:!formValues.address,
            city:!formValues.city,
            zipCode:!formValues.zipCode,
            email:!formValues.email,
            phone:!formValues.phone,
        }
        setFormErrors(errors);
        return Object.values(errors).every((error) => !error);
    };
    //place order
    const handelPlaceOrder = async ()=>{

Swal.fire({
    title: 'Are you sure you want to place order?',
    text: 'Please wait a moment.',
    icon: 'info',
    showCancelButton: true,
    confirmButtonColor:"#3085d6",
    cancelButtonColor:"#d33",
    confirmButtonText: 'Proceed!',
}).then((result)=>{
    if(result.isConfirmed){
        if(validateFrom()){
            localStorage.removeItem('appliedDiscount')
            Swal.fire(
                'Success!',
                "Your order has been successfully proceed",
                'success'
            )
        }else{
            Swal.fire(
                'Error',
                'Please fill all fields before proceed!',
                'error'
            );
        }
    }
});

    //    order
       const orderData ={
        _type:'order',
        firstName:formValues.firstName,
        lastName:formValues.lastName,
        email:formValues.email,
        address:formValues.address,
        city:formValues.city,
        phone:formValues.phone,
        zipCode:formValues.zipCode,
        discount:formValues.discount,
        cartItems:cartItems.map(item =>({
            _type:'reference',
            _ref:item._id,
        })),
        OrderDate:new Date().toISOString(),
       };
       try{
        await client.create(orderData)
        localStorage.removeItem('appliedDiscount')
       }catch(error){
        console.error("error, creating order",error)
       }
    };

  return (
    <div className={`min-h-screen bg-gray-50`}>
    {/* Breadcrumb */}
    <div className="mt-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center gap-2 py-4">
          <Link
            href="/cart"
            className="text-[#666666] hover:text-black transition text-sm"
          >
            Cart
          </Link>
          <CgChevronRight className="w-4 h-4 text-[#666666]" />
          <span className="text-sm">Checkout</span>
        </nav>
      </div>
    </div>

    {/* Main Content */}
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-white border rounded-lg p-6 space-y-4">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="flex items-center gap-4 py-3 border-b"
              >
                <div className="w-16 h-16 rounded overflow-hidden">
                  {item.image && (
                    <Image
                      src={urlFor(item.image).url()}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className="text-sm font-medium">
                  ${item.price * item.quantity}
                </p>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
          <div className="text-right pt-4">
            <p className="text-sm">
              Subtotal: <span className="font-medium">${subTotal}</span>
            </p>
            <p className="text-sm">
              Discount: <span className="font-medium">-${discount}</span>
            </p>
            <p className="text-lg font-semibold">
              Total: ${total.toFixed(2)}
            </p>
          </div>
        </div>

  
        {/* Billing Form */}
<div className="bg-white border rounded-lg p-6 shadow-md">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing Information</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {/* First Name */}
    <div className="flex flex-col">
      <label htmlFor="firstName" className="text-gray-700 font-medium mb-1">
        First Name
      </label>
      <input
        id="firstName"
        placeholder="Enter your first name"
        value={formValues.firstName}
        onChange={handleInputChange}
        className={`border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 ${
          fromErrors.firstName ? "border-red-500" : "border-gray-300"
        }`}
      />
      {fromErrors.firstName && (
        <p className="text-xs text-red-500 mt-1">First name is required.</p>
      )}
    </div>

    {/* Last Name */}
    <div className="flex flex-col">
      <label htmlFor="lastName" className="text-gray-700 font-medium mb-1">
        Last Name
      </label>
      <input
        id="lastName"
        placeholder="Enter your last name"
        value={formValues.lastName}
        onChange={handleInputChange}
        className={`border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 ${
          fromErrors.lastName ? "border-red-500" : "border-gray-300"
        }`}
      />
      {fromErrors.lastName && (
        <p className="text-xs text-red-500 mt-1">Last name is required.</p>
      )}
    </div>
  </div>

  {/* Address */}
  <div className="flex flex-col mt-4">
    <label htmlFor="address" className="text-gray-700 font-medium mb-1">
      Address
    </label>
    <input
      id="address"
      placeholder="Enter your address"
      value={formValues.address}
      onChange={handleInputChange}
      className={`border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 ${
        fromErrors.address ? "border-red-500" : "border-gray-300"
      }`}
    />
    {fromErrors.address && (
      <p className="text-xs text-red-500 mt-1">Address is required.</p>
    )}
  </div>

  {/* City & Zip Code */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="flex flex-col">
      <label htmlFor="city" className="text-gray-700 font-medium mb-1">
        City
      </label>
      <input
        id="city"
        placeholder="Enter your city"
        value={formValues.city}
        onChange={handleInputChange}
        className={`border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 ${
          fromErrors.city ? "border-red-500" : "border-gray-300"
        }`}
      />
      {fromErrors.city && (
        <p className="text-xs text-red-500 mt-1">City is required.</p>
      )}
    </div>

    <div className="flex flex-col">
      <label htmlFor="zipCode" className="text-gray-700 font-medium mb-1">
        Zip Code
      </label>
      <input
        id="zipCode"
        placeholder="Enter your zip code"
        value={formValues.zipCode}
        onChange={handleInputChange}
        className={`border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 ${
          fromErrors.zipCode ? "border-red-500" : "border-gray-300"
        }`}
      />
      {fromErrors.zipCode && (
        <p className="text-xs text-red-500 mt-1">Zip Code is required.</p>
      )}
    </div>
  </div>

  {/* Phone & Email */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
    <div className="flex flex-col">
      <label htmlFor="phone" className="text-gray-700 font-medium mb-1">
        Phone
      </label>
      <input
        id="phone"
        placeholder="Enter your phone number"
        value={formValues.phone}
        onChange={handleInputChange}
        className={`border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 ${
          fromErrors.phone ? "border-red-500" : "border-gray-300"
        }`}
      />
      {fromErrors.phone && (
        <p className="text-xs text-red-500 mt-1">Phone is required.</p>
      )}
    </div>

    <div className="flex flex-col">
      <label htmlFor="email" className="text-gray-700 font-medium mb-1">
        Email
      </label>
      <input
        id="email"
        placeholder="Enter your email address"
        value={formValues.email}
        onChange={handleInputChange}
        className={`border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 ${
          fromErrors.email ? "border-red-500" : "border-gray-300"
        }`}
      />
      {fromErrors.email && (
        <p className="text-xs text-red-500 mt-1">Email is required.</p>
      )}
    </div>
  </div>

  {/* Place Order Button */}
  <button
    className="mt-6 w-full bg-[#2A254B] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
    onClick={handelPlaceOrder}
  >
    Place Order
  </button>
</div>

      </div>
    </div>
  </div> 

)
}

export default page
