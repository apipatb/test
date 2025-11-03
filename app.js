// ============================================
// 🧠 SMART NEWS APP WITH AI FEATURES
// ============================================

// Sample news data with smart features
const sampleNews = [
    {
        id: 1,
        title: "เทคโนโลยี AI ก้าวหน้าอย่างรวดเร็ว",
        description: "ปัญญาประดิษฐ์กำลังเปลี่ยนแปลงวิธีการทำงานและชีวิตประจำวันของเรา ด้วยการพัฒนาที่ไม่หยุดนิ่ง",
        category: "technology",
        source: "Tech News",
        date: "2025-11-03",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 3,
        tags: ["AI", "เทคโนโลยี", "นวัตกรรม", "ปัญญาประดิษฐ์"],
        views: 1250,
        engagement: 0.85
    },
    {
        id: 2,
        title: "ตลาดหุ้นพุ่งขึ้นสูงสุดในรอบ 5 ปี",
        description: "ตลาดหุ้นมีการเติบโตอย่างต่อเนื่อง นักลงทุนมองในแง่ดีต่อแนวโน้มเศรษฐกิจในปีหน้า",
        category: "business",
        source: "Business Today",
        date: "2025-11-03",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 4,
        tags: ["หุ้น", "การลงทุน", "เศรษฐกิจ", "การเงิน"],
        views: 980,
        engagement: 0.72
    },
    {
        id: 3,
        title: "ทีมชาติไทยคว้าแชมป์ซีเกมส์",
        description: "นักกีฬาไทยทำผลงานได้อย่างยอดเยี่ยม คว้าเหรียญทองมากมายในการแข่งขันซีเกมส์ครั้งนี้",
        category: "sports",
        source: "Sports Weekly",
        date: "2025-11-02",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 5,
        tags: ["ฟุตบอล", "กีฬา", "ทีมชาติ", "ซีเกมส์"],
        views: 2100,
        engagement: 0.92
    },
    {
        id: 4,
        title: "ภาพยนตร์ไทยคว้ารางวัลระดับโลก",
        description: "ผลงานภาพยนตร์ไทยได้รับการยอมรับในเวทีระดับโลก คว้ารางวัลใหญ่จากเทศกาลภาพยนตร์ชื่อดัง",
        category: "entertainment",
        source: "Entertainment Plus",
        date: "2025-11-02",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 4,
        tags: ["ภาพยนตร์", "บันเทิง", "รางวัล", "ไทย"],
        views: 1560,
        engagement: 0.78
    },
    {
        id: 5,
        title: "การออกกำลังกาย 30 นาทีต่อวัน ช่วยเพิ่มสุขภาพ",
        description: "งานวิจัยใหม่ชี้ว่าการออกกำลังกายเพียง 30 นาทีต่อวันสามารถลดความเสี่ยงของโรคต่างๆ ได้มาก",
        category: "health",
        source: "Health Magazine",
        date: "2025-11-01",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 6,
        tags: ["สุขภาพ", "ออกกำลังกาย", "แข็งแรง", "วิจัย"],
        views: 890,
        engagement: 0.68
    },
    {
        id: 6,
        title: "5G เริ่มให้บริการทั่วประเทศ",
        description: "เทคโนโลยี 5G ขยายการให้บริการครอบคลุมทั่วประเทศ พร้อมให้บริการอินเทอร์เน็ตความเร็วสูง",
        category: "technology",
        source: "Tech Daily",
        date: "2025-11-01",
        image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 3,
        tags: ["5G", "เทคโนโลยี", "อินเทอร์เน็ต", "โทรคมนาคม"],
        views: 1340,
        engagement: 0.81
    },
    {
        id: 7,
        title: "บริษัทสตาร์ทอัพไทยระดมทุนได้ 100 ล้าน",
        description: "สตาร์ทอัพไทยในธุรกิจเทคโนโลยีประสบความสำเร็จในการระดมทุนรอบใหม่ มูลค่ากว่า 100 ล้านบาท",
        category: "business",
        source: "Startup News",
        date: "2025-10-31",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 4,
        tags: ["สตาร์ทอัพ", "ธุรกิจ", "ระดมทุน", "เทคโนโลยี"],
        views: 760,
        engagement: 0.65
    },
    {
        id: 8,
        title: "นักวิ่งไทยทำสถิติใหม่",
        description: "นักวิ่งระยะไกลชาวไทยทำสถิติเวลาใหม่ในการแข่งขันมาราธอนระดับนานาชาติ",
        category: "sports",
        source: "Athletics Today",
        date: "2025-10-31",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 3,
        tags: ["วิ่ง", "กีฬา", "มาราธอน", "สถิติ"],
        views: 1120,
        engagement: 0.74
    },
    {
        id: 9,
        title: "คอนเสิร์ตใหญ่เตรียมจัดที่ไทย",
        description: "ศิลปินระดับโลกเตรียมจัดคอนเสิร์ตที่ประเทศไทย คาดว่าจะมีแฟนเพลงแห่ไปชมกันเป็นจำนวนมาก",
        category: "entertainment",
        source: "Music News",
        date: "2025-10-30",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 4,
        tags: ["คอนเสิร์ต", "ดนตรี", "บันเทิง", "ศิลปิน"],
        views: 1890,
        engagement: 0.88
    },
    {
        id: 10,
        title: "อาหารเพื่อสุขภาพกำลังได้รับความนิยม",
        description: "คนไทยหันมาใส่ใจสุขภาพมากขึ้น ธุรกิจอาหารเพื่อสุขภาพและออร์แกนิกเติบโตอย่างรวดเร็ว",
        category: "health",
        source: "Wellness Today",
        date: "2025-10-30",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop",
        sentiment: "positive",
        readingTime: 5,
        tags: ["อาหาร", "สุขภาพ", "ออร์แกนิก", "โภชนาการ"],
        views: 670,
        engagement: 0.61
    }
];

// ============================================
// 🎯 AI & SMART FEATURES
// ============================================

class SmartNewsEngine {
    constructor() {
        this.readHistory = this.loadFromStorage('readHistory') || [];
        this.bookmarks = this.loadFromStorage('bookmarks') || [];
        this.userPreferences = this.loadFromStorage('userPreferences') || {
            categories: {},
            tags: {},
            lastVisit: Date.now()
        };
    }

    // LocalStorage management
    loadFromStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) {
            console.error('Error loading from storage:', e);
            return null;
        }
    }

    saveToStorage(key, data) {
        try {
            localStorage.setItem(key, JSON.stringify(data));
        } catch (e) {
            console.error('Error saving to storage:', e);
        }
    }

    // Track reading behavior
    trackRead(newsId) {
        const news = allNews.find(n => n.id === newsId);
        if (!news) return;

        // Add to read history
        this.readHistory.unshift({
            newsId,
            timestamp: Date.now(),
            category: news.category,
            tags: news.tags
        });

        // Keep only last 50 reads
        this.readHistory = this.readHistory.slice(0, 50);

        // Update preferences
        this.userPreferences.categories[news.category] =
            (this.userPreferences.categories[news.category] || 0) + 1;

        news.tags.forEach(tag => {
            this.userPreferences.tags[tag] =
                (this.userPreferences.tags[tag] || 0) + 1;
        });

        this.saveToStorage('readHistory', this.readHistory);
        this.saveToStorage('userPreferences', this.userPreferences);
    }

    // Toggle bookmark
    toggleBookmark(newsId) {
        const index = this.bookmarks.indexOf(newsId);
        if (index > -1) {
            this.bookmarks.splice(index, 1);
        } else {
            this.bookmarks.push(newsId);
        }
        this.saveToStorage('bookmarks', this.bookmarks);
        return this.bookmarks.includes(newsId);
    }

    isBookmarked(newsId) {
        return this.bookmarks.includes(newsId);
    }

    isRead(newsId) {
        return this.readHistory.some(h => h.newsId === newsId);
    }

    // Calculate recommendation score
    getRecommendationScore(news) {
        let score = 0;

        // Category preference (0-30 points)
        const categoryCount = this.userPreferences.categories[news.category] || 0;
        score += Math.min(categoryCount * 3, 30);

        // Tag matching (0-40 points)
        news.tags.forEach(tag => {
            const tagCount = this.userPreferences.tags[tag] || 0;
            score += Math.min(tagCount * 2, 10);
        });

        // Engagement score (0-20 points)
        score += news.engagement * 20;

        // Recency bonus (0-10 points)
        const daysOld = (Date.now() - new Date(news.date).getTime()) / (1000 * 60 * 60 * 24);
        score += Math.max(10 - daysOld, 0);

        return score;
    }

    // Get personalized recommendations
    getRecommendations(limit = 5) {
        return allNews
            .filter(news => !this.isRead(news.id))
            .map(news => ({
                ...news,
                recommendationScore: this.getRecommendationScore(news)
            }))
            .sort((a, b) => b.recommendationScore - a.recommendationScore)
            .slice(0, limit);
    }

    // Find related news
    getRelatedNews(newsId, limit = 3) {
        const currentNews = allNews.find(n => n.id === newsId);
        if (!currentNews) return [];

        return allNews
            .filter(n => n.id !== newsId)
            .map(news => {
                let similarity = 0;

                // Same category
                if (news.category === currentNews.category) {
                    similarity += 40;
                }

                // Common tags
                const commonTags = news.tags.filter(tag =>
                    currentNews.tags.includes(tag)
                ).length;
                similarity += commonTags * 15;

                return { ...news, similarity };
            })
            .sort((a, b) => b.similarity - a.similarity)
            .slice(0, limit);
    }

    // Fuzzy search with relevance scoring
    fuzzySearch(query, newsArray) {
        if (!query) return newsArray;

        const searchTerms = query.toLowerCase().split(' ').filter(t => t.length > 0);

        return newsArray.map(news => {
            let relevance = 0;
            const titleLower = news.title.toLowerCase();
            const descLower = news.description.toLowerCase();

            searchTerms.forEach(term => {
                // Exact match in title (high score)
                if (titleLower.includes(term)) {
                    relevance += 10;
                }

                // Exact match in description
                if (descLower.includes(term)) {
                    relevance += 5;
                }

                // Tag match
                news.tags.forEach(tag => {
                    if (tag.toLowerCase().includes(term)) {
                        relevance += 7;
                    }
                });

                // Fuzzy match (partial)
                const titleWords = titleLower.split(' ');
                const descWords = descLower.split(' ');

                titleWords.forEach(word => {
                    if (word.includes(term) || term.includes(word)) {
                        relevance += 3;
                    }
                });

                descWords.forEach(word => {
                    if (word.includes(term) || term.includes(word)) {
                        relevance += 1;
                    }
                });
            });

            return { ...news, relevance };
        }).filter(news => news.relevance > 0)
          .sort((a, b) => b.relevance - a.relevance);
    }

    // Calculate trending score
    getTrendingScore(news) {
        const recencyWeight = 0.3;
        const viewsWeight = 0.4;
        const engagementWeight = 0.3;

        const daysOld = (Date.now() - new Date(news.date).getTime()) / (1000 * 60 * 60 * 24);
        const recencyScore = Math.max(0, 1 - (daysOld / 7)); // Decay over 7 days

        const maxViews = Math.max(...allNews.map(n => n.views));
        const viewsScore = news.views / maxViews;

        const trendingScore =
            (recencyScore * recencyWeight) +
            (viewsScore * viewsWeight) +
            (news.engagement * engagementWeight);

        return trendingScore * 100;
    }
}

// ============================================
// 🌓 DARK MODE
// ============================================

class DarkModeManager {
    constructor() {
        this.isDark = localStorage.getItem('darkMode') === 'true';
        this.apply();
    }

    toggle() {
        this.isDark = !this.isDark;
        localStorage.setItem('darkMode', this.isDark);
        this.apply();
    }

    apply() {
        if (this.isDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }
}

// ============================================
// 📊 STATE MANAGEMENT
// ============================================

let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'newest';
let allNews = [...sampleNews];
let sortBy = 'date'; // date, trending, recommended
let smartEngine;
let darkModeManager;

// ============================================
// 🎮 DOM ELEMENTS
// ============================================

const newsContainer = document.getElementById('newsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const sortSelect = document.getElementById('sortSelect');
const newsCount = document.getElementById('newsCount');
const darkModeToggle = document.getElementById('darkModeToggle');

// ============================================
// 🚀 INITIALIZATION
// ============================================

function init() {
    smartEngine = new SmartNewsEngine();
    darkModeManager = new DarkModeManager();

    displayNews(allNews);
    setupEventListeners();
    showRecommendations();
}

// ============================================
// 🎪 EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Category filter buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            filterNews();
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Real-time search
    searchInput.addEventListener('input', () => {
        if (searchInput.value.length > 2 || searchInput.value.length === 0) {
            performSearch();
        }
    });

    // Sort buttons (will be added in HTML)
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-sort]')) {
            sortBy = e.target.dataset.sort;
            document.querySelectorAll('[data-sort]').forEach(btn => {
                btn.classList.remove('active');
            });
            e.target.classList.add('active');
            filterNews();
        }

        if (e.target.matches('[data-dark-mode]')) {
            darkModeManager.toggle();
        }
    });
}

// ============================================
// 🔍 SEARCH & FILTER
// ============================================

function performSearch() {
    searchQuery = searchInput.value.toLowerCase().trim();
    filterNews();
}

function filterNews() {
    let filteredNews = [...allNews];

    // Filter by category
    if (currentCategory === 'favorites') {
        filteredNews = allNews.filter(news => favorites.includes(news.id));
    } else if (currentCategory !== 'all') {
        filteredNews = filteredNews.filter(news => news.category === currentCategory);
    }

    // Smart search with fuzzy matching
    if (searchQuery) {
        filteredNews = smartEngine.fuzzySearch(searchQuery, filteredNews);
    }

    // Sort news
    filteredNews = sortNews(filteredNews);

    displayNews(filteredNews);
}

function sortNews(newsArray) {
    const sorted = [...newsArray];

    switch (sortBy) {
        case 'trending':
            return sorted.sort((a, b) => {
                const scoreA = smartEngine.getTrendingScore(a);
                const scoreB = smartEngine.getTrendingScore(b);
                return scoreB - scoreA;
            });

        case 'recommended':
            return sorted.sort((a, b) => {
                const scoreA = smartEngine.getRecommendationScore(a);
                const scoreB = smartEngine.getRecommendationScore(b);
                return scoreB - scoreA;
            });

        case 'date':
        default:
            return sorted.sort((a, b) =>
                new Date(b.date).getTime() - new Date(a.date).getTime()
            );
    }
}

// ============================================
// 🎨 DISPLAY NEWS
// ============================================

function displayNews(newsArray) {
    newsContainer.innerHTML = '';

    // Update news count
    updateNewsCount(newsArray.length);

    if (newsArray.length === 0) {
        newsContainer.innerHTML = `
            <div class="no-results">
                <div class="empty-state">
                    <span class="empty-icon">🔍</span>
                    <h3>ไม่พบข่าวที่ค้นหา</h3>
                    <p>ลองค้นหาด้วยคำอื่น หรือเปลี่ยนหมวดหมู่</p>
                </div>
            </div>
        `;
        return;
    }

    newsArray.forEach(news => {
        const newsCard = createNewsCard(news);
        newsContainer.appendChild(newsCard);
    });
}

function createNewsCard(news) {
    const card = document.createElement('article');
    card.className = 'news-card';

    if (smartEngine.isRead(news.id)) {
        card.classList.add('read');
    }

    const categoryMap = {
        'technology': 'เทคโนโลยี',
        'business': 'ธุรกิจ',
        'sports': 'กีฬา',
        'entertainment': 'บันเทิง',
        'health': 'สุขภาพ'
    };

    const sentimentEmoji = {
        'positive': '😊',
        'neutral': '😐',
        'negative': '😔'
    };

    const isBookmarked = smartEngine.isBookmarked(news.id);
    const trendingScore = smartEngine.getTrendingScore(news);

    card.innerHTML = `
        <div class="news-image-wrapper">
            <img src="${news.image}" alt="${news.title}" class="news-image"
                 onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop'">
            ${trendingScore > 70 ? '<span class="trending-badge">🔥 Hot</span>' : ''}
            <button class="bookmark-btn ${isBookmarked ? 'bookmarked' : ''}"
                    data-news-id="${news.id}"
                    onclick="event.stopPropagation(); handleBookmark(${news.id})">
                ${isBookmarked ? '⭐' : '☆'}
            </button>
        </div>
        <div class="news-content">
            <div class="news-header">
                <span class="news-category">${categoryMap[news.category]}</span>
                <span class="news-sentiment" title="Sentiment: ${news.sentiment}">
                    ${sentimentEmoji[news.sentiment] || '😐'}
                </span>
            </div>
            <h2 class="news-title">${news.title}</h2>
            <p class="news-description">${news.description}</p>
            <div class="news-tags">
                ${news.tags.slice(0, 3).map(tag =>
                    `<span class="tag">#${tag}</span>`
                ).join('')}
            </div>
            <div class="news-meta">
                <span class="news-source">📰 ${news.source}</span>
                <span class="news-date">📅 ${formatDate(news.date)}</span>
            </div>
            <div class="news-stats">
                <span class="stat" title="เวลาอ่าน">⏱️ ${news.readingTime} นาที</span>
                <span class="stat" title="ยอดเข้าชม">👁️ ${formatNumber(news.views)}</span>
                <span class="stat" title="Engagement">💬 ${(news.engagement * 100).toFixed(0)}%</span>
            </div>
        </div>
    `;

    card.addEventListener('click', () => handleNewsClick(news));

    return card;
}

// ============================================
// 🎯 EVENT HANDLERS
// ============================================

function handleNewsClick(news) {
    smartEngine.trackRead(news.id);
    showNewsDetail(news);
}

function handleBookmark(newsId) {
    const isBookmarked = smartEngine.toggleBookmark(newsId);

    // Update UI
    const bookmarkBtn = document.querySelector(`[data-news-id="${newsId}"]`);
    if (bookmarkBtn) {
        bookmarkBtn.textContent = isBookmarked ? '⭐' : '☆';
        bookmarkBtn.classList.toggle('bookmarked', isBookmarked);
    }

    // Show feedback
    showToast(isBookmarked ? 'บันทึกข่าวแล้ว ⭐' : 'ยกเลิกการบันทึก');
}

function showNewsDetail(news) {
    const relatedNews = smartEngine.getRelatedNews(news.id);

    const modal = document.createElement('div');
    modal.className = 'news-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" onclick="this.closest('.news-modal').remove()">✕</button>
            <img src="${news.image}" alt="${news.title}" class="modal-image">
            <div class="modal-body">
                <span class="news-category">${getCategoryName(news.category)}</span>
                <h1>${news.title}</h1>
                <div class="news-meta">
                    <span>📰 ${news.source}</span>
                    <span>📅 ${formatDate(news.date)}</span>
                    <span>⏱️ ${news.readingTime} นาที</span>
                </div>
                <p class="modal-description">${news.description}</p>
                <div class="news-tags">
                    ${news.tags.map(tag => `<span class="tag">#${tag}</span>`).join('')}
                </div>
                ${relatedNews.length > 0 ? `
                    <div class="related-news">
                        <h3>📌 ข่าวที่เกี่ยวข้อง</h3>
                        <div class="related-grid">
                            ${relatedNews.map(rn => `
                                <div class="related-item" onclick="showNewsDetail(allNews.find(n => n.id === ${rn.id}))">
                                    <img src="${rn.image}" alt="${rn.title}">
                                    <div class="related-content">
                                        <span class="related-category">${getCategoryName(rn.category)}</span>
                                        <h4>${rn.title}</h4>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                ` : ''}
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

function showRecommendations() {
    const recommendations = smartEngine.getRecommendations(3);

    if (recommendations.length === 0 || smartEngine.readHistory.length < 2) {
        return; // Don't show if not enough data
    }

    const container = document.querySelector('.container');
    const recSection = document.createElement('section');
    recSection.className = 'recommendations-section';
    recSection.innerHTML = `
        <h2>🎯 แนะนำสำหรับคุณ</h2>
        <div class="recommendations-grid">
            ${recommendations.map(news => `
                <div class="rec-card" onclick="handleNewsClick(allNews.find(n => n.id === ${news.id}))">
                    <img src="${news.image}" alt="${news.title}">
                    <div class="rec-content">
                        <span class="rec-category">${getCategoryName(news.category)}</span>
                        <h3>${news.title}</h3>
                        <span class="rec-score">คะแนนแนะนำ: ${news.recommendationScore.toFixed(0)}</span>
                    </div>
                </div>
            `).join('')}
        </div>
    `;

    const newsContainer = document.getElementById('newsContainer');
    container.insertBefore(recSection, newsContainer);
}

// ============================================
// 🛠️ UTILITY FUNCTIONS
// ============================================

function formatDate(dateString) {
    const date = new Date(dateString);
    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
                        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

    return `${date.getDate()} ${thaiMonths[date.getMonth()]} ${date.getFullYear() + 543}`;
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

function getCategoryName(category) {
    const map = {
        'technology': 'เทคโนโลยี',
        'business': 'ธุรกิจ',
        'sports': 'กีฬา',
        'entertainment': 'บันเทิง',
        'health': 'สุขภาพ'
    };
    return map[category] || category;
}

// ============================================
// 🔔 TOAST NOTIFICATIONS
// ============================================

function showToast(message, type = 'success') {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    const icon = type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ';
    toast.innerHTML = `<span>${icon}</span><span>${message}</span>`;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ============================================
// 📤 SHARE FUNCTIONS
// ============================================

function getNewsById(id) {
    return allNews.find(news => news.id === id);
}

function shareToFacebook(event, newsId) {
    event.stopPropagation();
    const news = getNewsById(newsId);
    if (!news) return;

    const url = window.location.href;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(news.title)}`;

    window.open(shareUrl, '_blank', 'width=600,height=400');
    showToast('กำลังเปิด Facebook...', 'info');
}

function shareToTwitter(event, newsId) {
    event.stopPropagation();
    const news = getNewsById(newsId);
    if (!news) return;

    const url = window.location.href;
    const text = `${news.title}\n\n#SmartNews #ข่าววันนี้`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

    window.open(shareUrl, '_blank', 'width=600,height=400');
    showToast('กำลังเปิด Twitter (X)...', 'info');
}

function shareToLine(event, newsId) {
    event.stopPropagation();
    const news = getNewsById(newsId);
    if (!news) return;

    const url = window.location.href;
    const message = `${news.title}\n${url}`;
    const shareUrl = `https://line.me/R/msg/text/?${encodeURIComponent(message)}`;

    window.open(shareUrl, '_blank');
    showToast('กำลังเปิด LINE...', 'info');
}

function copyLink(event, newsId) {
    event.stopPropagation();
    const news = getNewsById(newsId);
    if (!news) return;

    const url = window.location.href;
    const text = `${news.title}\n${url}`;

    // Try modern clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text)
            .then(() => {
                showToast('คัดลอกลิงก์สำเร็จ!', 'success');
            })
            .catch(() => {
                fallbackCopyText(text);
            });
    } else {
        fallbackCopyText(text);
    }
}

function fallbackCopyText(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        document.execCommand('copy');
        showToast('คัดลอกลิงก์สำเร็จ!', 'success');
    } catch (err) {
        showToast('ไม่สามารถคัดลอกได้', 'error');
    }

    document.body.removeChild(textarea);
}

// ============================================
// 🏁 INITIALIZE APP
// ============================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
