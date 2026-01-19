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
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTkWUYU-KJMvRhpSqovJzWDFEg2LtDgGEmwSZ8o_ASx39nhLXoIB1LMRgu2XjsTUFPs37rycx2BsdKPcPxVJ3V0f2HUAKkvWQ"
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
    },
    {
        id: 7,
        name: "GAP Navy Tshirt Pria",
        category: "c2c",
        gender: "male",
        price: 130000,
        rating: 4.5,
        seller: "Toko Lokal",
        image: "assets/GAP Navy Tshirt Pria.jpg"
    },
    {
        id: 8,
        name: "Nike Jersey Pria",
        category: "b2c",
        gender: "male",
        price: 110000,
        rating: 4.7,
        seller: "Thrift Store",
        image: "assets/Nike Jersey Pria .jpg"
    },
    {
        id: 9,
        name: "Camo Shorts Pria ",
        category: "c2c",
        gender: "male",
        price: 95000,
        rating: 4.2,
        seller: "Preloved Jogja",
        image: "assets/Camo Shorts Pria.jpg"
    },
    {
        id: 10,
        name: "Adidas White Shorts",
        category: "b2c",
        gender: "male",
        price: 85000,
        rating: 4.9,
        seller: "Vintage Elite",
        image: "assets/Adidas white shorts pria.jpg"
    },
    {
        id: 11,
        name: "Adidas Navy Hoodie",
        category: "c2c",
        gender: "male",
        price: 347000,
        rating: 4.4,
        seller: "Sista Thrift",
        image: "assets/Adidas Navy Hoodie Pria.jpg"
    },
    {
        id: 12,
        name: "Adidas black shorts",
        category: "b2c",
        gender: "male",
        price: 90000,
        rating: 4.3,
        seller: "Daily Wear",
        image: "assets/Adidas black shorts Pria.jpg"
    },
    {
        id: 13,
        name: "Long Sleeve Stripe Shirt",
        category: "c2c",
        gender: "male",
        price: 137000,
        rating: 4.6,
        seller: "Bro Second",
        image: "assets/Long Sleeve Stripe shirt Pria.jpg"
    },
    {
        id: 14,
        name: "Ash Gray Washed Jeans",
        category: "b2c",
        gender: "male",
        price: 230000,
        rating: 4.8,
        seller: "Lady Vintage",
        image: "assets/Ash gray washed jeans pria.jpg"
    },
    {
        id: 15,
        name: "Snoopy Graphic Tee Wanita",
        category: "c2c",
        gender: "female",
        price: 50000,
        rating: 4.1,
        seller: "Murah Meriah",
        image: "assets/snoopy graphic tee wanita.jpg"
    },
    {
        id: 16,
        name: "Long Sleeve Navy Sweater Wanita",
        category: "b2c",
        gender: "female",
        price: 145000,
        rating: 5.0,
        seller: "Premium Thrift",
        image: "assets/long sleeve navy sweater wanita.jpg"
    },
    {
        id: 17,
        name: "Denim Skirt Wanita",
        category: "c2c",
        gender: "female",
        price: 65000,
        rating: 4.3,
        seller: "OOTD Preloved",
        image: "assets/denim skirt wanita.jpg"
    },
    {
        id: 18,
        name: "Dark Grey Ribbon Cardigan",
        category: "b2c",
        gender: "female",
        price: 115000,
        rating: 4.5,
        seller: "Street Wear Hub",
        image: "assets/dark grey ribbon cardigan Wanita.jpg"
    },
    {
        id: 19,
        name: "Butter Bear Light Grey Cardigan",
        category: "c2c",
        gender: "female",
        price: 118000,
        rating: 4.7,
        seller: "Feminly Stuff",
        image: "assets/butter bear light grey cardigan wanita.jpg"
    },
    {
        id: 20,
        name: "Navy Top With Ribbon Wanita",
        category: "b2c",
        gender: "female",
        price: 56000,
        rating: 4.6,
        seller: "Chic Boutique",
        image: "assets/navy top with ribbon wanita.jpg"
    },
    {
        id: 21,
        name: "Dark Grey Adidas Hoodie",
        category: "c2c",
        gender: "unisex",
        price: 175000,
        rating: 4.2,
        seller: "Unisex Thrift",
        image: "assets/Dark grey adidas hoodie unisex.jpg"
    },
    {
        id: 22,
        name: "Adidas Black Jersey Shorts",
        category: "b2c",
        gender: "unisex",
        price: 75000,
        rating: 4.8,
        seller: "Formal Second",
        image: "assets/adidas black jersey shorts unisex.jpg"
    },
    {
        id: 23,
        name: "NY Light Grey Hoodie",
        category: "c2c",
        gender: "unisex",
        price: 185000,
        rating: 4.4,
        seller: "Ally Preloved",
        image: "assets/NY light grey hoodie unisex.jpg"
    },
    {
        id: 24,
        name: "Carhartt Light Blue Hoodie",
        category: "b2c",
        gender: "unisex",
        price: 199000,
        rating: 4.3,
        seller: "Urban Style",
        image: "assets/Carhartt light blue hoodie unisex.jpg"
    },
    {
        id: 25,
        name: "White Denim Jeans",
        category: "c2c",
        gender: "unisex",
        price: 190000,
        rating: 4.5,
        seller: "Casual Guy",
        image: "assets/White denim jeans unisex.jpg"
    },
    {
        id: 26,
        name: "Vintage Black Shoulder Bag",
        category: "b2c",
        gender: "accessories",
        price: 75000,
        rating: 4.7,
        seller: "Modest Wear",
        image: "assets/Vintage black shoulder bag acc.jpg"
    },
    {
        id: 27,
        name: "Vintage Brown Chio-Chio Shoulder Bag",
        category: "c2c",
        gender: "accessories",
        price: 89000,
        rating: 4.2,
        seller: "Simple Thrift",
        image: "assets/Vintage brown chio chio shoulder bag acc.jpg"
    },
    {
        id: 28,
        name: "Vintage Carhartt Dark Brown Bag",
        category: "b2c",
        gender: "accsessories",
        price: 97000,
        rating: 4.9,
        seller: "Executive Preloved",
        image: "assets/Vintage Carhartt dark brown bag acc.jpg"
    },
    {
        id: 29,
        name: "Arcteryx White Hat",
        category: "c2c",
        gender: "accessories",
        price: 140000,
        rating: 4.6,
        seller: "Queen Thrift",
        image: "assets/arcteryx white hat acc.jpg"
    },
    {
        id: 30,
        name: "Stussy Navy Hat",
        category: "b2c",
        gender: "accessories",
        price: 135000,
        rating: 4.4,
        seller: "Neutral Tone",
        image: "assets/stussy navy hat acc.jpg"
    },
    {
        id: 31,
        name: "Stussy Maroon Red Hat",
        category: "c2c",
        gender: "accessories",
        price: 99000,
        rating: 4.8,
        seller: "Rare Item Store",
        image: "assets/stussy maroon red hat acc.jpg"
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
        
        let matchGender = false;
        if (genderFilter === 'all') {
            matchGender = true;
        } else if (genderFilter === 'aksesoris') {
            matchGender = item.gender === 'aksesoris';
        } else {
            matchGender = item.gender === genderFilter || item.gender === 'unisex';
        }
//test
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

