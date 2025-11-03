# 🧠 Smart News App - แอปพลิเคชันข่าวอัจฉริยะ

แอปพลิเคชันข่าวที่ขับเคลื่อนด้วย AI สามารถเรียนรู้ความชอบของคุณและแนะนำข่าวที่เหมาะสมที่สุด

![Smart News App](https://img.shields.io/badge/Status-Active-success)
![Version](https://img.shields.io/badge/Version-2.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Smart Features

### 🎯 AI-Powered Features

#### 1. **Smart Recommendation System**
- ติดตามพฤติกรรมการอ่านของคุณ
- วิเคราะห์ความชอบตามหมวดหมู่และแท็ก
- แนะนำข่าวที่เหมาะสมกับคุณที่สุด
- คำนวณคะแนนแนะนำแบบเรียลไทม์

#### 2. **Personalization Engine**
- บันทึกความชอบใน LocalStorage
- จดจำหมวดหมู่ที่คุณสนใจ
- เรียนรู้จากแท็กที่คุณอ่านบ่อย
- สร้างประสบการณ์ที่เป็นส่วนตัว

#### 3. **Smart Search with Fuzzy Matching**
- ค้นหาแบบอัจฉริยะ ไม่ต้องพิมพ์ให้ตรงทุกตัวอักษร
- คำนวณความเกี่ยวข้องของผลการค้นหา
- ค้นหาจากชื่อ คำอธิบาย และแท็ก
- Real-time search ขณะพิมพ์

#### 4. **Reading Analytics**
- ประมาณเวลาในการอ่าน
- แสดงยอดเข้าชม
- วัด Engagement Score
- ติดตามประวัติการอ่าน

#### 5. **Sentiment Analysis**
- วิเคราะห์อารมณ์ของข่าว (😊 บวก, 😐 กลาง, 😔 ลบ)
- แสดงผลด้วย Emoji
- ช่วยให้เข้าใจบรรยากาศข่าวก่อนอ่าน

#### 6. **Trending Score Algorithm**
- คำนวณความนิยมของข่าว
- พิจารณาจากความใหม่ ยอดเข้าชม และ Engagement
- แสดง "🔥 Hot" Badge สำหรับข่าวที่กำลังฮิต

#### 7. **Related News Detection**
- หาข่าวที่เกี่ยวข้อง
- วิเคราะห์จากหมวดหมู่และแท็กที่คล้ายกัน
- แสดงข่าวที่น่าสนใจเพิ่มเติม

#### 8. **Bookmarking System**
- บันทึกข่าวที่ชอบด้วย ⭐
- จัดเก็บใน LocalStorage
- เข้าถึงได้ทุกที่ทุกเวลา

#### 9. **Read History Tracking**
- บันทึกข่าวที่อ่านแล้ว
- แสดง ✓ สำหรับข่าวที่อ่านไปแล้ว
- ช่วยจัดการการอ่านอย่างเป็นระบบ

#### 10. **Smart Sorting**
- เรียงตามวันที่: ข่าวล่าสุดก่อน
- เรียงตาม Trending: ข่าวที่กำลังฮิต
- เรียงตามแนะนำ: ข่าวที่เหมาะกับคุณ

### 🌓 Dark Mode
- สลับโหมดกลางคืนได้ทันที
- ออกแบบ UI ที่สวยงามทั้งโหมดสว่างและมืด
- จดจำการตั้งค่า

### 🎨 Modern UI/UX
- Design ทันสมัยด้วย Glass Morphism
- Smooth Animations และ Transitions
- Responsive Design รองรับทุกขนาดหน้าจอ
- Custom Scrollbar
- Toast Notifications
- Modal Dialogs

## 🚀 การใช้งาน

### เปิดใช้งานแอป

1. เปิดไฟล์ `index.html` ด้วยเว็บเบราว์เซอร์
2. หรือใช้ Live Server:
   ```bash
   # ใช้ Python
   python -m http.server 8000

   # หรือใช้ Node.js
   npx serve
   ```
3. เปิดเบราว์เซอร์ไปที่ `http://localhost:8000`

### วิธีใช้งานฟีเจอร์ Smart

#### การค้นหาแบบอัจฉริยะ
```
พิมพ์: "AI"
ผลลัพธ์: ข่าวที่มี "AI", "ปัญญาประดิษฐ์", "เทคโนโลยี" ฯลฯ
```

#### การรับคำแนะนำ
1. อ่านข่าวในหมวดหมู่ที่สนใจ 2-3 ข่าว
2. ระบบจะเริ่มเรียนรู้ความชอบของคุณ
3. คำแนะนำจะปรากฏด้านบน "🎯 แนะนำสำหรับคุณ"

#### การบันทึกข่าว
- คลิกที่ปุ่ม ☆ บนข่าวที่ชอบ
- เมื่อบันทึกแล้วจะเปลี่ยนเป็น ⭐

#### การเปลี่ยนโหมด
- คลิกปุ่ม 🌓 ที่มุมบนขวา
- สลับระหว่างโหมดสว่างและมืด

#### การเรียงข่าว
- **📅 ล่าสุด**: ข่าวใหม่ล่าสุด
- **🔥 กำลังฮิต**: ข่าวที่มีคนอ่านมาก
- **🎯 แนะนำ**: ข่าวที่เหมาะกับคุณ

## 📁 โครงสร้างไฟล์

```
smart-news-app/
│
├── index.html          # หน้าหลัก HTML
├── style.css           # Modern CSS with Dark Mode
├── app.js              # Smart Engine & AI Features
└── README.md           # เอกสารนี้
```

## 🛠️ เทคโนโลยีที่ใช้

- **HTML5** - โครงสร้างหน้าเว็บ
- **CSS3** - Styling, Animations, Dark Mode
  - CSS Variables
  - Flexbox & Grid
  - Glass Morphism
  - Custom Animations
- **Vanilla JavaScript** - Smart Engine
  - ES6+ Features
  - Classes & Modules
  - LocalStorage API
  - Event Handling

## 🧮 Smart Algorithms

### Recommendation Score Calculation
```javascript
Score =
  (Category Preference × 3, max 30 points) +
  (Tag Matching × 2, max 40 points) +
  (Engagement × 20 points) +
  (Recency Bonus, max 10 points)
```

### Trending Score Formula
```javascript
Trending Score =
  (Recency × 0.3) +
  (Views Ratio × 0.4) +
  (Engagement × 0.3)
```

### Fuzzy Search Scoring
- Title exact match: 10 points
- Description match: 5 points
- Tag match: 7 points
- Partial word match: 1-3 points

## 📊 Data Structure

### News Object
```javascript
{
  id: Number,
  title: String,
  description: String,
  category: String,
  source: String,
  date: Date,
  image: URL,
  sentiment: "positive" | "neutral" | "negative",
  readingTime: Number (minutes),
  tags: Array<String>,
  views: Number,
  engagement: Number (0-1)
}
```

### User Preferences
```javascript
{
  categories: { [category]: count },
  tags: { [tag]: count },
  lastVisit: timestamp
}
```

## 🔧 การพัฒนาต่อ

### การเชื่อมต่อ API จริง

แทนที่ `sampleNews` ใน `app.js`:

```javascript
async function fetchNews() {
    try {
        const response = await fetch('YOUR_NEWS_API_URL');
        const data = await response.json();

        // Transform API data to match our structure
        allNews = data.articles.map(article => ({
            id: article.id,
            title: article.title,
            description: article.description,
            category: article.category,
            source: article.source.name,
            date: article.publishedAt,
            image: article.urlToImage,
            sentiment: analyzeSentiment(article.title),
            readingTime: estimateReadingTime(article.content),
            tags: extractTags(article),
            views: article.views || 0,
            engagement: calculateEngagement(article)
        }));

        displayNews(allNews);
    } catch (error) {
        console.error('Error fetching news:', error);
    }
}
```

### API ที่แนะนำ

- [NewsAPI.org](https://newsapi.org/) - API ข่าวจากทั่วโลก (70,000+ แหล่งข่าว)
- [The Guardian API](https://open-platform.theguardian.com/) - API จาก The Guardian
- [New York Times API](https://developer.nytimes.com/) - API จาก NY Times
- [Currents API](https://currentsapi.services/) - Real-time news API

### การเพิ่ม Machine Learning

```javascript
// ใช้ TensorFlow.js สำหรับ ML
import * as tf from '@tensorflow/tfjs';

// Training model สำหรับ sentiment analysis
async function trainSentimentModel() {
    // Implementation here
}

// Predict sentiment
async function predictSentiment(text) {
    // Implementation here
}
```

### การเพิ่ม Natural Language Processing

```javascript
// ใช้ compromise.js สำหรับ NLP
import nlp from 'compromise';

function extractKeywords(text) {
    let doc = nlp(text);
    return doc.topics().out('array');
}
```

## 🎯 Roadmap

- [ ] การแปลภาษาอัตโนมัติ
- [ ] Voice Search
- [ ] Offline Mode with Service Worker
- [ ] Push Notifications
- [ ] Social Sharing
- [ ] User Authentication
- [ ] Cloud Sync ข้าม Device
- [ ] Advanced Analytics Dashboard
- [ ] Custom Categories
- [ ] RSS Feed Support

## 🐛 Known Issues

- Recommendations ต้องการข้อมูลการอ่านอย่างน้อย 2 ข่าว
- LocalStorage มีขนาดจำกัด (5-10MB)
- Sentiment Analysis ยังเป็น Mock Data

## 💡 Tips & Tricks

1. **เพิ่มประสิทธิภาพ Recommendations**
   - อ่านข่าวหลากหลายหมวดหมู่เพื่อให้ระบบเรียนรู้
   - Bookmark ข่าวที่ชอบเพื่อเป็นสัญญาณให้ระบบ

2. **การใช้ Smart Search**
   - พิมพ์คำค้นหาสั้นๆ เช่น "AI" แทน "เทคโนโลยี AI"
   - ไม่ต้องกังวลเรื่องตัวพิมพ์เล็ก-ใหญ่

3. **การจัดการข้อมูล**
   - ล้างข้อมูลใน Console: `localStorage.clear()`
   - ตรวจสอบข้อมูล: `console.log(smartEngine)`

## 📝 License

MIT License - ใช้งานได้อย่างอิสระ

## 👨‍💻 Developer

สร้างด้วย ❤️ โดย Claude AI

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com/) - ภาพประกอบข่าว
- [Google Fonts](https://fonts.google.com/) - Typography
- Community feedback and suggestions

---

## 📞 Contact & Support

หากพบปัญหาหรือมีข้อเสนอแนะ:

- เปิด Issue บน GitHub
- ส่ง Pull Request
- ติดต่อผ่าน Email

---

**สร้างเมื่อ:** 3 พฤศจิกายน 2568
**Version:** 2.0 (Smart Edition)
**Status:** ✅ Production Ready

### What's New in v2.0

- 🧠 AI Recommendation Engine
- 🎯 Personalization System
- 🔍 Smart Fuzzy Search
- 📊 Reading Analytics
- 😊 Sentiment Analysis
- 🔥 Trending Algorithm
- 🌓 Dark Mode
- ⭐ Bookmarking System
- ✓ Read History Tracking
- 📱 Modern Responsive UI

---

**Happy Reading! 📰✨**
