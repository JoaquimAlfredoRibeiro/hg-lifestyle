const INITIAL_STATE = {
  sections: [
    {
      title: "ties",
      imageUrl:
        "http://www.amog.com/wp-content/uploads/2012/05/tiebar-550x366.jpg",
      id: 1,
      linkUrl: "shop/ties"
    },
    {
      title: "socks",
      imageUrl:
        "https://image.businessinsider.com/59aed6996eac401b008b8860?width=1100&format=jpeg&auto=webp",
      id: 2,
      linkUrl: "shop/socks"
    },
    {
      title: "watches",
      imageUrl:
        "https://ae01.alicdn.com/kf/HTB1b9PtmBHH8KJjy0Fbq6AqlpXap/2018-Big-Dial-Watches-For-Men-Hour-Mens-Watches-Top-Brand-Luxury-Quartz-Watch-Man-Leather.jpg",
      id: 3,
      linkUrl: "shop/watches"
    },
    {
      title: "mens",
      imageUrl:
        "https://media.istockphoto.com/photos/handsome-man-downtown-picture-id896858190?k=6&m=896858190&s=612x612&w=0&h=_N6UoGX7-CNQvAx8B0LPlhcFORykeQHVgNlnHXVb-as=",
      size: "large",
      id: 4,
      linkUrl: "shop/mens"
    },
    {
      title: "womens",
      imageUrl:
        "https://bglh-marketplace.com/wp-content/uploads/2017/12/tipsformoisturizedhairinwinter.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/womens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
