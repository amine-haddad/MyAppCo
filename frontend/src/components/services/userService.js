import axios from 'axios';

const API_URL = 'http://php:8000/api/users';

export const createUser = async (newUser) => {
  try {
    const response = await axios.post(API_URL, newUser);
    return response.data;
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'utilisateur');
  }
};
