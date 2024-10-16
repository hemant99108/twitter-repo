const {TweetRepository} =require('../repository/index');


class TweetService {

    constructor(){
        this.tweetRepository=new TweetRepository();
    }

    async create(data){
        const content=data.content;
        const tags=content.match(/#[a-zA-Z0-9_]/g); //regex to extract hashtags 
        tags=tags.map((tag)=>tag.substr(1)); //remove # from start
        console.log(tags);
        const tweet=await this.tweetRepository.create(data);

        //todo create hashtags and add them to tweet here 
        /** 
         * 1 bulk create in mongo use insertMany
         * 2- filter title of hashtags based on multiple tags 
         * 3- add teeet id to inside all the hashtags          * 
         */
        return tweet;
    }
}

module.exports=TweetService;