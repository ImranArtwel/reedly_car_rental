const INITIAL_STATE = {
    sections: [
        {
            title: 'sedans',
            imageUrl: 'https://i.ibb.co/Ph6qgcH/Mercedes-AMG.jpg',
            id: 1,
            size: 'large',
            linkUrl: 'garage/sedans'
          },
          {
            title: 'trucks',
            imageUrl: 'https://i.ibb.co/HY7rsB6/Dodge-Ram.jpg',
            id: 2,
            size: 'large',
            linkUrl: 'garage/trucks'
          }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export default directoryReducer;