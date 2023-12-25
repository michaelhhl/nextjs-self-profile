'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { i18n } from '@/i18n-config'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { ToggleButton } from '@mui/material'
import { useEffect } from 'react'

export default function LocaleSwitcher() {
    const pathName = usePathname()
    const router = useRouter()

    // useEffect(() => {

    // })
    const segments = pathName.split('/')

    // const redirectedPathName = (locale: string) => {
    //     if (!pathName) return '/'
    //     const segments = pathName.split('/')
    //     segments[1] = locale
    //     return segments.join('/')
    // }

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newLocale: string,
    ) => {
        segments[1] = newLocale
        router.push(segments.join('/'))
    };

    return (
        <div>
            {/* <p className='text-black'>Locale switcher:</p>
            <ul>
                {i18n.locales.map((locale) => {
                    return (
                        <li key={locale}>
                            <Link href={redirectedPathName(locale)}>{locale}</Link>
                        </li>
                    )
                })}
            </ul> */}
            <ToggleButtonGroup
                color="primary"
                value={segments[1]}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
            >
                <ToggleButton value="cn" className='py-0'>CN</ToggleButton>
                <ToggleButton value="jp" className='py-0'>JP</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )
}