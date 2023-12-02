import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const TopicList = ({topics}) => {


  const topicList = topics.map((topic) => <TopicListItem key={topic.id} {...topic}/>)


  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
