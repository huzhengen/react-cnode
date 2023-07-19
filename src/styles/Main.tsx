import styled from 'styled-components'

export const Main = styled.main`
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
            &.reply{
              min-width: 80px;
              text-align: center;
              color: #999;
            }
            i {
              font-style: inherit;
            }
            em {
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
}
`
