import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ContentCard from '../components/ContentCard';
import { Locale } from '@/i18n-config'
import { getJavaSolution } from '@/utils/jsonHelper';
import Typography from '@mui/material/Typography';


export default async function WorkHistoryPage({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {

    const title = lang === 'cn' ? '场景&解决案' : 'シナリオと解決策'
    const solutionList = await getJavaSolution(lang)

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
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                {solutionList.map((item: any) => {
                    return (<ContentCard key={item.question}
                        heading={item.question}
                        text={item.solution}
                    />)
                })}
            </Box>
        </Container>
    );
}
