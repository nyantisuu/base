import gttsJS from './toTransform';

export default async function gtts(
    lang:Language,
    text:string,
    download?:boolean,
    path?:string)
    :Promise<GttsData>
    {
        const data = await gttsJS(lang, text, download, path);
        return data
    }

type Language = 'pt-br' | 'en';

type GttsData = {
    date: string,
    error: boolean,
    dev_msg: boolean,
    error_msg: boolean,
    code: number,
    explain: {
      code: string,
      why: string
    },
    gtts:{
        buffer:string,
        local:string
    }
    // headers: {
    //   'content-type': 'audio/mpeg',
    //   'cache-control': 'no-cache, no-store, max-age=0, must-revalidate',
    //   pragma: 'no-cache',
    //   expires: 'Mon, 01 Jan 1990 00:00:00 GMT',
    //   date: 'Mon, 28 Aug 2023 13:49:45 GMT',
    //   p3p: 'CP="This is not a P3P policy! See g.co/p3phelp for more info."',
    //   'content-security-policy': "require-trusted-types-for 'script';report-uri /_/TranslateApiHttp/cspreport, script-src 'report-sample' 'nonce-OmSn4BaTvQhNENVWYol34w' 'unsafe-inline';object-src 'none';base-uri 'self';report-uri /_/TranslateApiHttp/cspreport;worker-src 'self'",
    //   'accept-ch': 'Sec-CH-UA-Arch, Sec-CH-UA-Bitness, Sec-CH-UA-Full-Version, Sec-CH-UA-Full-Version-List, Sec-CH-UA-Model, Sec-CH-UA-WoW64, Sec-CH-UA-Form-Factor, Sec-CH-UA-Platform, Sec-CH-UA-Platform-Version',
    //   'permissions-policy': 'ch-ua-arch=*, ch-ua-bitness=*, ch-ua-full-version=*, ch-ua-full-version-list=*, ch-ua-model=*, ch-ua-wow64=*, ch-ua-form-factor=*, ch-ua-platform=*, ch-ua-platform-version=*',
    //   'cross-origin-opener-policy': 'same-origin',
    //   'cross-origin-resource-policy': 'cross-origin',
    //   'transfer-encoding': 'chunked',
    //   server: 'ESF',
    //   'x-xss-protection': '0',
    //   'x-frame-options': 'SAMEORIGIN',
    //   'x-content-type-options': 'nosniff',
    //   'set-cookie': [
    //     'NID=511=HZ7WE4GVIj9vNPet_TTboJEb7sZlWfweqUjwpN0mJ8VYrio1SaVGefEy445GmTwYydE1n3MzKyMzzd4vQ_oqiiJ90HxxgpW68N4wj3-3F2kG3jmOPU-E9GgIc3cu_Zqrl3DoXAKFEulx0LlRm7NpI2YraGLlQXERsFlP_2ACvEo; expires=Tue, 27-Feb-2024 13:49:45 GMT; path=/; domain=.google.com; Secure; HttpOnly; SameSite=none'
    //   ],
    //   'alt-svc': 'h3=":443"; ma=2592000,h3-29=":443"; ma=2592000',
    //   connection: 'close'
    // },
}
