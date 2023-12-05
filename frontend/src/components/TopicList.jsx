import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = (props) => {

  const topicList = props.topics.map((topic) => <TopicListItem 
  key={topic.id}
  slug={topic.slug}
  title={topic.title}/>)


  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
