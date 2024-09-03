import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import { Locale } from '@/i18n-config'
import { getLocale } from '@/get-locale';
import profilePic from '../../public/hhl.png'
import { getPersonInfo } from '@/utils/jsonHelper';


export default async function Home({
  params: { lang = "jp" },
}: Readonly<{
  params: { lang: Locale }
}>) {

  const dictionary = await getLocale(lang)
  const info = await getPersonInfo(lang)

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
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
            <TableCell align="left" colSpan={3} className='p-0 text-base' style={{ padding: '0px' }}>
              {
                (lang === 'cn') && (
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell align="left" className='p-0 text-base'>Java/Spring/Spring Boot/Spring Cloud</TableCell>
                        <TableCell align="left" className='p-0 text-base'>10年</TableCell>
                        <TableCell align="left" className='p-0 text-base'>精通，可提供指导</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left" className='p-0 text-base'>React/Vue/Nextjs/Typescript/Javascript</TableCell>
                        <TableCell align="left" className='p-0 text-base'>5年</TableCell>
                        <TableCell align="left" className='p-0 text-base'>精通，可提供指导</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left" className='p-0 text-base'>Oracle/MySQL/SQL Server/PostgreSQL</TableCell>
                        <TableCell align="left" className='p-0 text-base'>5年</TableCell>
                        <TableCell align="left" className='p-0 text-base'>良好</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left" className='p-0 text-base'>AWS/Azure/Docker/Git/VBA/Shell/Mybatis/Redis/RocketMQ</TableCell>
                        <TableCell align="left" className='p-0 text-base'>3年</TableCell>
                        <TableCell align="left" className='p-0 text-base'>良好</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                )
              }
              {
                (lang === 'jp') && (
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell align="left" className='p-0 text-base'>Java/Spring/Spring Boot/Spring Cloud</TableCell>
                        <TableCell align="left" className='p-0 text-base'>10年</TableCell>
                        <TableCell align="left" className='p-0 text-base'>通常使用に問題なしで、指導も可能</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left" className='p-0 text-base'>React/Vue/Nextjs/Typescript/Javascript</TableCell>
                        <TableCell align="left" className='p-0 text-base'>5年</TableCell>
                        <TableCell align="left" className='p-0 text-base'>通常使用に問題なしで、指導も可能</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left" className='p-0 text-base'>Oracle/MySQL/SQL Server/PostgreSQL</TableCell>
                        <TableCell align="left" className='p-0 text-base'>5年</TableCell>
                        <TableCell align="left" className='p-0 text-base'>通常使用に問題なし</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell align="left" className='p-0 text-base'>AWS/Azure/Docker/Git/VBA/Shell/Mybatis/Redis/RocketMQ</TableCell>
                        <TableCell align="left" className='p-0 text-base'>3年</TableCell>
                        <TableCell align="left" className='p-0 text-base'>通常使用に問題なし</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                )
              }
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.certification}</TableCell>
            <TableCell align="left" colSpan={3} className='p-0 text-lg'>{info.certification}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="right" className='p-0 text-lg'>{dictionary.info.selfassessment}</TableCell>
            <TableCell align="left" colSpan={3} className='p-0 text-lg'><pre>{info.selfassessment}</pre></TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}
