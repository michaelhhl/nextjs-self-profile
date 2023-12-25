import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Locale } from '@/i18n-config'
import { Typography } from '@mui/material';
import ImageContentCard from '../components/ImageContentCard';
import adminsystemlogin from '../../../public/adminsystemlogin.png'
import adminsystemdepartment from '../../../public/adminsystemdepartment.png'
import adminsystemrole from '../../../public/adminsystemrole.png'


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
                <ImageContentCard key='adminsystemlogin'
                    heading='管理系统'
                    text=''
                    imgUrl={adminsystemlogin}
                    width={900}
                />
                <ImageContentCard key='adminsystemdepartment'
                    heading=''
                    text=''
                    imgUrl={adminsystemdepartment}
                    width={900}
                />
                <ImageContentCard key='adminsystemrole'
                    heading=''
                    text=''
                    imgUrl={adminsystemrole}
                    width={900}
                />
                <Typography variant="h6" gutterBottom>
                    1.此前后端分离项目基于Vue + Spring(Java) + PostgreSQL实现
                </Typography>
                <Typography variant="h6" gutterBottom>
                    2.封装Axios，实现Http请求/响应拦截，自定义get，post请求方法
                </Typography>
                <Typography variant="h6" gutterBottom>
                    3.通过自定义router，实现菜单功能
                </Typography>
                <Typography variant="h6" gutterBottom>
                    4.基于SpringBoot + Mybatis实现前端调用的Api
                </Typography>
                <Typography variant="h6" gutterBottom>
                    5.基于SpringSecurity + oauth2 + JWT实现用户认证
                </Typography>
                <Typography variant="h6" gutterBottom>
                    6.拦截Api的请求响应，统一响应数据的格式
                </Typography>

            </Box>
        </Container>
    );
}