

class CrudRepository {

    constructor(model){
        this.model=model;
    }

    async create(data){
        try {
            const result=await this.model.create(data);
            return result;
        } catch (error) {
            console.log('error in crud create repo');
            throw error;
        }
    }


    async destroy(id){
        try {
            const result=await this.model.findByIdAndDelete(id);
            return result;
        } catch (error) {
            console.log('error in crud destroy repo');
            throw error;
        }
    }


    async get(id){
        try {
            const result=await this.model.findById(id);
            return result;
        } catch (error) {
            console.log('error in crud get repo');
            throw error;
        }
    }

    async getAll( ){
        try {
            const result=await this.model.find({});
            return result;
        } catch (error) {
            console.log('error in crud get all repo');
            throw error;
        }
    }


    async update(id,data){
        try {
            const result=await this.model.findByIdAndUpdate(id,data,{new : true});
            return result;

        } catch (error) {
            console.log('error in update in crud repo ');
            throw error;
        }
    }


}


export default CrudRepository;