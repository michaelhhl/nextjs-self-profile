import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Locale } from '@/i18n-config'
import ImageContentCard from '../components/ImageContentCard';
import speech1 from '../../../public/aispeech/aispeech-1.png'
import speech2 from '../../../public/aispeech/aispeech-2.png'
import speech3 from '../../../public/aispeech/aispeech-3.png'
import speech4 from '../../../public/aispeech/aispeech-4.png'
import speech5 from '../../../public/aispeech/aispeech-5.png'
import speech6 from '../../../public/aispeech/aispeech-6.png'
import speech7 from '../../../public/aispeech/aispeech-7.png'
import speech8 from '../../../public/aispeech/aispeech-8.png'
import speech9 from '../../../public/aispeech/aispeech-9.png'
import speech10 from '../../../public/aispeech/aispeech-10.png'
import speech11 from '../../../public/aispeech/aispeech-11.png'


export default async function SpeechPage({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {

    const title1 = lang === 'cn' ? 'AI模型学习自然语言的过程和我们人类一样吗？' : 'AIモデルは人間と同じように自然言語を学習するのか？'
    const title2 = lang === 'cn' ? 'AI模型是如何处理自然语言的？' : 'AIモデルは自然言語をどのように処理するのか？'
    const title3 = lang === 'cn' ? 'AI模型是如何理解语义的？' : 'AIモデルはどのようにセマンティクスを理解するのか？'
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <ImageContentCard key='speech1'
                    heading={title1}
                    text=''
                    imgUrl={speech1}
                />
                <ImageContentCard key='speech2'
                    heading={title2}
                    text=''
                    imgUrl={speech2}
                />
                <ImageContentCard key='speech3'
                    heading={`${title3}-1`}
                    text=''
                    imgUrl={speech3}
                />
                <ImageContentCard key='speech4'
                    heading={`${title3}-2`}
                    text=''
                    imgUrl={speech4}
                />
                <ImageContentCard key='speech5'
                    heading={`${title3}-3`}
                    text=''
                    imgUrl={speech5}
                />
                <ImageContentCard key='speech6'
                    heading={`${title3}-4`}
                    text=''
                    imgUrl={speech6}
                />
                <ImageContentCard key='speech7'
                    heading={`${title3}-5`}
                    text=''
                    imgUrl={speech7}
                />
                <ImageContentCard key='speech8'
                    heading={`${title3}-6`}
                    text=''
                    imgUrl={speech8}
                />
                <ImageContentCard key='speech9'
                    heading={`${title3}-7`}
                    text=''
                    imgUrl={speech9}
                />
                <ImageContentCard key='speech11'
                    heading={`${title3}-8`}
                    text=''
                    imgUrl={speech11}
                />
                <ImageContentCard key='speech10'
                    heading={title1}
                    text=''
                    imgUrl={speech10}
                />
            </Box>
        </Container>
    );
}
