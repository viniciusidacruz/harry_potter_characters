import { API } from '../config/api';

const getAllCharacters = async () => {
  try {
    const { data } = await API.get('/characters');

    if (data) {
      return data;
    }

    return new Error('Erro ao listar todos os personagens');
  } catch (error) {
    return new Error('Erro ao listar todos os personagens');
  }
};

export const ServiceCharacters = {
  getAllCharacters,
};
