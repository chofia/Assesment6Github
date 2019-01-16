// Access our newly created Mongoose Model
var MyMean = require('../models/mymean.models.js')

// Saving the context of this module inside the _the variable
_this = this

// Let's use an Async function to get the Tic Tac Toe
exports.getMymeans = async function(query, page, limit){

    // We also want to set up options for the mongoose paginate

    var options = {
        page,
        limit
    }

//Let's create a Try and Catch function 
//that way we have some error handling set. 
//Waiting for the promise
    
try {
    var mymeans = await MyMean.paginate(query, options)
    
//Once the Mongoose promise is returned 
//we're going to go ahead and return 
//the To Do List it has produced 

    return mymeans;

} catch (e) {

//If the try didn't work we're going to 
//go ahead and let the users know what kind of 
//Error we have

    throw Error('Oh No! We got an error while Paginating our To-Do Tasks, so sorry!' )
}
}

exports.createMymean = async function(mymean){
    
    // Creating a new Mongoose Object by using the new keyword
    
        var newMymean = new MyMean({
            title: mymean.title,
            description: mymean.description,
            date: new Date(),
            status: mymean.status
        })
    
        try{
    
            // Let's go ahead and save the todo 
    
            var savedMymean = await newMymean.save()
    
            return savedMymean;
        }catch(e){
          
            //if we can't create a Mymean we want to throw an error 
    
            throw Error("Error while Creating todo")
        }
    }
    exports.updateMymean = async function(mymean){
        var id = mymean.id
    
        try{
            //Find the old todo Object by the Id
        
            var oldMymean = await MyMean.findById(id);
        }catch(e){
            throw Error("Error occured while Finding the Todo")
        }
    
        // If no old Todo Object exists return false
    
        if(!oldMymean){
            return false;
        }
    
        console.log(oldMymean)
    
        //Edit the Todo Object
    
        oldMymean.title = mymean.title
        oldMymean.description = mymean.description
        oldMymean.status = mymean.status
    
    
        console.log(oldMymean)
    
        try{
            var savedMymean = await oldMymean.save()
            return savedMymean;
        }catch(e){
            throw Error("And Error occured while updating the Todo");
        }
    }

    exports.deleteMymean = async function(id){
    
        // Delete the Mymean
    
        try{
            var deleted = await MyMean.deleteOne({_id: id})
            if(deleted.n === 0){
                throw Error("Todo Could not be deleted")
            }
            return deleted
        }catch(e){
            throw Error("Error Occured while Deleting the Todo")
        }
    }