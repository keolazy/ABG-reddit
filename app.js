(function() {
  angular.module("app", []).component("reddit", {
    controller: function() {
      const vm = this;

      vm.$onInit = function() {
        vm.newPostClicked = false;
        // vm.viewCommentsOn = false;
        // "seed" posts
        vm.posts = [
          {
            title:
              "News: Donated Music Equipment to Local Homeless Shelter for the Deaf",
            author: "Nathan Kali",
            image:
              "http://www.republicnola.com/wp-content/uploads/Ekali310.jpg",
            body:
              "Sup twitter, just wanted to let you guys know of my most recent act of charity. Virtue Signaling has never been harder with all this competition.",
            vote: 835,
            viewCommentsOn: false,
            comments: ["first comment", "second comment"]
          },
          {
            title: "Just Called Me a Taxi, Cause I Ran Into my gf",
            body:
              "Abgs love me. Someone's still salty I didn't invite her to UMF",
            author: "Chris Killa",
            image:
              "https://nesthq.com/wp-content/uploads/2015/04/manila1k1.jpg",
            vote: 512,
            viewCommentsOn: false,
            comments: ["55 comment", "generic comment here", "66 comment"]
          },
          {
            title: "Day in the Life: A Tale of Pressure",
            body:
              "Everyone thinks I'm a big party guy, but likee I just really wanna go into the woods to smoke and likeee make music...",
            author: "Preston Taki",
            image: "https://pbs.twimg.com/media/Db_R74rWAAAvAuh.jpg",
            vote: 2479,
            viewCommentsOn: false,
            comments: [
              "OmG He's SoooOo Cut33",
              "Notice me Senpaiii :(",
              "See you Soon ;))",
              "Are you really 19???!!"
            ]
          },
          {
            title: "Pioneering ElectroPop: Feels Bad Man",
            body:
              "Sleepless was huge. So are the t-shirts those two LouistheChild kids wear that jacked my signature drops",
            author: "Harley Flumes",
            image:
              "https://fallsfestival.com/assets/artist-square-photos/Flume.jpg",
            vote: 350,
            viewCommentsOn: false,
            comments: ["10101", "232323"]
          }
        ];
      };

      // Toggle form popup on/off thanks to ng-if in the button div
      vm.newPost = function() {
        vm.newPostClicked = vm.newPostClicked ? false : true;
      };

      vm.toggleComments = function(post) {
        // console.log(post);
        post.viewCommentsOn = post.viewCommentsOn ? false : true;
        // console.log("Status of post.viewCommentsOn: " + post.viewCommentsOn);
      };

      vm.createPost = function createPost() {
        // vm.post.timestamp = $filter("date")(date, short);
        vm.post.published = new Date();
        vm.post.viewCommentsOn = false;
        vm.post.comments = []; // push comment into comments array + use {{$post.comments.length}}
        vm.post.commentsCount = vm.post.comments.length;
        vm.post.vote = 0;
        vm.posts.push(vm.post);
        delete vm.post;
        console.log(vm.posts);
      };

      // Figure out how to target specific post.comments
      vm.createComment = function createComment(post, comment) {
        post.comments.push(vm.post.comment);
        delete vm.post.comment;
        console.log(post.comments);
      };

      // Figure out how to target specific post.upvotes
      vm.upvote = function addUpvote(post) {
        post.vote++;
      };
      //
      vm.downvote = function downvote(post) {
        if (post.vote == 0) {
          post.vote = 0;
        } else {
          post.vote--;
        }
      };
    },
    templateUrl: "main.html"
  });
})();
