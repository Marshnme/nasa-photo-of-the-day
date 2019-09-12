import React from "react";
import styled from "styled-components";

const DateCon = styled.div`
width:20%;

`;
const ExplainCon = styled.div`
width:50%;

`;
const CopyCon = styled.div`
width:100%
`;

const Container = styled.div`
  display :flex;
`;
const MainWrap = styled.div`
display:flex;
justify-content:center;
flex-flow: row wrap;
`;
const DataCard = props =>{
    console.log("props",props);
    return (
        <Container>
        <div className = "dataList">
            <h2>Title: {props.title}</h2>

            <img alt ="planets" src={props.url}>
            </img>

            <MainWrap>
           <DateCon>
                <p>Date: {props.date}</p>
            </DateCon>
            <ExplainCon>
                <p>{props.explanation}</p>
            </ExplainCon>
            <CopyCon>
                <h2>{props.copyright}</h2>
            </CopyCon>
            </MainWrap>
        </div>
        </Container>
)
 }


export default DataCard;