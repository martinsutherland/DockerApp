import { fetchData, postData, editData, deleteData } from './helpers'
import './App.css'
import NewUser from './NewUser'

function App ({ data, handleDelete, addUser, closeModal, closeModalWindow, url, refetch }) {

  const listCustomers = data.map((customer, index) => {

    return (
      <tr key={index}>
        <td>
          {customer.firstName} {customer.lastName}
        </td>
        <td>{customer.email}</td>
        <td>{customer.address}</td>
        <td>{customer.customer_id}</td>
        <td>
          <a href={customer.customer_id}>
            Edit
          </a>
        </td>
        <td>
          <button className='button' onClick={() => handleDelete(customer.customer_id)}>
            Delete
          </button>
        </td>
      </tr>
    )
  })

  return (
    <>
      <div className='options-container'>
        <button className='button' onClick={addUser}>Add User</button>
      </div>

      <div className='table-container'>
        <table className='data-table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Customer ID</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{listCustomers}</tbody>
        </table>
        {closeModal && <NewUser closeModalWindow={closeModalWindow} url={url} refetch={refetch} />}
      </div>
    </>
  )
}

export default App
