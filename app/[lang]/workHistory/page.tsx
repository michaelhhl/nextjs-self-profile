import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ContentCard from '../components/ContentCard';
import { Locale } from '@/i18n-config'
import { getWorkHistory } from '@/utils/jsonHelper';


export default async function WorkHistoryPage({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {

    const historyList = await getWorkHistory(lang)
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
