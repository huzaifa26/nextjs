import Api from './Api'

const url = 'https://jsonplaceholder.typicode.com'

export const getTodoData = async (id) => {
    const response = await Api(url).get('/todos/' + id);
    return response;
};