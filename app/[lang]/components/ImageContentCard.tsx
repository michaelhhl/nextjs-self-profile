import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Image, { StaticImageData } from 'next/image'

export default function ImageContentCard({ heading, text, imgUrl, width = 600, altmsg = 'alt' }:
    Readonly<{ heading: string; text: string; imgUrl: StaticImageData; width?: number; altmsg?: string }>) {
    return (
        <Card variant="outlined" className='my-1.5 min-w-full'>
            <CardContent>
                {heading && (
                    <Typography gutterBottom variant="h5" component="div" className='bg-blue-100'>
                        {heading}
                    </Typography>
                )}
                <Image src={imgUrl} width={width} height={150} alt={altmsg} priority={false} className='pl-20' />
                {text && (
                    <Typography variant="body2" color="text.secondary">
                        {text}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}