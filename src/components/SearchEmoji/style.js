import styled from "styled-components";

const ContainerEmojiSearch = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  max-width: 900px;
  height: 100%;

  background: #202020;
  margin: 0 auto;
  margin-top: 40px;

  border-radius: 5px;
`;

const InputEmoji = styled.input`
  background: #fff;
  width: 100%;

  border: none;
  border-radius: 5px;

  max-width: 450px;
  margin: 30px 0;
  padding: 8px;
`;

export { ContainerEmojiSearch, InputEmoji };
