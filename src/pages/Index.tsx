import { Input } from 'antd';
import { useEffect, useState } from 'react';
import { Tag } from 'antd';
import { Header } from '../styles/Header'
import { Main } from '../styles/Main'
import axios from 'axios'
import { IndexTopicLi } from '../components/IndexTopicLi';

const { Search } = Input;
const { CheckableTag } = Tag;

const tagsData = [
  {
    name: '全部',
    tab: 'all',
  },
  {
    name: '精华',
    tab: 'good',
  },
  {
    name: '分享',
    tab: 'share',
  },
  {
    name: '问答',
    tab: 'ask',
  },
  {
    name: '招聘',
    tab: 'job',
  },
  {
    name: '客户端测试',
    tab: 'dev'
  }
];

type Tag = {
  tab: string,
  name: string,
}

const onSearch = (value: string) => console.log(value);

function Index() {
  const [selectedTag, setSelectedTag] = useState<string>('全部');
  const [topics, setTopics] = useState<Topic[]>([])

  const handleChange = (tag: Tag) => {
    setSelectedTag(tag.name)
    getData(tag.tab)
  };

  useEffect(() => {
    getData('all')
  }, [])

  const getData = (tab: string) => {
    axios.get<{ data: Topic[], success: boolean }>(`https://cnodejs.org/api/v1/topics?tab=${tab}`)
      .then((res) => {
        if (res.data.success) {
          console.log(1);

          setTopics(res.data.data)
          console.log(2);
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }

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
                key={tag.tab}
                checked={selectedTag === tag.name}
                onChange={() => handleChange(tag)}
              >
                {tag.name}
              </CheckableTag>
            ))}
          </nav>
          <div className="content">
            <ul>
              {topics.map((topic) => (
                <IndexTopicLi key={topic.id} topic={topic} />
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