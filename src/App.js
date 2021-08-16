import React from "react";
import "./index.css";
import styled from "styled-components";
import { AccountBox } from "./Components/AccountBox/Index";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function App (){
    return(
        <React.Fragment>
            <AppContainer>
                <AccountBox />
            </AppContainer>
        </React.Fragment>
    )
}
