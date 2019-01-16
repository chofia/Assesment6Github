// We need to be able to access the Service 
//that we just created so let's pull that in

var MymeanService = require('../services/mymean.service.js');

// Make sure to save the context of 
//this module inside the _this variable

exports.getMymeans = async function(req, res, next){

    // We're going to use ternary to check 
    //the existence of the query parameters
        
        var page = req.query.page ? req.query.page : 1
        var limit = req.query.limit ? req.query.limit : 10; 
    
        try{
        
            var mymeans = await MymeanService.getMymeans({}, page, limit)
            
    // Return the todos list with the appropriate 
    //HTTP Status Code and Message.
            
            return res.status(200).json({status: 200, data: mymeans, message: "Succesfully Todos Recieved"});
            
        }catch(e){
            
    //Return an Error Response Message 
    //with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: e.message});
            
    }
}

exports.createMymean = async function(req, res, next){

    // Note: Req.Body contains the form submit values.

    var mymean = {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status
    }

    try{
        
        // Calling the Service function 
        //with the new object from the Request Body
    
        var createdMymean = await MymeanService.createMymean(mymean)
        return res.status(201).json({status: 201, data: createdMymean, message: "Succesfully Created Todo"})
    }catch(e){
        
        //Return an Error Response Message 
        //with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Todo Creation was Unsuccesfull, I am sorry :( "})
    }
}

exports.updateMymean = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400, message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var mymean = {
        id,
        title: req.body.title ? req.body.title : null,
        description: req.body.description ? req.body.description : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedMymean = await MymeanService.updateMymean(mymean)
        return res.status(200).json({status: 200, data: updatedMymean, message: "Succesfully Updated Todo"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }
}

exports.removeMymean = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await MymeanService.deleteMymean(id)
        return res.status(204).json({status:204, message: "Succesfully Todo Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}