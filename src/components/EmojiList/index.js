import * as S from "./style";

const EmojiList = ({ src, alt, children, onClick }) => {
  return (
    <S.ContentEmojis>
      <S.EmojiIcon src={src} alt={alt} onClick={onClick}></S.EmojiIcon>
      <S.EmojiTitle>{children}</S.EmojiTitle>
    </S.ContentEmojis>
  );
};

export { EmojiList };
