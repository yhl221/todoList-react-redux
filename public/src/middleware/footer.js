import request from 'superagent';

export  default store=>next=>action=> {
    if (action.type === 'ButtonName') {
        request.put('./setName')
            .send({name: action.name})
            .end((err, res)=> {
                next({type: 'ButtonGETTODOS', state: res.body})
            });
    }
    else
        next(action)
}