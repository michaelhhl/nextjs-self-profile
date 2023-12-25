import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import ContentCard from '../components/ContentCard';
// import { getProjectExperience } from '@/app/api/route';
import { Locale } from '@/i18n-config'
import ImageContentCard from '../components/ImageContentCard';
import personalblog from '../../../public/personalblog.png'
import Typography from '@mui/material/Typography';


export default async function WorkHistoryPage({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {
    // const data = await getProjectExperience(lang)
    // const experienceList = JSON.parse(data);

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'left',
                }}
            >
                <ImageContentCard key='personalBlog'
                    heading='个人简历博客'
                    text=''
                    imgUrl={personalblog}
                    width={900}
                />
                <Typography variant="h6" gutterBottom>
                    1.本项目基于Nextjs框架实现
                </Typography>
                <Typography variant="h6" gutterBottom>
                    2.基于App Router实现路由
                </Typography>
                <Typography variant="h6" gutterBottom>
                    3.基于i18next实现日文/中文切换
                </Typography>
                <Typography variant="h6" gutterBottom>
                    4.实现自定义组件，组件化开发
                </Typography>
                <Typography variant="h6" gutterBottom>
                    5.全局化注入样式主体模板
                </Typography>
                <Typography variant="h6" gutterBottom>
                    6.使用静态化数据
                </Typography>
                {/* nextjs */}
            </Box>
        </Container>
    );
}