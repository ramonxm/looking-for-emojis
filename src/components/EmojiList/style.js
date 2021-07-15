import styled from "styled-components";

const ContentEmojis = styled.div`
  display: flex;
  max-width: 650px;
  width: 100%;
  align-items: center;
  gap: 8px;
  padding: 8px 0;
`;

const EmojiTitle = styled.span`
  color: #e2e2e2;
  font-size: 16px;
  font-weight: 600;
`;

const EmojiIcon = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export { ContentEmojis, EmojiTitle, EmojiIcon };
