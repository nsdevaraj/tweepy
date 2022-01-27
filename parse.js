var args = process.argv.slice(2);
var json = require('./' + args[0] + '.json');
for (var tweet in json.globalObjects.tweets) {
    var userid = json.globalObjects.tweets[tweet].user_id;
    var screen = ''
    var name = '';
    var followers = '';
    var profileImage = '';
    var media = '';
    try {
        screen = json.globalObjects.users[userid].screen_name;
        name = json.globalObjects.users[userid].name;
        followers = json.globalObjects.users[userid].followers_count;
        profileImage = json.globalObjects.users[userid].profile_image_url_https;
    } catch (error) {

    }
    try {
        media = json.globalObjects.tweets[tweet].entities.media[0].media_url_https;

    } catch (error) {

    }
   console.log(args[1]+','+json.globalObjects.tweets[tweet].created_at+','+json.globalObjects.tweets[tweet].retweet_count+','+ json.globalObjects.tweets[tweet].favorite_count+','+json.globalObjects.tweets[tweet].reply_count+','+ json.globalObjects.tweets[tweet].quote_count+','+ 'https://twitter.com/nsdevaraj/status/' + json.globalObjects.tweets[tweet].id_str+','+screen+','+name+','+followers+','+profileImage+','+media+','+ escape(json.globalObjects.tweets[tweet].full_text));
}