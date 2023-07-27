import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { changeTab } from '../utils/changeTab'

const { CheckableTag } = Tag;

export const IndexTopicLi = (props: { topic: Topic }) => {
  const { topic } = props

  return (
    <li key={topic.id}>
      <div className="info">
        <img src={topic.author.avatar_url} alt="" />
        <span className='reply'>
          <i>{topic.reply_count}</i>/<em>{topic.visit_count}</em>
        </span>
        <CheckableTag checked={topic.top}>
          {topic.top
            ? '置顶'
            : topic.good
              ? '精华'
              : changeTab(topic.tab)}
        </CheckableTag>
        <h3><Link to={`https://cnodejs.org/topic/${topic.id}`}>{topic.title}</Link></h3>
      </div>
      <div className="time">
        {/* <img src="https://avatars.githubusercontent.com/u/958063?v=4&s=120" alt="" /> */}
        <time>{topic.last_reply_at}</time>
      </div>
    </li>
  )
}