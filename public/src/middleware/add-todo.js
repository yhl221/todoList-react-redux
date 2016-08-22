import request from 'superagent';

export default store=>next=>action=>{
    if(action.type==='Add'){
        request.post('./todos')
            .send({text: action.text})
            .end((err, res)=> {
                next({type: 'GETTODOS', todoItem: res.body})
            });
    }
    else
        next(action);
}