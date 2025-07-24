// app/api/onboarding/route.ts
import { NextResponse } from 'next/server'
import { google } from 'googleapis'

const auth = new google.auth.GoogleAuth({
  credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY!),
  scopes: [
    'https://www.googleapis.com/auth/documents',
    'https://www.googleapis.com/auth/drive.file',
  ],
})

const docs = google.docs({ version: 'v1', auth })
const drive = google.drive({ version: 'v3', auth })

export async function POST(req: Request) {
  const data = await req.json()

  // ——— 1) Force folderId to be a string — no undefined
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID!
  if (!folderId) {
    throw new Error('Missing GOOGLE_DRIVE_FOLDER_ID')
  }

  // ——— 2) Create the Doc directly in your folder
  const driveRes = await drive.files.create(
    {
      requestBody: {
        name: `Onboarding – ${data.businessName}`,
        mimeType: 'application/vnd.google-apps.document',
        parents: [folderId],
      },
    },
    {}  // ensure TS picks the (params, options?) overload
  )
  const documentId = driveRes.data.id!

  // ——— 3) Fill it with your form fields
  const requests: Array<{ insertText: { location: { index: number }; text: string } }> = []
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
    requestBody: { requests },
  })

  // ——— 4) Return the Doc’s URL
  const docUrl = `https://docs.google.com/document/d/${documentId}/edit`
  return NextResponse.json({ docUrl })
}
