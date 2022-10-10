import React from 'react';

import ArticleList from './ArticleList';

function AdvancedApp(props) {
  return (
    <ArticleList
      articles={props.articles}
      authors={props.authors}
    />
  )
}

export default AdvancedApp;