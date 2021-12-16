import ApiServer from '../common/fetch';

test('apiget_datastate_response', async  () => {
    
   return ApiServer.getApi('comics')(
    (response)=>{
        console.log("Respuesta");
        console.log(response);
    }, (error)=>{
        console.log("Error ");
        console.log(error);
    });
 
});