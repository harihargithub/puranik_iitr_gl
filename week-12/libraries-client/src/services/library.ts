import axios from 'axios';
import ILibrary from '../models/ILibrary';

// require('dotenv').config({ path: '../../.env' }); // Load environment variables from the root directory
// require('dotenv').config();


const baseUrl = process.env.REACT_APP_API_BASE_URL;
console.log('baseUrl:', baseUrl);

const getLibraries = async () => {
    console.log('getLibraries baseUrl:', baseUrl);
    const response = await axios.get( `${baseUrl}/libraries` );
    return response.data as ILibrary[];
};

const getLibraryById = async ( id : number | string ) => {
    const response = await axios.get( `${baseUrl}/libraries/${id}` );
    return response.data as ILibrary;
};

export {
    getLibraries,
    getLibraryById
};