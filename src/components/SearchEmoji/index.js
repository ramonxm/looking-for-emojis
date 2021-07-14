import * as S from "./style";
import { EmojiData } from "../../utils/EmojiData";
import { useState } from "react";
import { EmojiList } from "../EmojiList";

const SearchEmoji = () => {
  const [listEmoji, setListEmoji] = useState("");

  const filtered = EmojiData.filter(({ title, keywords }) => {
    if (title.toLowerCase().includes(listEmoji.toLowerCase())) {
      return true;
    }
    if (keywords.includes(listEmoji)) {
      return true;
    }
    return false;
  }).slice(0);

  return (
    <S.ContainerEmojiSearch>
      <S.InputEmoji
        type="text"
        placeholder="Search for a keyword..."
        onChange={(e) => setListEmoji(e.target.value)}
        value={listEmoji}
      />
      {listEmoji.length > 0
        ? filtered.map(({ title, symbol, keywords }) => {
            const emoji = symbol.codePointAt(0).toString(16);
            return (
              <EmojiList
                key={keywords}
                src={`https://cdn.jsdelivr.net/emojione/assets/png/${emoji}.png`}
                alt={symbol}
              >
                {title}
              </EmojiList>
            );
          })
        : EmojiData.map(({ title, symbol, keywords }) => {
            const emoji = symbol.codePointAt(0).toString(16);
            return (
              <EmojiList
                key={keywords}
                src={`https://cdn.jsdelivr.net/emojione/assets/png/${emoji}.png`}
                alt={symbol}
              >
                {title}
              </EmojiList>
            );
          })}
    </S.ContainerEmojiSearch>
  );
};

export { SearchEmoji };
