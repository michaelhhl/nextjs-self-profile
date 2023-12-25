import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Locale } from '@/i18n-config'
import ImageContentCard from '../components/ImageContentCard';
import { Typography } from '@mui/material';
import schoolinfo from '../../../public/schoolinfo.png'

export default async function WorkHistoryPage({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {

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
                <ImageContentCard key='schoolinfo'
                    heading='大学专业信息系统'
                    text=''
                    imgUrl={schoolinfo}
                    width={900}
                />
                <Typography variant="h6" gutterBottom>
                    1.此前后端分离项目基于React + Spring(Java) + PostgreSQL实现
                </Typography>
                <Typography variant="h6" gutterBottom>
                    2.封装Axios，实现Http请求/响应拦截，系统异常的捕获，自定义get，post请求方法
                </Typography>
                <Typography variant="h6" gutterBottom>
                    3.基于i18next实现日文/中文切换
                </Typography>
                <Typography variant="h6" gutterBottom>
                    4.通过自定义router，实现菜单功能
                </Typography>
                <Typography variant="h6" gutterBottom>
                    5.基于SpringBoot + Mybatis实现前端调用的Api
                </Typography>
            </Box>
        </Container>
    );
}