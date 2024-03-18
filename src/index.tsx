import React, { FC } from 'react';
import { Popover } from 'antd';
import styles from './sort.module.less';
import EMOJI_DATA from '../assets/data';

interface IProps {
  clickFunc: (select: string) => void;
  title?: string;
  hiddenEmoji?: object[];
  emojiData?: object[];
  children?: any;
}

const EmojiModal: FC<IProps> = ({ clickFunc, title, hiddenEmoji, emojiData, children }) => {
  const content = () => {
    let isDIYEmoji:boolean = true;
    if(!emojiData) {
      isDIYEmoji = false;
      emojiData = EMOJI_DATA;
    }
    if(hiddenEmoji) {
      emojiData = emojiData.filter((ed:any)=>{
        return !hiddenEmoji.includes(ed.alt);
      });
    }
    return (
    <>
      { title && <div style={{ height: '20px',
        lineHeight: '20px',
        paddingLeft: '6px',
        fontSize: '14px',
        cursor: 'default',
        marginBottom: '10px'}}> {title} </div> }
      <div className={styles.wrapper}>
        {emojiData.map((v:any) => {
          return (
            <div
              className={styles.item}
              onClick={() => {
                clickFunc(v.alt);
              }}
              key={v.alt}
              title={v.alt.replace(/\[|\]/g, '')}
            >
              <img width="28px" src={isDIYEmoji ? v.url : require(`../assets/${v.url}`)} />
            </div>
          );
        })}
      </div>
    </>
    );
  };
  return (
    <>
      <Popover placement="top" content={content()}>
        {children}
      </Popover>
    </>
  );
};
export default EmojiModal;
