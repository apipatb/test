// Sample news data (in a real app, this would come from an API like NewsAPI.org)
const sampleNews = [
    {
        id: 1,
        title: "เทคโนโลยี AI ก้าวหน้าอย่างรวดเร็ว",
        description: "ปัญญาประดิษฐ์กำลังเปลี่ยนแปลงวิธีการทำงานและชีวิตประจำวันของเรา ด้วยการพัฒนาที่ไม่หยุดนิ่ง",
        category: "technology",
        source: "Tech News",
        date: "2025-11-03",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
    },
    {
        id: 2,
        title: "ตลาดหุ้นพุ่งขึ้นสูงสุดในรอบ 5 ปี",
        description: "ตลาดหุ้นมีการเติบโตอย่างต่อเนื่อง นักลงทุนมองในแง่ดีต่อแนวโน้มเศรษฐกิจในปีหน้า",
        category: "business",
        source: "Business Today",
        date: "2025-11-03",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop"
    },
    {
        id: 3,
        title: "ทีมชาติไทยคว้าแชมป์ซีเกมส์",
        description: "นักกีฬาไทยทำผลงานได้อย่างยอดเยี่ยม คว้าเหรียญทองมากมายในการแข่งขันซีเกมส์ครั้งนี้",
        category: "sports",
        source: "Sports Weekly",
        date: "2025-11-02",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop"
    },
    {
        id: 4,
        title: "ภาพยนตร์ไทยคว้ารางวัลระดับโลก",
        description: "ผลงานภาพยนตร์ไทยได้รับการยอมรับในเวทีระดับโลก คว้ารางวัลใหญ่จากเทศกาลภาพยนตร์ชื่อดัง",
        category: "entertainment",
        source: "Entertainment Plus",
        date: "2025-11-02",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=300&fit=crop"
    },
    {
        id: 5,
        title: "การออกกำลังกาย 30 นาทีต่อวัน ช่วยเพิ่มสุขภาพ",
        description: "งานวิจัยใหม่ชี้ว่าการออกกำลังกายเพียง 30 นาทีต่อวันสามารถลดความเสี่ยงของโรคต่างๆ ได้มาก",
        category: "health",
        source: "Health Magazine",
        date: "2025-11-01",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=300&fit=crop"
    },
    {
        id: 6,
        title: "5G เริ่มให้บริการทั่วประเทศ",
        description: "เทคโนโลยี 5G ขยายการให้บริการครอบคลุมทั่วประเทศ พร้อมให้บริการอินเทอร์เน็ตความเร็วสูง",
        category: "technology",
        source: "Tech Daily",
        date: "2025-11-01",
        image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500&h=300&fit=crop"
    },
    {
        id: 7,
        title: "บริษัทสตาร์ทอัพไทยระดมทุนได้ 100 ล้าน",
        description: "สตาร์ทอัพไทยในธุรกิจเทคโนโลยีประสบความสำเร็จในการระดมทุนรอบใหม่ มูลค่ากว่า 100 ล้านบาท",
        category: "business",
        source: "Startup News",
        date: "2025-10-31",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
    },
    {
        id: 8,
        title: "นักวิ่งไทยทำสถิติใหม่",
        description: "นักวิ่งระยะไกลชาวไทยทำสถิติเวลาใหม่ในการแข่งขันมาราธอนระดับนานาชาติ",
        category: "sports",
        source: "Athletics Today",
        date: "2025-10-31",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&h=300&fit=crop"
    },
    {
        id: 9,
        title: "คอนเสิร์ตใหญ่เตรียมจัดที่ไทย",
        description: "ศิลปินระดับโลกเตรียมจัดคอนเสิร์ตที่ประเทศไทย คาดว่าจะมีแฟนเพลงแห่ไปชมกันเป็นจำนวนมาก",
        category: "entertainment",
        source: "Music News",
        date: "2025-10-30",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=300&fit=crop"
    },
    {
        id: 10,
        title: "อาหารเพื่อสุขภาพกำลังได้รับความนิยม",
        description: "คนไทยหันมาใส่ใจสุขภาพมากขึ้น ธุรกิจอาหารเพื่อสุขภาพและออร์แกนิกเติบโตอย่างรวดเร็ว",
        category: "health",
        source: "Wellness Today",
        date: "2025-10-30",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop"
    }
];

// State management
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'newest';
let allNews = [...sampleNews];
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// DOM Elements
const newsContainer = document.getElementById('newsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const clearBtn = document.getElementById('clearBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const sortSelect = document.getElementById('sortSelect');
const newsCount = document.getElementById('newsCount');
const darkModeToggle = document.getElementById('darkModeToggle');

// Initialize app
function init() {
    loadDarkModePreference();
    displayNews(getFilteredAndSortedNews());
    setupEventListeners();
}

// Load dark mode preference from localStorage
function loadDarkModePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

// Setup event listeners
function setupEventListeners() {
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Category filter buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
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

    // Clear search
    clearBtn.addEventListener('click', clearSearch);

    // Sort functionality
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterNews();
    });
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Perform search
function performSearch() {
    searchQuery = searchInput.value.toLowerCase().trim();
    filterNews();
}

// Clear search
function clearSearch() {
    searchInput.value = '';
    searchQuery = '';
    // Reset to "all" category
    currentCategory = 'all';
    categoryBtns.forEach(btn => {
        if (btn.dataset.category === 'all') {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    filterNews();
}

// Get filtered and sorted news
function getFilteredAndSortedNews() {
    let filteredNews = allNews;

    // Filter by category
    if (currentCategory === 'favorites') {
        filteredNews = allNews.filter(news => favorites.includes(news.id));
    } else if (currentCategory !== 'all') {
        filteredNews = filteredNews.filter(news => news.category === currentCategory);
    }

    // Filter by search query
    if (searchQuery) {
        filteredNews = filteredNews.filter(news =>
            news.title.toLowerCase().includes(searchQuery) ||
            news.description.toLowerCase().includes(searchQuery)
        );
    }

    // Sort news
    filteredNews = sortNews(filteredNews);

    return filteredNews;
}

// Sort news
function sortNews(newsArray) {
    return [...newsArray].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);

        if (currentSort === 'newest') {
            return dateB - dateA; // Newest first
        } else {
            return dateA - dateB; // Oldest first
        }
    });
}

// Filter news based on category and search query
function filterNews() {
    const filteredNews = getFilteredAndSortedNews();
    displayNews(filteredNews);
}

// Display news articles
function displayNews(newsArray) {
    newsContainer.innerHTML = '';

    // Update news count
    updateNewsCount(newsArray.length);

    if (newsArray.length === 0) {
        newsContainer.innerHTML = '<div class="no-results">ไม่พบข่าวที่ค้นหา</div>';
        return;
    }

    newsArray.forEach(news => {
        const newsCard = createNewsCard(news);
        newsContainer.appendChild(newsCard);
    });
}

// Update news count display
function updateNewsCount(count) {
    newsCount.textContent = `พบข่าว ${count} รายการ`;
}

// Create news card element
function createNewsCard(news) {
    const card = document.createElement('article');
    card.className = 'news-card';

    const categoryMap = {
        'technology': 'เทคโนโลยี',
        'business': 'ธุรกิจ',
        'sports': 'กีฬา',
        'entertainment': 'บันเทิง',
        'health': 'สุขภาพ'
    };

    const isFavorited = favorites.includes(news.id);

    card.innerHTML = `
        <div style="position: relative;">
            <img src="${news.image}" alt="${news.title}" class="news-image" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop'">
            <button class="favorite-btn ${isFavorited ? 'favorited' : ''}" data-id="${news.id}" onclick="toggleFavorite(event, ${news.id})">
                ${isFavorited ? '⭐' : '☆'}
            </button>
        </div>
        <div class="news-content">
            <span class="news-category">${categoryMap[news.category]}</span>
            <h2 class="news-title">${news.title}</h2>
            <p class="news-description">${news.description}</p>
            <div class="news-meta">
                <span class="news-source">${news.source}</span>
                <span class="news-date">${formatDate(news.date)}</span>
            </div>
        </div>
    `;

    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on favorite button
        if (!e.target.classList.contains('favorite-btn')) {
            showNewsDetail(news);
        }
    });

    return card;
}

// Toggle favorite
function toggleFavorite(event, newsId) {
    event.stopPropagation(); // Prevent card click

    const index = favorites.indexOf(newsId);
    if (index > -1) {
        // Remove from favorites
        favorites.splice(index, 1);
    } else {
        // Add to favorites
        favorites.push(newsId);
    }

    // Save to localStorage
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Update display
    filterNews();
}

// Show news detail
function showNewsDetail(news) {
    alert(`คุณคลิกที่: ${news.title}\n\nในแอปจริง จะเปิดหน้ารายละเอียดข่าวฉบับเต็ม`);
}

// Format date to Thai format
function formatDate(dateString) {
    const date = new Date(dateString);
    const thaiMonths = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.',
                        'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

    return `${date.getDate()} ${thaiMonths[date.getMonth()]} ${date.getFullYear() + 543}`;
}

// Initialize the app when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
