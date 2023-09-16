import { google } from "googleapis";
import * as pkey from ".secret/googleApi.json";

const SCOPES = ['https://www.googleapis.com/auth/drive.file'];

async function authorize() {
    const jwtClient = new google.auth.JWT(
      pkey.client_email,
      null,
      pkey.private_key,
      SCOPES
    )
    await jwtClient.authorize();
    return jwtClient;
  }

export async function uploadFile(upFile: any, name:string) {
    const auth = await authorize()
    const drive = google.drive({ version: 'v3', auth: auth });

      const file = await drive.files.create({
        media: {
          body: upFile
        },
        fields: 'id,name',
        requestBody: {
          name: name,
          parents: ["16XWWuxdPxOUc7km49gHhRernykEW6kuh"]
        },
      });
      return file.data.id
  }

 export async function deleteFile(fileId: string) {
    const auth = await authorize()
    const drive = google.drive({ version: 'v3', auth: auth });
    const file = await drive.files.delete({
      fileId
    })
    return file.data
   }