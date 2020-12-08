import axios from 'axios';

export const fetchLineChartdataAction = () => {

    
    return (dispatch) => {

        axios.get(`https://5fc952922af77700165ae75d.mockapi.io/api/task/line-chart`)
            .then(res => {
                // console.log('LLLL');
                // console.log(res);
                // console.log('LLLL');
                const data = res.data;
                console.log(data)
                // setData(data);
                dispatch({ type: 'GET_DATA', payload: res.data })
            }).catch(error => {
                console.log(error);
            });



    }
}