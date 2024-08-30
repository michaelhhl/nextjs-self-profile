import * as React from 'react';
import { Locale } from '@/i18n-config'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getLocale } from '@/get-locale';

export default async function Ntwo({
    params: { lang },
}: Readonly<{
    params: { lang: Locale }
}>) {

    const dictionary = await getLocale(lang)

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 400, marginLeft: 40 }}>
            <Table sx={{ maxWidth: 400 }} aria-label="spanning table">
                <TableBody>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.test_date}</TableCell>
                        <TableCell align="left" className='p-0 text-base'>
                            2024/07/07
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.test_no}</TableCell>
                        <TableCell align="left" className='p-0 text-base'>
                            24A102040121989
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.grade}</TableCell>
                        <TableCell align="left" className='p-0 text-base'>N2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.word_score}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>31</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.reading_score}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>43</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.listening_score}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>28</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.total_score}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>102</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.word_grade}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>A</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.grammer_grade}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>B</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}
