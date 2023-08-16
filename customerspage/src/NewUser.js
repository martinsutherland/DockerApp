import React, { useState, useEffect } from 'react'
import { fetchData, postData, editData, deleteData } from './helpers'

const NewUser = ({ closeModalWindow, url, refetch }) => {
  const [customer, setCustomer] = useState({})

  const handleCustomerProperty = event => {
    customer[event.target.name] = event.target.value
  }

  const submitUser = async id => {
    await postData(url, customer)
    await refetch('customers')

    document.getElementById('first-name-input').value = ""
    document.getElementById('last-name-input').value = ""
    document.getElementById('email-input').value = ""
    document.getElementById('address-input').value = ""
  }

  return (
    <div className='modal'>
      <div className='overlay'></div>
      <div className='modal-content'>
        <div className='input-layout'>
          <label>First Name</label>
          <input
            className='customer-input'
            id='first-name-input'
            type='text'
            onChange={handleCustomerProperty}
            name='firstName'
          />
          <label>Last Name</label>
          <input
            className='customer-input'
            id='last-name-input'
            type='text'
            onChange={handleCustomerProperty}
            name='lastName'
          />
          <label>Email</label>
          <input
            className='customer-input'
            id='email-input'
            type='email'
            onChange={handleCustomerProperty}
            name='email'
          />
          <label>Address</label>
          <input
            className='customer-input'
            id='address-input'
            type='text'
            onChange={handleCustomerProperty}
            name='address'
          />
          <div className='options-container'>
          <button className='button' onClick={submitUser}>Add</button>
          </div>
          
        </div>

        <button onClick={closeModalWindow} className='close-modal'>
          &#10006;
        </button>
      </div>
    </div>
  )
}

export default NewUser
