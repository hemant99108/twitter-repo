import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

class TweetRepository extends CrudRepository {

    constructor(){
        super(Tweet);
    }

    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log('error in creating tweet'+error);
        }
    }

    
    async getWithComments(id){
        try {
            const tweet=await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log('error in getting tweet with comment '+error);
        }
    }

   
    async getAll(offset,limit){
        try {
            const tweet=await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log('err in get all tweets '+error);
        }
    }

}


 export default TweetRepository;