import axios from 'axios';


export class AxiosAdapter {

    constructor() { }

    api() {
        const api = axios.create({

            baseURL: 'https://us-central1-techops-plataformas-uat.cloudfunctions.net'
        })
        return api
    }


}



