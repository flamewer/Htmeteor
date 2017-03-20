/**
 * Created by xiaojianyong on 2017/3/17.
 */
//Meteor.publish('posts', function() {
//    return Posts.find();
//});

// 在服务器端
//Meteor.publish('posts', function(author) {
//    return Posts.find({flagged: false, author: author});
//});

Meteor.publish('allPosts', function(){
    return Posts.find();
});