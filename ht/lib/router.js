/**
 * Created by xiaojianyong on 2017/3/17.
 */
Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate :'loading',
    waitOn : function() { return Meteor.subscribe('posts');}
});

Router.route('/', {name: 'postsList'});
Router.route('/posts/:_id', {
    name: 'postPage'
});