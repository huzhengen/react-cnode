import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../styles/Header'
import { Main } from '../styles/Main'
import axios from 'axios'

const { Search } = Input;
const { CheckableTag } = Tag;

const tagsData = ['全部', '精华', '分享', '问答', '招聘', '客户端测试'];

const onSearch = (value: string) => console.log(value);

type Author = {
  "loginname": string,
  "avatar_url": string,
}

type Topic = {
  "id": string,
  "author_id": string,
  "tab": string,
  "content": string,
  "title": string,
  "last_reply_at": string,
  "good": boolean,
  "top": boolean,
  "reply_count": number,
  "visit_count": number,
  "create_at": string,
  "author": Author,
}

function Index() {
  const [selectedTag, setSelectedTag] = useState<string>('全部');
  const [topics, setTopics] = useState<Topic[]>([])

  const handleChange = (tag: string) => {
    setSelectedTag(tag)
  };

  const changeTab = (value: string) => {
    let tab = ''
    switch (value) {
      case 'ask':
        tab = '问答'
        break;
      case 'share':
        tab = '分享'
        break;
      case 'job':
        tab = '工作'
        break;
      case 'good':
        tab = '精华'
        break;
      default:
        tab = '其他'
        break;
    }
    return tab
  }

  useEffect(() => {
    axios.get<{ data: Topic[], success: boolean }>('https://cnodejs.org/api/v1/topics')
      .then((res) => {
        if (res.data.success) {
          setTopics(res.data.data)
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  return (
    <>
      <Header>
        <div className="wrapper">
          <div className="left">
            <h1>
              <img width="100" src="http://static2.cnodejs.org/public/images/cnodejs_light.svg" />
            </h1>
            <Search placeholder="搜索" onSearch={onSearch} style={{ width: 200 }} />
          </div>
          <nav>
            <ul>
              <li><a>首页</a></li>
              <li><a>新手入门</a></li>
              <li><a>API</a></li>
              <li><a>关于</a></li>
              <li><a>注册</a></li>
              <li><a>登录</a></li>
            </ul>
          </nav>
        </div>
      </Header>
      <Main>
        <div className="left">
          <nav>
            {tagsData.map((tag) => (
              <CheckableTag
                key={tag}
                checked={selectedTag === tag}
                onChange={() => handleChange(tag)}
              >
                {tag}
              </CheckableTag>
            ))}
          </nav>
          <div className="content">
            <ul>
              {topics.map((topic) => (
                <li key={topic.id}>
                  <div className="info">
                    <img src={topic.author.avatar_url} alt="" />
                    <span className='reply'>
                      <i>{topic.reply_count}</i>/<em>{topic.visit_count}</em>
                    </span>
                    <CheckableTag checked={topic.top}>
                      {topic.top ? '置顶' : changeTab(topic.tab)}
                    </CheckableTag>
                    <h3><Link to={`https://cnodejs.org/topic/${topic.id}`}>{topic.title}</Link></h3>
                  </div>
                  <div className="time">
                    {/* <img src="https://avatars.githubusercontent.com/u/958063?v=4&s=120" alt="" /> */}
                    <time>{topic.last_reply_at}</time>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right"></div>
      </Main>
    </>
  )
}

export default Index