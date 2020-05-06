import axios from "axios";

class Service{

    constructor(name){
        this.url = '/rest/'+name;
        this.header = {headers: {"Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"}};

    }
    getAll(params, cancelToken) {
        return axios
            .get(this.url, this.header)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error);
            });
    }

    save(item) {
        return axios
            .post(this.url, item, this.header)
            .then(response => {

            })
            .catch(error => {
                console.log(error);
            });
    }

    delete(item){
        return axios
            .delete(this.url+'/'+item, this.header)
            .then(response => {

            })
            .catch(error => {
                console.log(error);
            })
    }

    canDelete(id){
        return axios
            .get(this.url + '/can-delete/' + id, this.header)
            .then(response => {
                return response.data
            })
            .catch(error => {
                console.log(error);
            })
    }
}

export default Service;