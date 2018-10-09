import React from 'react';

import Paginations from "./Pagination.jsx";

function NewsPanigation({...props}){
  return (
    <Paginations
      pages={[
        { text: "PREV" },
        { active: true, text: 1 },
        { text: 2 },
        { text: 3 },
        { text: 4 },
        { text: 5 },
        { text: "NEXT" }
      ]}
      color="info"
    />
  );
}

export default NewsPanigation;