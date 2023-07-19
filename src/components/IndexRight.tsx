import { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const getNoReplyTopics = (topics: Topic[]) => {
  const temp = []
  for (let i = 0; i < topics.length; i++) {
    if (topics[i].reply_count === 0) {
      temp.push(topics[i])
    }
    if (temp.length === 5) {
      break
    }
  }
  return temp
}

const Li = styled.li`
  white-space:nowrap; 
  overflow:hidden; 
  text-overflow:ellipsis;
  a {
    color: #778087;
  }
`

export const IndexRight = (props: { topics: Topic[] }) => {
  const { topics } = props

  const [noReplyTopics, setNoReplyTopics] = useState<Topic[]>([])

  useEffect(() => {
    const t = getNoReplyTopics(topics)
    setNoReplyTopics(t)
  }, [topics])

  return (
    <div className="right">
      <Card type="inner" title="无人回复的话题">
        <ul>
          {noReplyTopics.map((t) => (
            <Li key={t.id}><Link to={`https://cnodejs.org/topic/${t.id}`}>{t.title}</Link></Li>
          ))}
        </ul>
      </Card>
    </div>
  )
}
