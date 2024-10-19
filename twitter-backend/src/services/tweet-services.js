
import {TweetRepository,HashtagRepository} from '../repository/index.js';


class TweetService {

    constructor(){
        this.tweetRepository=new TweetRepository();
        this.hashtagRepository=new HashtagRepository();
    }

    async create(data){ 
        const content=data.content;
        let tags=content.match(/#[a-zA-Z0-9_]+/g); //regex to extract hashtags 
        tags=tags.map((tag)=>tag.substring(1).toLowerCase()); //remove # from start
          
        const tweet=await this.tweetRepository.create(data);

        const alreadyPresentTags=await this.hashtagRepository.findbyName(tags); 
        let titleofPresentTags= alreadyPresentTags.map(tag=>tag.title);
        let insertable=tags.filter((tag)=>!titleofPresentTags.includes(tag));
        //we have to map the title and the tweet id to insert properly 
        insertable=insertable.map((tag)=>{
            return {title:tag, tweets:[tweet.id]}
        })

        await this.hashtagRepository.bulkCreate(insertable); 
        alreadyPresentTags?.forEach((tag)=>{
            tag.tweets.push(tweet._id);
            tag.save(); 
        })
        return tweet;
        //todo create hashtags and add them to tweet here 
        /** 
         * 1 bulk create in mongo use insertMany
         * 2- filter title of hashtags based on multiple tags 
         * 3- add teeet id to inside all the hashtags(already present tags add id to them of the newly inserted tweet )          * 
         */
    }
}

export default TweetService;