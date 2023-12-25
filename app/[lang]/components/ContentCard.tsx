import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ContentCard({ heading, text }: Readonly<{ heading: string; text: string }>) {
    const textArr = text.split('!@#')
    return (
        <Card variant="outlined" className='my-1.5 min-w-full'>
            <CardContent>
                <Typography gutterBottom variant="h6" component="div" className='bg-blue-100'>
                    {heading}
                </Typography>
                {
                    textArr.map((item) => {
                        return (
                            <Typography key={item} variant="body2" color="text.secondary" style={{ wordWrap: "break-word" }}>
                                {item}
                            </Typography>
                        )
                    })
                }
            </CardContent>
        </Card>
    );
}