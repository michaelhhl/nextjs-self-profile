import { Locale } from '@/i18n-config'


export async function GET(request: Request, { params }: { params: { lang: Locale } }) {
  return Response.json({  })
}
