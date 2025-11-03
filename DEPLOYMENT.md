# 🚀 คู่มือ Deploy ขึ้น Vercel

## วิธีที่ 1: ใช้ Vercel Dashboard (แนะนำ - ง่ายที่สุด!)

### ขั้นตอน:

1. **สมัครสมาชิก Vercel (ฟรี!)**
   - ไปที่ https://vercel.com
   - คลิก "Sign Up"
   - ใช้ GitHub Account เพื่อ Sign In

2. **เชื่อมต่อ GitHub Repository**
   - คลิก "Add New Project"
   - เลือก "Import Git Repository"
   - เลือก Repository นี้ (`apipatb/test`)
   - เลือก Branch: `claude/adjustable-features-011CUm2diP9KmbfvMWUxwr1b`

3. **ตั้งค่าโปรเจค**
   ```
   Framework Preset: Other
   Root Directory: ./
   Build Command: (เว้นว่างไว้)
   Output Directory: ./
   ```

4. **Deploy!**
   - คลิก "Deploy"
   - รอ 30-60 วินาที
   - เสร็จแล้ว! คุณจะได้ URL เช่น `https://your-app.vercel.app`

## วิธีที่ 2: ใช้ Vercel CLI (สำหรับ Advanced Users)

### ขั้นตอน:

1. **Login Vercel**
   ```bash
   vercel login
   ```

2. **Deploy**
   ```bash
   # Deploy แบบ Preview
   vercel

   # หรือ Deploy แบบ Production
   vercel --prod
   ```

3. **รับ URL**
   - Vercel จะให้ URL ทันที
   - Production URL: `https://your-project.vercel.app`
   - Preview URL: `https://your-project-xxx.vercel.app`

## วิธีที่ 3: Auto Deploy จาก GitHub (แนะนำสำหรับ Production)

### ขั้นตอน:

1. **เชื่อมต่อ GitHub กับ Vercel**
   - ทำตามวิธีที่ 1 ข้างบน

2. **ตั้งค่า Auto Deploy**
   - ใน Vercel Dashboard → Settings → Git
   - เปิด "Automatically deploy branches"
   - เลือก branch ที่ต้องการ auto deploy

3. **Push และรอ**
   ```bash
   git push origin your-branch
   ```
   - Vercel จะ deploy อัตโนมัติทุกครั้งที่ push!

## 🌍 ตัวอย่าง URLs

หลังจาก Deploy สำเร็จ คุณจะได้:

- **Production URL**: `https://smart-news-app.vercel.app`
- **Preview URLs**: `https://smart-news-app-git-branch.vercel.app`

## ⚙️ Environment Variables (ถ้าต้องการ)

ถ้าในอนาคตมีการใช้ API Keys:

```bash
# ในไฟล์ .env.local
NEWS_API_KEY=your_api_key_here
NEXT_PUBLIC_API_URL=https://api.example.com
```

จากนั้นเพิ่มใน Vercel Dashboard:
- Settings → Environment Variables
- เพิ่ม KEY และ VALUE

## 🔧 การแก้ปัญหา

### ปัญหา: Build Failed
**แก้ไข**: โปรเจคนี้เป็น Static HTML ไม่ต้อง build
- ตั้ง Build Command เป็นว่าง

### ปัญหา: 404 Not Found
**แก้ไข**: ตรวจสอบ `vercel.json`
```json
{
  "version": 2,
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/$1"
    }
  ]
}
```

### ปัญหา: Deploy ช้า
**แก้ไข**: ปกติแล้วจะเร็วมาก (30-60 วินาที)
- ตรวจสอบ Vercel Status: https://vercel-status.com

## 📱 Custom Domain (ถ้าต้องการ)

1. ไปที่ Vercel Dashboard
2. Settings → Domains
3. เพิ่ม Custom Domain ของคุณ
4. ตั้งค่า DNS ตามที่ Vercel แนะนำ

## 🎉 เสร็จแล้ว!

แอป Smart News ของคุณตอนนี้ออนไลน์แล้ว!

### ฟีเจอร์ที่ได้จาก Vercel:
- ✅ HTTPS อัตโนมัติ
- ✅ CDN ทั่วโลก (เร็วสุดๆ)
- ✅ Auto Deploy จาก Git
- ✅ Preview Deployments
- ✅ Analytics (ดูสถิติผู้เข้าชม)
- ✅ 100% ฟรี สำหรับ personal projects!

---

**หมายเหตุ**: ถ้ามีปัญหาหรือข้อสงสัย ดูเพิ่มเติมได้ที่:
- 📖 Vercel Docs: https://vercel.com/docs
- 💬 Vercel Community: https://github.com/vercel/vercel/discussions
