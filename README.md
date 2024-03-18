##### 安装

```
npm i @sihe/emoji-modal -S
```

##### 页面引入

```
import EmojiModal from '@sihe/emoji-modal';
import '@sihe/emoji-modal/dist/style.css';  //注意需要导入样式
```

##### npm 组件使用例子

```
import { MehOutlined } from '@ant-design/icons';
import EMOJI_DATA from '../utils/emoji';
import EmojiModal from '@sihe/emoji-modal';
import '@sihe/emoji-modal/dist/style.css';
export default ({handleInput,...})=>{
    return (
        <>
            ...
            <EmojiModal
                clickFunc={(e) => {
                  handleInput(ContentUtils.insertText(value, e));
                }}
                emojiData = {EMOJI_DATA}
                hiddenEmoji = {['[微笑]', '[撇嘴]', '[色]', '[发呆]', '[得意]']}
                title = '表情标题'
              >
                <Button type="primary" shape="circle" icon={<MehOutlined />} />
              </EmojiModal>
        </>
    )
};


```

###### 重要属性说明

|  属性名称   |   类型   |      含义      | 是否必填 |
| :---------: | :------: | :------------: | :------: |
|  clickFunc  | Function | 自定义点击事件 |    是    |
|    title    |  string  | 自定义表情标题 |    否    |
| hiddenEmoji | string[] | 自定义隐藏表情 |    否    |
|  emojiData  |   json   | 自定义表情数据 |    否    |

```
*自定义表情数据格式如下：
[
	{
		"url": require('../../../assets/dingding/emotion_002.png'),    //base64形式字符串
    	"alt": "[微笑]"
	},
    ...
]

*自定义隐藏表情使用格式如下：
<EmojiModal
    ...
    hiddenEmoji = {[
        '[微笑]', 
        '[撇嘴]',
        ...
    ]}
    ...
>
```
