import styled from "styled-components";

export const Item = styled.li`
position: relative;
list-style: none;
width: 380px;
height: 460px;
background-repeat: no-repeat;
box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23); 
border-radius: 20px;
 background:   
linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
 
 
`

export const Avatar = styled.img`
  width: 63px;
  height: 63px;
  border-radius: 50%;
  position: absolute;
  left: 163.5px;
  top: 186.5px;
`

export const Tweets = styled.p`
position: absolute;
width: 132px;
height: 24px;
left: 124px;
top: 284px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: calc(24 / 20);
text-transform: uppercase;
color: #EBD8FF;
`

export const Followers = styled.p`
position: absolute;
width: 214px;
height: 24px;
left: 83px;
top: 324px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: calc(24 / 20);
text-transform: uppercase;
color: #EBD8FF;
`
export const ButtonFollow = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 14px 28px;
gap: 6px;
position: absolute;
width: 196px;
height: 50px;
left: 92px;
top: 374px;
cursor: pointer;
background: ${props => {
       return props.isFollow ? '#5CD3A8' : '#EBD8FF'   
    }};;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
`

export const ButtonText = styled.span`
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: calc(22 / 18);
text-transform: uppercase;
color: #373737;
flex: none;
order: 0;
flex-grow: 0;
`
export const LogoPicture = styled.picture`
position: absolute;
width: 76px;
height: 22px;
left: 20px;
top: 20px;
`
export const TweetsPicture= styled.picture`
position: absolute;
width: 308px;
height: 168px;
left: 36px;
top: 28px;
`
export const Line = styled.div`
position: absolute;
width: 380px;
height: 8px;
left: 0px;
top: 214px;
background: #EBD8FF;
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`
export const ElipseAvatar = styled.div`
position: absolute;
width: 80px;
height: 80px;
left: 155px;
top: 178px;
background: #EBD8FF;
box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), 
inset 0px -2.19582px 4.39163px #AE7BE3, 
inset 0px 4.39163px 3.29372px #FBF8FF;
border-radius: 50%;
`