import styled from 'styled-components'

export const Header = styled.header`
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