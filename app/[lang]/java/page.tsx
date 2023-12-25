import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ContentCard from '../components/ContentCard';
import { getProjectExperience } from '@/app/api/route';
import { Locale } from '@/i18n-config'


export default async function WorkHistoryPage({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {
    const data = await getProjectExperience(lang)
    const experienceList = JSON.parse(data);

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
                {/* <Typography variant="body1" gutterBottom>
                    {data}
                </Typography> */}
                {/* {experienceList.map((item: any) => {
                    return (<ContentCard key={item.title}
                        heading={item.title}
                        text={item.responsibility}
                    />)
                })} */}
                java
            </Box>
        </Container>
    );
}