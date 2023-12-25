// 'use client';
import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import Image from 'next/image'
import { Locale } from '@/i18n-config'
import { getLocale } from '@/get-locale';
import { getPersonInfo } from '../api/route';
import profilePic from '../../public/hhl.png'


export default async function Home({
  params: { lang },
}: Readonly<{
  params: { lang: Locale }
}>) {

  const dictionary = await getLocale(lang)
  const data = await getPersonInfo(lang)
  const info = JSON.parse(data);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        {/* <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={3}>
                Details
              </TableCell>
              <TableCell align="right">Price</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Desc</TableCell>
              <TableCell align="right">Qty.</TableCell>
              <TableCell align="right">Unit</TableCell>
              <TableCell align="right">Sum</TableCell>
            </TableRow>
          </TableHead> */}
        <TableBody>
          <TableRow>
            <TableCell width="12%" align="right" className='p-0 text-lg'>{dictionary.info.name}</TableCell>
            <TableCell align="left" colSpan={2} className='p-0 text-lg'>{info.name}</TableCell>
            <TableCell width="21%" rowSpan={4} align="right">
              <Image src={profilePic} width={200} height={150} alt='me' priority={false} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.mobile}</TableCell>
            <TableCell align="left" colSpan={2} className='p-0 text-lg'>{info.mobile}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.email}</TableCell>
            <TableCell align="left" colSpan={2} className='p-0 text-lg'>{info.email}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.education}</TableCell>
            <TableCell align="left" colSpan={3} className='p-0 text-lg'>{info.education}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.language}</TableCell>
            <TableCell align="left" colSpan={3} className='p-0 text-base'>
              <pre>
                {info.language}
              </pre>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.skills}</TableCell>
            <TableCell align="left" colSpan={3} className='p-0 text-base'>{info.skills}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.certification}</TableCell>
            <TableCell align="left" colSpan={3} className='p-0 text-lg'>{info.certification}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.selfassessment}</TableCell>
            <TableCell align="left" colSpan={3} className='p-0 text-lg'>{info.selfassessment}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
