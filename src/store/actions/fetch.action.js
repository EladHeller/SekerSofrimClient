const types = require('../../common/types');
import config  from '../../common/config';
import { dispatch } from 'redux';

class FetchAction {
    loadingData(isLoading = true) {
        return {
            type: types.loadingData,
            isLoading
        };
    }

    fetchSuccess(data){
        return {
            type:types.fetchSuccess,
            data
        };
    };
    fetchFailed(hasError){
        return {
            type:types.fetchFailed,
            hasError
        };
    }

    fetchData (url, method ='GET', body = undefined) {
        return (dispatch) => {
            const fetchRequest = new Request(config.rest.serverUrl + url,{method,body:JSON.stringify(body), credentials:'include'});
            dispatch(this.loadingData(true));
            fetch(fetchRequest).then((response) => {
                dispatch(this.loadingData(false));
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(result => dispatch(this.fetchSuccess(result)))
            .catch(() => dispatch(this.fetchFailed(true)));
        };
    }
}

export default FetchAction;