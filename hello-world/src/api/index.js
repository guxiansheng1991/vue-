import axios from 'axios';

export default {
  ajaxGetMethod: params => axios.get('/xx', {params: params}).then(res => res.data),
  ajaxPostMethod: body => axios.get('/yy', body).then(res => res.data)
}
