
export async function fetchData(url) {
    const res = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'ca7142c11c3e4faab076adda6e28e2a5'
    }});
    const data = await res.json();

    if (data !== undefined) {
      return data;
    }
  }
  
  export const postData = async (url, payload) => {
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'ca7142c11c3e4faab076adda6e28e2a5'
      },
    });
    return await res.json();
  };

  export const editData = async (url, payload, id) => {
    const res = await fetch(url + '/' + id, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'ca7142c11c3e4faab076adda6e28e2a5'
      },
    });
    return await res.json();
  };

  export const deleteData = async (url, id) => {
    const res = await fetch(url + '/' + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'Authorization': 'ca7142c11c3e4faab076adda6e28e2a5'
      },
    });
    return await res.json();
  };
