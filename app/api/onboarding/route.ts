// app/api/onboarding/route.ts
import { NextResponse } from 'next/server'
import { google } from 'googleapis'

// parse the service account key & set up auth
const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
  scopes: [
    'https://www.googleapis.com/auth/documents',
    'https://www.googleapis.com/auth/drive.file'
  ]
})

const docs = google.docs({ version: 'v1', auth })
const drive = google.drive({ version: 'v3', auth })

export async function POST(req: Request) {
  const data = await req.json()

  // 1) Create a new Doc titled with the business name
  const createRes = await docs.documents.create({
    requestBody: { title: `Onboarding – ${data.businessName}` }
  })
  const documentId = createRes.data.documentId!

  // 2) Build a batchUpdate request to insert all form fields
  const requests: Array<any> = []
  let cursor = 1
  for (const [key, value] of Object.entries(data)) {
    const label = key
      // split camelCase into words
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
    const text = `${label}: ${value}\n`
    requests.push({
      insertText: { location: { index: cursor }, text }
    })
    cursor += text.length
  }
  await docs.documents.batchUpdate({
    documentId,
    requestBody: { requests }
  })

  // 3) (Optional) Move the doc into a specific Drive folder
  if (process.env.GOOGLE_DRIVE_FOLDER_ID) {
    await drive.files.update({
      fileId: documentId,
      addParents: process.env.GOOGLE_DRIVE_FOLDER_ID,
      removeParents: 'root'
    })
  }

  // 4) Return the Doc’s URL so you can link to it if you like
  const docUrl = `https://docs.google.com/document/d/${documentId}/edit`
  return NextResponse.json({ docUrl })
}
