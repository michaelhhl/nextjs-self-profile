import { promises as fs } from 'fs';
import { Locale } from '@/i18n-config'

export async function getWorkHistory(lang: Locale) {
  const file = await fs.readFile(process.cwd() + `/app/api/mydata/${lang}/workhistory.json`, 'utf8');
  const ret = JSON.parse(file)
  return ret
}

export async function getProjectexperience(lang: Locale) {
  const file = await fs.readFile(process.cwd() + `/app/api/mydata/${lang}/projectexperience.json`, 'utf8');
  const ret = JSON.parse(file)
  return ret
}

export async function getPersonInfo(lang: Locale) {
    const file = await fs.readFile(process.cwd() + `/app/api/mydata/${lang}/personinfo.json`, 'utf8');
    // const file = undefined
  const ret = JSON.parse(file)
  return ret
}

