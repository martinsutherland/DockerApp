import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchData, postData, editData, deleteData } from "./helpers";

const EditUser = ({ data, url, refetch }) => {
  let { id } = useParams();

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const [customer, setCustomer] = useState({});
  const findCustomerById = (id) => {
    const customerDetails = data.find((item) => item.customer_id === id);
    setCustomer(customerDetails);
  };

  const handleCustomerProperty = (event) => {
    customer[event.target.name] = event.target.value;
  };

  const updateUser = async () => {
    await editData(url, customer, customer.customer_id)
    await refetch('customers')
    goBack()
  }

  useEffect(() => {
    findCustomerById(id);
  });

  return (
    <div className="input-layout">
      <p className="id-display">{customer.customer_id}</p>

      <label>First Name</label>
      <input
        className="customer-input"
        id="first-name-input"
        type="text"
        onChange={handleCustomerProperty}
        defaultValue={customer.firstName}
        name="firstName"
      />
      <label>Last Name</label>
      <input
        className="customer-input"
        id="last-name-input"
        type="text"
        onChange={handleCustomerProperty}
        defaultValue={customer.lastName}
        name="lastName"
      />
      <label>Email</label>
      <input
        className="customer-input"
        id="email-input"
        type="email"
        onChange={handleCustomerProperty}
        defaultValue={customer.email}
        name="email"
      />
      <label>Address</label>
      <input
        className="customer-input"
        id="address-input"
        type="text"
        onChange={handleCustomerProperty}
        defaultValue={customer.address}
        name="address"
      />
      <div className="options-container">
        <button className="button" onClick={updateUser} >Update</button>
        <button className="button" onClick={goBack}>
          Back
        </button>
      </div>
    </div>
  );
};

export default EditUser;
