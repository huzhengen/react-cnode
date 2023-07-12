import { Input } from 'antd';
import styled from 'styled-components'

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

const Header = styled.header`
 background-color: #444;
 .wrapper{
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
    align-items: center;
  }
  nav{
    ul {
      display: flex;
      li{
        a{
          color: #fff;;
        }
      }
    }
  }
 }
`;

const Wrapper = styled.div`
  display: flex;
`;


function Index() {
  return (
    <>
      <Header>
        <Wrapper />
        <div className="wrapper">
          <div className="left">
            <h1>
              <img width="100" src="http://static2.cnodejs.org/public/images/cnodejs_light.svg" />
            </h1>
            <Search placeholder="input search text" onSearch={onSearch} style={{ width: 200 }} />
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
    </>
  )
}

export default Index