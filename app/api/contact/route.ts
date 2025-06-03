import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()

  const { name, phone, email, message } = body

  // ✅ TODO: xử lý gửi email hoặc lưu DB ở đây
  console.log('📨 Liên hệ mới:', { name, phone, email, message })

  return NextResponse.json({ success: true })
}
