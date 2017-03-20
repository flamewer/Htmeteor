/**
 * Created by xiaojianyong on 2017/3/17.
 */
if (Posts.find().count() === 0) {
    Posts.insert({
        title: '远光软件',
        url: 'http://www.ygsoft.com/'
    });

    Posts.insert({
        title: '研究院',
        url: 'http://www.ygsoft.com'
    });

    Posts.insert({
        title: 'The Meteor Book',
        url: 'http://themeteorbook.com'
    });
}