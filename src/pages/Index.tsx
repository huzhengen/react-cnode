import { Input } from 'antd';
import styled from 'styled-components'
import { useState } from 'react';
import { Tag } from 'antd';
import { Link } from 'react-router-dom';

const { Search } = Input;
const { CheckableTag } = Tag;

const tagsData = ['全部', '精华', '分享', '问答', '招聘', '客户端测试'];

const onSearch = (value: string) => console.log(value);

const Header = styled.header`
 background-color: #444;
 .wrapper{
  width: 1200px;
  margin: 0 auto;
  padding: 2px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
    h1{
      margin-right: 20px;
    }
  }
  nav{
    ul {
      display: flex;
      li{
        margin-left: 20px;
        a{
          color: #fff;;
        }
      }
    }
  }
 }
`;

const Main = styled.main`
width:1200px;
margin: 0 auto;
padding: 20px 0;
display: flex;
justify-content: space-between;
gap: 0 20px;
.left {
  width: 900px;

  nav {
    padding: 10px 30px;
    background-color: #f6f6f6;
    border-radius: 3px 3px 0 0;

    span {
      color: #80bd01;
      font-size: 14px;
    }

    .ant-tag-checkable-checked {
      color: #fff;
      background-color: #80bd01;
    }
  }

  .content {
    background-color: #fff;
    border-radius: 0 0 3px 3px;

    ul {
      li {
        padding: 10px;
        background: #fff;
        border-bottom: 1px solid #f0f0f0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info {
          display: flex;
          align-items: center;
          max-width: 80%;
          img {
            width: 30px;
            height: 30px;
            border-radius: 5px;
            object-fit: cover;
            margin-right: 10px;
          }
          span {
            font-size: 14px;
            font-style: normal;
            margin-right: 10px;
            i {
              color: #999;
              font-style: inherit;
            }
            em {
              color: #999;
              font-style: inherit;
            }
            &.ant-tag-checkable{
              background-color: #e5e5e5;
              color: #999;
            }
            &.ant-tag-checkable-checked{
              background-color: #80bd01;
              color: #fff;
            }
          }
          h3{
            display: inline-block;
            font-size: 16px;
            color: #333;
            font-weight: normal;
            white-space:nowrap; 
            overflow:hidden; 
            text-overflow:ellipsis;
            a {
              color: #333;
            }
          }
        }
        .time{
          display: flex;
          align-items: center;
          img {
            width: 18px;
            height: 18px;
            margin-right: 10px;
          }
          time {
            color: #778087;
            font-size: 12px;
          }
        }
      }
    }

  }
}
.right{
  width: 300px;
  border:1px solid green;
}
`


function Index() {
  const [selectedTag, setSelectedTag] = useState<string>('全部');
  const [isTure, setIsTrue] = useState<boolean>(true)

  const handleChange = (tag: string, checked: boolean) => {
    setSelectedTag(tag)
  };

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
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag}
              </CheckableTag>
            ))}
          </nav>
          <div className="content">
            <ul>
              {tagsData.map((tag) => (
                <li key={tag}>
                  <div className="info">
                    <img src="https://avatars.githubusercontent.com/u/958063?v=4&s=120" alt="" />
                    <span><i>3</i>/<em>851</em></span>
                    <CheckableTag checked={isTure}>置顶</CheckableTag>
                    <h3><Link to={`/`}>求购一套小程序“快速注册”的代码，要包含一个独立的小程序代码，和一套后端代码（nodejs版本）的求购一套小程序“快速注册”的代码，要包含一个独立的小程序代码，和一套后端代码（nodejs版本）的求购一套小程序“快速注册”的代码，要包含一个独立的小程序代码，和一套后端代码（nodejs版本）的</Link></h3>
                  </div>
                  <div className="time">
                    <img src="https://avatars.githubusercontent.com/u/958063?v=4&s=120" alt="" />
                    <time>6小时前</time>
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