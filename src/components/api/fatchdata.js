import axios from 'axios'

 
    
export const  getCustomer = async () => { 
  const response =  await axios.get('http://127.0.0.1:8080/customer')

  return await response.data;
      
};
 
