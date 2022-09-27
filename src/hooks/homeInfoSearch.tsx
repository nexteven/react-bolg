import httpRequest from '../axios/axios';

function homeInfoSearch() {
    httpRequest
        .post('/api/get_describe')
        .then((res) => {
            console.log(JSON.stringify(res.data));
            return res.data;
        })
        .catch(() => {
            return false;
        });
}

export { homeInfoSearch };
