import styled from "styled-components";

export default styled.div`
  position: absolute;
  background: #000;
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-content: center;

  > div:nth-of-type(1) {
    display: grid;
    place-items: center;
    width: 120px;
    height: 120px;
    background: #fff;
    color: #000;
    border-radius: 50%;
    cursor: pointer;
    :hover {
      opacity: 0.6;
    }
  }
  > div:nth-of-type(2) {
    position: relative;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    > button {
      margin: 5px;
    }
  }
`;
