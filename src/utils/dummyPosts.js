export const posts = [
    {
      postId: 1,
      userId: 1,
      text: "Hello World",
      time: "12:00",
      likes: 0,
      comments: [
        {
          commentId: 1,
          userId: 1,
          postId: 1,
          text: "Hello World comment",
          likes: 0,
        },
        {
          commentId: 2,
          userId: 2,
          postId: 1,
          text: "Hello World comment 2",
          likes: 0,
        },
      ],
    },
    {
      postId: 2,
      userId: 2,
      text: "I'm enjoying this app!",
      time: "14:30",
      likes: 5,
      comments: [],
    },
    {
      postId: 3,
      userId: 3,
      text: "Coding is fun!",
      time: "16:45",
      likes: 10,
      comments: [],
    },
    {
      postId: 4,
      userId: 5,
      text: "Having a great day!",
      time: "18:20",
      likes: 2,
      comments: [],
    },
    {
        postId: 5,
        userId: 1,
        text: "Checking user ids!",
        time: "18:20",
        likes: 2,
        comments: [],
      },
    {
      postId: 6,
      userId: 5,
      text: "Feeling inspired!",
      time: "20:10",
      likes: 7,
      comments: [
        {
          commentId: 1,
          userId: 1,
          postId: 5,
          text: "Keep up the good work!",
          likes: 2,
        },
      ],
    },
  ];
  