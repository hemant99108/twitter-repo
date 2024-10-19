import Hashtag from '../models/hashtags.js';

class HashtagRepository{

    async create(data){
        try {
            const tag=await Hashtag.create(data);
            return tag;
        } catch (error) {
            console.log('error in creating tag'+error);
        }
    }

    async bulkCreate(data){
        try {
            const results= await Hashtag.insertMany(data);           
            return results;
             
        } catch (error) {
            console.log(error);
        }
    }

    async get(id){
        try {
            const tag=await Hashtag.findById(id);
            return tag;
        } catch (error) {
            console.log(error);
        }
    }


    async destroy(id){
        try {
            const res=await Hashtag.deleteById(id);
            return res;
        } catch (error) {
            console.log(error);
        }
    }

    async findbyName(titlelist){
        try {
            const tags=await Hashtag.find({
                title:{$in: titlelist}
            });
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

}


 export default HashtagRepository;
