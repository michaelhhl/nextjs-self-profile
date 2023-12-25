import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
import ContentCard from '../components/ContentCard';
import { getWorkHistory } from '@/app/api/route';
import { Locale } from '@/i18n-config'


export default async function WorkHistoryPage({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {
    const data = await getWorkHistory(lang)
    const historyList = JSON.parse(data);

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
                {historyList.map((item: any) => {
                    return (<ContentCard key={item.company}
                        heading={`${item.company} | ${item.position} | ${item.during}`}
                        text={item.content}
                    />)
                })}
            </Box>
        </Container>
    );
}