import AsyncStorage from '@react-native-async-storage/async-storage';

const DataBase = ({ callBack, key, data }) => {
  const SaveData = async (data) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(data));
      console.log('Dados salvos com sucesso');
    } catch (error) {
      console.log('Erro ao salvar dados:', error);
    }
  };

  const ViewData = async () => {
    try {
      const storedData = await AsyncStorage.getItem(key);
      if (storedData !== null) {
        const parsedData = JSON.parse(storedData);
        console.log('Dados armazenados:', parsedData);
      } else {
        console.log('Nenhum dado encontrado');
      }
    } catch (error) {
      console.log('Erro ao obter dados:', error);
    }
  };

  const DeleteData = async () => {
    try {
      await AsyncStorage.removeItem(key); // Usando a chave dinâmica
      console.log('Dados removidos com sucesso');
    } catch (error) {
      console.log('Erro ao remover dados:', error);
    }
  };

  const UpdateData = async (updatedData) => {
    try {
      const existingData = await AsyncStorage.getItem(key);
      if (existingData !== null) {
        const parsedData = JSON.parse(existingData);
        const newData = { ...parsedData, ...updatedData };
        await AsyncStorage.setItem(key, JSON.stringify(newData));
        console.log('Dados atualizados com sucesso');
      }
    } catch (error) {
      console.log('Erro ao atualizar dados:', error);
    }
  };

  if (callBack === 'Save') {
    return SaveData(data);
  } else if (callBack === 'View') {
    return ViewData();
  } else if (callBack === 'Delete') {
    return DeleteData();
  } else if (callBack === 'Update') {
    return UpdateData(data);
  } else {
    console.log('Callback não reconhecido');
  }
};

export default DataBase;
