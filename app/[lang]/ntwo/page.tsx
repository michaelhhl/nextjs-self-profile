import * as React from 'react';
import { Locale } from '@/i18n-config'
import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from '@mui/material';
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
                            2023/12/03
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.test_no}</TableCell>
                        <TableCell align="left" className='p-0 text-base'>
                            23B102040120135
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.grade}</TableCell>
                        <TableCell align="left" className='p-0 text-base'>N2</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.word_score}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>30</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.reading_score}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>29</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.listening_score}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>25</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.total_score}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>84</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.word_grade}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>B</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="right" className='p-0 text-lg'>{dictionary.ntwo.grammer_grade}</TableCell>
                        <TableCell align="left" className='p-0 text-lg'>A</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    );
}