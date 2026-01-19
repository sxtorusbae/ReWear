// --- BAGIAN 1: LOGIKA MOBILE MENU (TAMBAHAN BARU) ---
const navLinks = document.getElementById('navLinks');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navOverlay = document.getElementById('navOverlay');
const menuIcon = mobileMenuBtn.querySelector('i');

// Toggle Menu
mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    navOverlay.classList.toggle('active');
    
    // Ubah icon dari Bars ke Times (Silang)
    if(navLinks.classList.contains('nav-active')){
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
        document.body.style.overflow = 'hidden';
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
    
});

// Event Listeners
navOverlay.addEventListener('click', closeMenu);

// Tutup menu saat link diklik (Navigasi)
document.querySelectorAll('.nav-links li').forEach(li => {
    li.addEventListener('click', closeMenu);
});

function toggleMenu() {
    navLinks.classList.toggle('nav-active');
    navOverlay.classList.toggle('active');
    
    // Animasi Icon: Ganti dari Bars ke Times (Silang)
    if(navLinks.classList.contains('nav-active')){
        menuIcon.className = 'fas fa-times'; // Ubah ke icon silang
        document.body.style.overflow = 'hidden'; // Kunci scroll agar tidak goyang
    } else {
        menuIcon.className = 'fas fa-bars'; // Kembalikan ke icon menu
        document.body.style.overflow = 'auto'; // Aktifkan scroll kembali
    }
}

function showPage(pageId) {
    // 1. Sembunyikan semua halaman
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // 2. Tampilkan halaman yang dipilih
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // 3. Update URL Hash tanpa refresh (PENTING)
        window.location.hash = pageId;
    }
    
    // 4. Update status active di menu navigasi
    document.querySelectorAll('.nav-links li').forEach(li => {
        li.classList.remove('active');
        // Jika teks menu mengandung nama pageId (case insensitive)
        if(li.innerText.toLowerCase().includes(pageId)) {
            li.classList.add('active');
        }
    });

    window.scrollTo(0, 0);
}

function closeMenu() {
    navLinks.classList.remove('nav-active');
    navOverlay.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    document.body.style.overflow = 'auto';
}

// Fungsi untuk mengecek hash saat pertama kali load atau refresh
function handleRouting() {
    const currentHash = window.location.hash.replace('#', '');
    
    // Daftar halaman yang tersedia
    const validPages = ['home', 'shop', 'about', 'contact'];
    
    if (validPages.includes(currentHash)) {
        showPage(currentHash);
    } else {
        showPage('home'); // Default jika hash kosong atau ngawur
    }
}

// Jalankan saat window selesai loading
window.addEventListener('load', handleRouting);

// Jalankan jika user klik tombol "Back/Forward" di browser
window.addEventListener('hashchange', handleRouting);


// --- BAGIAN 2: DATA & FUNGSI (SAMA SEPERTI SEBELUMNYA) ---
const products = [
    {
        id: 1,
        name: "Vintage Denim Jacket 90s",
        category: "c2c",
        gender: "unisex",
        price: 150000,
        rating: 4.8,
        seller: "Budi Thrift",
        image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Uniqlo Flannel Shirt",
        category: "b2c",
        gender: "male",
        price: 85000,
        rating: 4.5,
        seller: "ThriftKita Store",
        image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        name: "Floral Summer Dress",
        category: "c2c",
        gender: "female",
        price: 120000,
        rating: 4.9,
        seller: "Siska Preloved",
        image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Nike Windbreaker Vintage",
        category: "b2c",
        gender: "unisex",
        price: 250000,
        rating: 5.0,
        seller: "Hype Beast Thrift",
        image: "https://images.unsplash.com/photo-1606105961785-359553db19b7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Zara Blazer Kerja",
        category: "c2c",
        gender: "female",
        price: 200000,
        rating: 4.7,
        seller: "Preloved by Andin",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Kaos Band Nirvana",
        category: "b2c",
        gender: "unisex",
        price: 95000,
        rating: 4.6,
        seller: "Rock Vintage Store",
        image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

function renderProducts(data) {
    const container = document.getElementById('productContainer');
    container.innerHTML = '';

    data.forEach(product => {
        const sellerType = product.category === 'c2c' ? 'Individual' : 'Store';
        const sellerBadgeColor = product.category === 'c2c' ? '#557C55' : '#FA7070';

        const card = document.createElement('div');
        card.classList.add('product-card');
        card.onclick = () => openProductDetail(product);

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <span class="tag-cat" style="color:${sellerBadgeColor}">${sellerType}</span>
                <h4 class="p-name">${product.name}</h4>
                <div class="p-price">Rp ${product.price.toLocaleString('id-ID')}</div>
                <div class="p-meta">
                    <span style="font-size:0.8rem; color:#888"><i class="fas fa-user"></i> ${product.seller.substring(0, 10)}...</span>
                    <span class="rating"><i class="fas fa-star"></i> ${product.rating}</span>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

function filterProducts() {
    const sellerFilter = document.getElementById('sellerFilter').value;
    const genderFilter = document.getElementById('genderFilter').value;
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    const filtered = products.filter(item => {
        const matchSeller = sellerFilter === 'all' || item.category === sellerFilter;
        const matchGender = genderFilter === 'all' || item.gender === genderFilter || item.gender === 'unisex';
        const matchSearch = item.name.toLowerCase().includes(searchInput);
        return matchSeller && matchGender && matchSearch;
    });

    renderProducts(filtered);
}

document.getElementById('searchInput').addEventListener('keyup', filterProducts);

const modal = document.getElementById('productModal');

function openProductDetail(product) {
    document.getElementById('m-img').src = product.image;
    document.getElementById('m-title').innerText = product.name;
    document.getElementById('m-price').innerText = `Rp ${product.price.toLocaleString('id-ID')}`;
    document.getElementById('m-seller').innerText = product.seller;
    document.getElementById('m-rating').innerHTML = `<i class="fas fa-star"></i> ${product.rating} / 5.0`;
    
    const typeLabel = product.category === 'c2c' ? 'Penjual Individu' : 'Thrift Store';
    document.getElementById('m-type').innerText = typeLabel;
    
    modal.style.display = "flex";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});

// Animasi Scroll untuk About Us
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.about-row').forEach(row => {
    observer.observe(row);
});

