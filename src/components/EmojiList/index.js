import * as S from "./style";

const EmojiList = ({ src, alt, children }) => {
  return (
    <S.ContentEmojis>
      <S.EmojiIcon src={src} alt={alt}></S.EmojiIcon>
      <S.EmojiTitle>{children}</S.EmojiTitle>
    </S.ContentEmojis>
  );
};

export { EmojiList };
