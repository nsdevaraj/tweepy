var args = process.argv.slice(2);
var json = require('./'+args[0]+'.json');
for (var tweet in json.globalObjects.tweets) {
    
    var userid = json.globalObjects.tweets[tweet].user_id;
    try {
        console.log('screen : ', json.globalObjects.users[userid].screen_name);
        console.log('name : ', json.globalObjects.users[userid].name);
        console.log('followers : ', json.globalObjects.users[userid].followers_count);
        console.log('profile image : ',json.globalObjects.users[userid].profile_image_url_https);
        console.log('tweet : ',json.globalObjects.tweets[tweet].full_text);
        console.log('created : ',json.globalObjects.tweets[tweet].created_at); 
        console.log('media : ',json.globalObjects.tweets[tweet].entities.media[0].media_url_https)
        console.log('RT : ',json.globalObjects.tweets[tweet].retweet_count)
        console.log('likes : ',json.globalObjects.tweets[tweet].favorite_count)
        console.log('reply : ',json.globalObjects.tweets[tweet].reply_count)
        console.log('quote : ',json.globalObjects.tweets[tweet].quote_count) 
    } catch (error) {

    }
}