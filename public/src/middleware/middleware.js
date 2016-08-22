import request from 'superagent';

export  default store=>next=>action=> {
    switch (action.type) {
        case 'Delete':
            request.delete('./todos')
                .send({index:action.index})
                .end((err,res)=>{
                    next({type:'GETTODOS',todoItem:res.body})
                });
            break;
        case 'Toggle':
            request.put('./todos')
                .send({index:action.index})
                .end((err,res)=>{
                    next({type:'GETTODOS',todoItem:res.body})
                });
            break;
        case 'ButtonName':
            request.put('./setName')
                .send({name:action.name})
                .end((err,res)=>{
                    next({type:'ButtonGETTODOS',state:res.body})
                });
            break;

        default:
            next(action)
    }
}