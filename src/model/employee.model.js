import axios from "axios";

const SERVER_URL = "http://localhost:3001";

export const getAllBooks = async () => {
  const response = await axios.get(SERVER_URL + "/books");
  return response.data.result;
};

export const getBooksById = async (id) => {
  const response = await axios.get(SERVER_URL + "/books/" + id);
  return response.data.result;
};

export const getBooksByTitle = async (title) => {
  try {
    const response = await axios.get(SERVER_URL + "/search/books/" + title);
    if (response.status === 200) {
      return response.data.result;
    } else {
      return [];
    }
  } catch {
    return [];
  }
};

export const addBook = async (formData) => {
  const response = await axios.post(SERVER_URL + "/books", formData);
  return response.data;
};

export const updateBookById = async (id, formData) => {
  const response = await axios.patch(
    SERVER_URL + "/update/books/" + id,
    formData
  );
  return response.data;
};

export const deleteBookById = async (id) => {
  const response = await axios.delete(SERVER_URL + "/delete/books/" + id);
  return response.data;
};

function toBase64(arr) {
  return btoa(
    arr?.reduce((data, byte) => data + String.fromCharCode(byte), "")
  );
}
export function bufferToImage(data) {
  let profilePicBuffer = data.data;
  const url = `data:image/jpeg;base64,${toBase64(profilePicBuffer)}`;
  return url;
}
