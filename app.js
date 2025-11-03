// Sample news data (in a real app, this would come from an API like NewsAPI.org)
const sampleNews = [
    {
        id: 1,
        title: "เทคโนโลยี AI ก้าวหน้าอย่างรวดเร็ว",
        description: "ปัญญาประดิษฐ์กำลังเปลี่ยนแปลงวิธีการทำงานและชีวิตประจำวันของเรา ด้วยการพัฒนาที่ไม่หยุดนิ่ง นักวิจัยทั่วโลกกำลังพัฒนาระบบ AI ที่ฉลาดขึ้นเรื่อยๆ ซึ่งจะนำมาซึ่งการเปลี่ยนแปลงครั้งใหญ่ในอนาคต",
        category: "technology",
        source: "Tech News",
        date: "2025-11-03",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop"
    },
    {
        id: 2,
        title: "ตลาดหุ้นพุ่งขึ้นสูงสุดในรอบ 5 ปี",
        description: "ตลาดหุ้นมีการเติบโตอย่างต่อเนื่อง นักลงทุนมองในแง่ดีต่อแนวโน้มเศรษฐกิจในปีหน้า หลายบริษัทประกาศกำไรที่เพิ่มขึ้น ทำให้ความเชื่อมั่นในตลาดสูงขึ้น",
        category: "business",
        source: "Business Today",
        date: "2025-11-03",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop"
    },
    {
        id: 3,
        title: "ทีมชาติไทยคว้าแชมป์ซีเกมส์",
        description: "นักกีฬาไทยทำผลงานได้อย่างยอดเยี่ยม คว้าเหรียญทองมากมายในการแข่งขันซีเกมส์ครั้งนี้ แสดงให้เห็นถึงศักยภาพและความมุ่งมั่นในการฝึกซ้อม",
        category: "sports",
        source: "Sports Weekly",
        date: "2025-11-02",
        image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=500&h=300&fit=crop"
    },
    {
        id: 4,
        title: "ภาพยนตร์ไทยคว้ารางวัลระดับโลก",
        description: "ผลงานภาพยนตร์ไทยได้รับการยอมรับในเวทีระดับโลก คว้ารางวัลใหญ่จากเทศกาลภาพยนตร์ชื่อดัง เป็นความภาคภูมิใจของวงการภาพยนตร์ไทย",
        category: "entertainment",
        source: "Entertainment Plus",
        date: "2025-11-02",
        image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&h=300&fit=crop"
    },
    {
        id: 5,
        title: "การออกกำลังกาย 30 นาทีต่อวัน ช่วยเพิ่มสุขภาพ",
        description: "งานวิจัยใหม่ชี้ว่าการออกกำลังกายเพียง 30 นาทีต่อวันสามารถลดความเสี่ยงของโรคต่างๆ ได้มาก รวมถึงโรคหัวใจและเบาหวาน แพทย์แนะนำให้ออกกำลังกายสม่ำเสมอ",
        category: "health",
        source: "Health Magazine",
        date: "2025-11-01",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=500&h=300&fit=crop"
    },
    {
        id: 6,
        title: "5G เริ่มให้บริการทั่วประเทศ",
        description: "เทคโนโลยี 5G ขยายการให้บริการครอบคลุมทั่วประเทศ พร้อมให้บริการอินเทอร์เน็ตความเร็วสูง ผู้ใช้งานสามารถเพลิดเพลินกับความเร็วที่เหนือกว่า 4G หลายเท่า",
        category: "technology",
        source: "Tech Daily",
        date: "2025-11-01",
        image: "https://images.unsplash.com/photo-1551808525-51a94da548ce?w=500&h=300&fit=crop"
    },
    {
        id: 7,
        title: "บริษัทสตาร์ทอัพไทยระดมทุนได้ 100 ล้าน",
        description: "สตาร์ทอัพไทยในธุรกิจเทคโนโลยีประสบความสำเร็จในการระดมทุนรอบใหม่ มูลค่ากว่า 100 ล้านบาท จากนักลงทุนทั้งในและต่างประเทศ",
        category: "business",
        source: "Startup News",
        date: "2025-10-31",
        image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop"
    },
    {
        id: 8,
        title: "นักวิ่งไทยทำสถิติใหม่",
        description: "นักวิ่งระยะไกลชาวไทยทำสถิติเวลาใหม่ในการแข่งขันมาราธอนระดับนานาชาติ ด้วยเวลาที่ดีที่สุดในประวัติศาสตร์ของนักกีฬาไทย",
        category: "sports",
        source: "Athletics Today",
        date: "2025-10-31",
        image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=500&h=300&fit=crop"
    },
    {
        id: 9,
        title: "คอนเสิร์ตใหญ่เตรียมจัดที่ไทย",
        description: "ศิลปินระดับโลกเตรียมจัดคอนเสิร์ตที่ประเทศไทย คาดว่าจะมีแฟนเพลงแห่ไปชมกันเป็นจำนวนมาก บัตรคาดว่าจะหมดภายในไม่กี่ชั่วโมง",
        category: "entertainment",
        source: "Music News",
        date: "2025-10-30",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=500&h=300&fit=crop"
    },
    {
        id: 10,
        title: "อาหารเพื่อสุขภาพกำลังได้รับความนิยม",
        description: "คนไทยหันมาใส่ใจสุขภาพมากขึ้น ธุรกิจอาหารเพื่อสุขภาพและออร์แกนิกเติบโตอย่างรวดเร็ว นักโภชนาการแนะนำให้เลือกรับประทานอาหารที่มีประโยชน์",
        category: "health",
        source: "Wellness Today",
        date: "2025-10-30",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop"
    }
];

// State management
let currentCategory = 'all';
let searchQuery = '';
let currentView = 'all'; // 'all' or 'favorites'
let currentSort = 'newest';
let allNews = [...sampleNews];
let favorites = JSON.parse(localStorage.getItem('newsAppFavorites') || '[]');

// DOM Elements
const newsContainer = document.getElementById('newsContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const darkModeToggle = document.getElementById('darkModeToggle');
const favoritesBtn = document.getElementById('favoritesBtn');
const favCount = document.getElementById('favCount');
const tabBtns = document.querySelectorAll('.tab-btn');
const sortSelect = document.getElementById('sortSelect');
const modal = document.getElementById('newsModal');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close-btn');

// Initialize app
function init() {
    loadDarkMode();
    updateFavCount();
    displayNews(getSortedNews(allNews));
    setupEventListeners();
}

// Load dark mode preference
function loadDarkMode() {
    const isDarkMode = localStorage.getItem('newsAppDarkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeToggle.querySelector('.icon').textContent = '☀️';
    }
}

// Setup event listeners
function setupEventListeners() {
    // Dark mode toggle
    darkModeToggle.addEventListener('click', toggleDarkMode);

    // Favorites button
    favoritesBtn.addEventListener('click', () => {
        switchView('favorites');
    });

    // View tabs
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentView = btn.dataset.view;
            filterNews();
        });
    });

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

    // Sort functionality
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        filterNews();
    });

    // Modal close
    closeBtn.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('newsAppDarkMode', isDarkMode);
    darkModeToggle.querySelector('.icon').textContent = isDarkMode ? '☀️' : '🌙';
}

// Switch view
function switchView(view) {
    currentView = view;
    tabBtns.forEach(btn => {
        if (btn.dataset.view === view) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    filterNews();
}

// Update favorites count
function updateFavCount() {
    favCount.textContent = favorites.length;
}

// Perform search
function performSearch() {
    searchQuery = searchInput.value.toLowerCase().trim();
    filterNews();
}

// Get sorted news
function getSortedNews(newsArray) {
    const sorted = [...newsArray];

    switch (currentSort) {
        case 'newest':
            sorted.sort((a, b) => new Date(b.date) - new Date(a.date));
            break;
        case 'oldest':
            sorted.sort((a, b) => new Date(a.date) - new Date(b.date));
            break;
        case 'title':
            sorted.sort((a, b) => a.title.localeCompare(b.title, 'th'));
            break;
    }

    return sorted;
}

// Filter news based on category, search query, and view
function filterNews() {
    let filteredNews = allNews;

    // Filter by view (all or favorites)
    if (currentView === 'favorites') {
        filteredNews = allNews.filter(news => favorites.includes(news.id));
    }

    // Filter by category
    if (currentCategory !== 'all') {
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
    filteredNews = getSortedNews(filteredNews);

    displayNews(filteredNews);
}

// Display news articles
function displayNews(newsArray) {
    newsContainer.innerHTML = '';

    if (newsArray.length === 0) {
        const message = currentView === 'favorites'
            ? 'ยังไม่มีข่าวที่บันทึกไว้'
            : 'ไม่พบข่าวที่ค้นหา';
        newsContainer.innerHTML = `<div class="no-results">${message}</div>`;
        return;
    }

    newsArray.forEach((news, index) => {
        setTimeout(() => {
            const newsCard = createNewsCard(news);
            newsContainer.appendChild(newsCard);
        }, index * 50); // Staggered animation
    });
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
        <img src="${news.image}" alt="${news.title}" class="news-image" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=500&h=300&fit=crop'">
        <div class="news-content">
            <span class="news-category">${categoryMap[news.category]}</span>
            <h2 class="news-title">${news.title}</h2>
            <p class="news-description">${news.description.substring(0, 120)}...</p>
            <div class="news-meta">
                <span class="news-source">${news.source}</span>
                <span class="news-date">${formatDate(news.date)}</span>
            </div>
            <div class="news-actions">
                <button class="action-btn favorite-btn ${isFavorited ? 'favorited' : ''}" data-id="${news.id}">
                    ${isFavorited ? '❤️' : '🤍'} ${isFavorited ? 'บันทึกแล้ว' : 'บันทึก'}
                </button>
                <button class="action-btn share-btn" data-id="${news.id}">
                    📤 แชร์
                </button>
            </div>
        </div>
    `;

    // Click card to open modal
    card.addEventListener('click', (e) => {
        // Don't open modal if clicking action buttons
        if (!e.target.closest('.action-btn')) {
            openModal(news);
        }
    });

    // Favorite button
    const favoriteBtn = card.querySelector('.favorite-btn');
    favoriteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(news.id);
    });

    // Share button
    const shareBtn = card.querySelector('.share-btn');
    shareBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        shareNews(news);
    });

    return card;
}

// Toggle favorite
function toggleFavorite(newsId) {
    const index = favorites.indexOf(newsId);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(newsId);
    }

    localStorage.setItem('newsAppFavorites', JSON.stringify(favorites));
    updateFavCount();
    filterNews(); // Refresh display
}

// Share news
function shareNews(news) {
    const shareText = `📰 ${news.title}\n\n${news.description}\n\nแหล่งที่มา: ${news.source}`;

    // Check if Web Share API is available
    if (navigator.share) {
        navigator.share({
            title: news.title,
            text: shareText,
        }).catch(err => console.log('Error sharing:', err));
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('คัดลอกข้อความไปยังคลิปบอร์ดแล้ว!');
        }).catch(err => {
            console.error('Error copying to clipboard:', err);
            alert('ไม่สามารถแชร์ได้');
        });
    }
}

// Open modal with news details
function openModal(news) {
    const categoryMap = {
        'technology': 'เทคโนโลยี',
        'business': 'ธุรกิจ',
        'sports': 'กีฬา',
        'entertainment': 'บันเทิง',
        'health': 'สุขภาพ'
    };

    const isFavorited = favorites.includes(news.id);

    modalBody.innerHTML = `
        <img src="${news.image}" alt="${news.title}" class="modal-image" onerror="this.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=400&fit=crop'">
        <div class="modal-body">
            <span class="modal-category">${categoryMap[news.category]}</span>
            <h1 class="modal-title">${news.title}</h1>
            <div class="modal-meta">
                <span><strong>แหล่งที่มา:</strong> ${news.source}</span>
                <span><strong>วันที่:</strong> ${formatDate(news.date)}</span>
            </div>
            <p class="modal-description">${news.description}</p>
            <p class="modal-description">
                นี่คือข้อมูลเพิ่มเติมเกี่ยวกับข่าวนี้ ในแอปพลิเคชันจริงจะมีเนื้อหาข่าวฉบับเต็มที่ดึงมาจาก API
                พร้อมรายละเอียดที่ครบถ้วนมากกว่านี้ รวมถึงวิดีโอ รูปภาพประกอบ และลิงก์ที่เกี่ยวข้อง
            </p>
            <div class="modal-actions">
                <button class="modal-btn primary favorite-modal-btn ${isFavorited ? 'favorited' : ''}" data-id="${news.id}">
                    ${isFavorited ? '❤️ บันทึกแล้ว' : '🤍 บันทึก'}
                </button>
                <button class="modal-btn secondary share-modal-btn" data-id="${news.id}">
                    📤 แชร์
                </button>
            </div>
        </div>
    `;

    // Modal favorite button
    const favoriteModalBtn = modalBody.querySelector('.favorite-modal-btn');
    favoriteModalBtn.addEventListener('click', () => {
        toggleFavorite(news.id);
        // Update button text
        const newIsFavorited = favorites.includes(news.id);
        favoriteModalBtn.innerHTML = newIsFavorited ? '❤️ บันทึกแล้ว' : '🤍 บันทึก';
        favoriteModalBtn.classList.toggle('favorited', newIsFavorited);
    });

    // Modal share button
    const shareModalBtn = modalBody.querySelector('.share-modal-btn');
    shareModalBtn.addEventListener('click', () => shareNews(news));

    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

// Close modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Restore scrolling
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
