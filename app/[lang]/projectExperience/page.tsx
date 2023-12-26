import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ContentCard from '../components/ContentCard';
import { Locale } from '@/i18n-config'
import { getProjectexperience } from '@/utils/jsonHelper';


export default async function WorkHistoryPage({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {

    const experienceList = await getProjectexperience(lang)

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
                {experienceList.map((item: any) => {
                    return (<ContentCard key={item.title}
                        heading={item.title}
                        text={item.responsibility}
                    />)
                })}
            </Box>
        </Container>
    );
}
