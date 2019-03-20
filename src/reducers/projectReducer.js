const initState = {
  projects: [
    {
      id: 1,
      title: 'help me find peach',
      content: 'Lorem ipsum dolor sit amet.'
    },
    {
      id: 2,
      title: 'collect all the stars',
      content: 'Lorem ipsum dolor sit amet.'
    },
    {
      id: 3,
      title: 'egg hunt with yoshi',
      content: 'Lorem ipsum dolor sit amet.'
    }
  ]
};

export default (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.payload);
      break;
    default:
      return state;
  }

  return state;
};
