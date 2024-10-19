import Tweet from '../models/tweet.js';


class TweetRepository {

    async create(data){
        try {
            const tweet=await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log('error in creating tweet'+error);
        }
    }

    async get(id){
        try {
            const tweet=await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log('error in getting tweet'+error);
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

    async destroy(id){
        try {
            const tweet=await Tweet.findByIdAndDelete(id);
            return tweet;   
        } catch (error) {
            console.log('error in deleting tweet '+error);
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