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

  // 1) Create the Google Doc *inside* your folder
  const driveRes = await drive.files.create({
    requestBody: {
      name: `Onboarding – ${data.businessName}`,
      mimeType: 'application/vnd.google-apps.document',
      parents: [process.env.GOOGLE_DRIVE_FOLDER_ID]
    }
  })
  const documentId = driveRes.data.id!
  
  // 2) Batch‑update to populate form fields
  const requests: any[] = []
  let cursor = 1
  for (const [key, value] of Object.entries(data)) {
    const label = key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase())
    const text = `${label}: ${value}\n`
    requests.push({ insertText: { location: { index: cursor }, text } })
    cursor += text.length
  }
  await docs.documents.batchUpdate({
    documentId,
    requestBody: { requests }
  })

  // 3) Return the URL
  const docUrl = `https://docs.google.com/document/d/${documentId}/edit`
  return NextResponse.json({ docUrl })
}