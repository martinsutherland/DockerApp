import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import NewUser from './NewUser';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { fetchData, postData, editData, deleteData } from './helpers';
import EditUser from './EditUser';

const queryClient = new QueryClient();

export default function RouterContainer() {
	return (
		<QueryClientProvider client={queryClient}>
			<DataFetch />
		</QueryClientProvider>
	);
}

function DataFetch() {

    const url = 'http://localhost:5000/customers'
    const [closeModal, setCloseModal] = useState(false)
  
    const { refetch, isLoading, error, data } = useQuery('customers', () =>
    fetchData(url)
  );

  if (isLoading){
    return (
      <p>Loading...</p>
    )
  }

  const addUser = () => {
    setCloseModal(true)
  }

  const closeModalWindow = () => {
    setCloseModal(false)
  }
  
  const handleDelete = async (id) => {
    await deleteData(url, id)
    await refetch('customers')
  }


    return (
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<App data={data} handleDelete={handleDelete} addUser={addUser} closeModal={closeModal} closeModalWindow={closeModalWindow} url={url} refetch={refetch} />} />
            <Route path='/:id' element={<EditUser data={data} url={url} refetch={refetch}  />} />
        </Routes>
        </BrowserRouter>
    )
  
}

