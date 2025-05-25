document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    const products = [
        { id: 1, title: "Набор акриловых красок Basic (12 цветов)", price: "1200 руб.", category: "Краски", image: "../assets/images/paints/paint1.jpg" },
        { id: 2, title: "Акриловая краска Premium Gold", price: "350 руб.", category: "Краски", image: "../assets/images/paints/paint2.jpg" },
        { id: 3, title: "Металлическая краска Silver", price: "400 руб.", category: "Краски", image: "../assets/images/paints/paint3.jpg" },
        { id: 4, title: "Набор для новичка (6 цветов)", price: "750 руб.", category: "Краски", image: "../assets/images/paints/paint4.jpg" },
        { id: 5, title: "Краска-спрей Black Primer", price: "600 руб.", category: "Краски", image: "../assets/images/paints/paint5.jpg" },
        { id: 6, title: "Набор акварельных красок", price: "950 руб.", category: "Краски", image: "../assets/images/paints/paint6.jpg" },
        { id: 7, title: "Масляная краска Artist Grade", price: "500 руб.", category: "Краски", image: "../assets/images/paints/paint7.jpg" },
        { id: 8, title: "Флуоресцентная краска Neon", price: "450 руб.", category: "Краски", image: "../assets/images/paints/paint8.jpg" },
        { id: 9, title: "Набор для миниатюр (16 цветов)", price: "1800 руб.", category: "Краски", image: "../assets/images/paints/paint9.jpg" },
        { id: 10, title: "Краска с эффектом старения", price: "550 руб.", category: "Краски", image: "../assets/images/paints/paint10.jpg" },
        { id: 11, title: "Набор акриловых красок Pro (24 цвета)", price: "2500 руб.", category: "Краски", image: "../assets/images/paints/paint11.jpg" },
        { id: 12, title: "Краска-хамелеон Color Shift", price: "700 руб.", category: "Краски", image: "../assets/images/paints/paint12.jpg" },
        { id: 13, title: "Набор для диорам (8 цветов)", price: "1100 руб.", category: "Краски", image: "../assets/images/paints/paint13.jpg" },
        { id: 14, title: "Краска с эффектом ржавчины", price: "480 руб.", category: "Краски", image: "../assets/images/paints/paint14.jpg" },
        { id: 15, title: "Набор акриловых красок Starter", price: "850 руб.", category: "Краски", image: "../assets/images/paints/paint15.jpg" },
        { id: 16, title: "Краска для кожи и тканей", price: "420 руб.", category: "Краски", image: "../assets/images/paints/paint16.jpg" },
        { id: 17, title: "Набор металликов (6 цветов)", price: "1300 руб.", category: "Краски", image: "../assets/images/paints/paint17.jpg" },
        { id: 18, title: "Краска с эффектом камня", price: "520 руб.", category: "Краски", image: "../assets/images/paints/paint18.jpg" },
        { id: 19, title: "Набор для военной техники", price: "1600 руб.", category: "Краски", image: "../assets/images/paints/paint19.jpg" },
        { id: 20, title: "Краска с UV-эффектом", price: "580 руб.", category: "Краски", image: "../assets/images/paints/paint20.jpg" },
    
        // Грунты (10 товаров)
        { id: 21, title: "Грунт акриловый белый 100мл", price: "350 руб.", category: "Грунты", image: "../assets/images/primers/primer1.jpg" },
        { id: 22, title: "Грунт акриловый черный 100мл", price: "350 руб.", category: "Грунты", image: "../assets/images/primers/primer2.jpg" },
        { id: 23, title: "Грунт-спрей серый 400мл", price: "600 руб.", category: "Грунты", image: "../assets/images/primers/primer3.jpg" },
        { id: 24, title: "Грунт жидкий для пластика", price: "450 руб.", category: "Грунты", image: "../assets/images/primers/primer4.jpg" },
        { id: 25, title: "Грунт текстурный для диорам", price: "520 руб.", category: "Грунты", image: "../assets/images/primers/primer5.jpg" },
        { id: 26, title: "Набор грунтов (3 цвета)", price: "900 руб.", category: "Грунты", image: "../assets/images/primers/primer6.jpg" },
        { id: 27, title: "Грунт-спрей матовый", price: "650 руб.", category: "Грунты", image: "../assets/images/primers/primer7.jpg" },
        { id: 28, title: "Грунт для металлических поверхностей", price: "480 руб.", category: "Грунты", image: "../assets/images/primers/primer8.jpg" },
        { id: 29, title: "Грунт прозрачный", price: "400 руб.", category: "Грунты", image: "../assets/images/primers/primer9.jpg" },
        { id: 30, title: "Грунт-спрей быстросохнущий", price: "700 руб.", category: "Грунты", image: "../assets/images/primers/primer10.jpg" },
    
        // Текстурные пасты (10 товаров)
        { id: 31, title: "Текстурная паста Rough", price: "450 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture1.jpg" },
        { id: 32, title: "Паста для создания снега", price: "520 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture2.jpg" },
        { id: 33, title: "Паста Sandy Desert", price: "480 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture3.jpg" },
        { id: 34, title: "Текстурный гель Water", price: "550 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture4.jpg" },
        { id: 35, title: "Паста для создания камней", price: "500 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture5.jpg" },
        { id: 36, title: "Текстурная паста Mud", price: "470 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture6.jpg" },
        { id: 37, title: "Набор текстурных паст", price: "1200 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture7.jpg" },
        { id: 38, title: "Паста для создания трещин", price: "600 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture8.jpg" },
        { id: 39, title: "Текстурная паста Grass", price: "530 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture9.jpg" },
        { id: 40, title: "Паста для создания песка", price: "490 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture10.jpg" },
    
        // Инструменты (10 товаров)
        { id: 41, title: "Набор кистей Basic", price: "800 руб.", category: "Инструменты", image: "../assets/images/tools/tool1.jpg" },
        { id: 42, title: "Кисть тонкая №000", price: "250 руб.", category: "Инструменты", image: "../assets/images/tools/tool2.jpg" },
        { id: 43, title: "Набор инструментов для моделирования", price: "1500 руб.", category: "Инструменты", image: "../assets/images/tools/tool3.jpg" },
        { id: 44, title: "Аэрограф начального уровня", price: "3500 руб.", category: "Инструменты", image: "../assets/images/tools/tool4.jpg" },
        { id: 45, title: "Набор шпателей", price: "600 руб.", category: "Инструменты", image: "../assets/images/tools/tool5.jpg" },
        { id: 46, title: "Кисть плоская №10", price: "300 руб.", category: "Инструменты", image: "../assets/images/tools/tool6.jpg" },
        { id: 47, title: "Набор для детализации", price: "950 руб.", category: "Инструменты", image: "../assets/images/tools/tool7.jpg" },
        { id: 48, title: "Мастихин художественный", price: "450 руб.", category: "Инструменты", image: "../assets/images/tools/tool8.jpg" },
        { id: 49, title: "Набор кистей Pro", price: "2200 руб.", category: "Инструменты", image: "../assets/images/tools/tool9.jpg" },
        { id: 50, title: "Инструмент для текстурирования", price: "750 руб.", category: "Инструменты", image: "../assets/images/tools/tool10.jpg" },
    
        // Аксессуары (10 товаров)
        { id: 51, title: "Палитра пластиковая", price: "350 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc1.jpg" },
        { id: 52, title: "Сумка-переноска для инструментов", price: "1200 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc2.jpg" },
        { id: 53, title: "Держатель для миниатюр", price: "500 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc3.jpg" },
        { id: 54, title: "Набор баночек для смешивания", price: "450 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc4.jpg" },
        { id: 55, title: "Коврик для резки A3", price: "800 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc5.jpg" },
        { id: 56, title: "Подставка для кистей", price: "650 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc6.jpg" },
        { id: 57, title: "Лупа с подсветкой", price: "950 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc7.jpg" },
        { id: 58, title: "Органайзер для красок", price: "1500 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc8.jpg" },
        { id: 59, title: "Набор стаканов-непроливаек", price: "400 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc9.jpg" },
        { id: 60, title: "Чехол для аэрографа", price: "750 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc10.jpg" }
    ];
    

    // Отображение товаров на главной странице
    function displayFeaturedProducts() {
        const featuredGrid = document.querySelector('.featured .products-grid');
        const newArrivalsGrid = document.querySelector('.new-arrivals .products-grid');
        
        if (featuredGrid) {
            // Отображаем 4 популярных товара
            const featuredProducts = products.slice(0, 4);
            featuredGrid.innerHTML = featuredProducts.map(product => `
                <div class="product-card">
                    <div class="product-card_image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-card_content">
                        <h3 class="product-card_title">${product.title}</h3>
                        <div class="product-card_price">${product.price}</div>
                        <div class="product-card_actions">
                            <button class="btn btn--outline">Подробнее</button>
                            <button class="btn btn--primary">В корзину</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        
        if (newArrivalsGrid) {
            // Отображаем 4 новинки
            const newProducts = products.slice(4, 8);
            newArrivalsGrid.innerHTML = newProducts.map(product => `
                <div class="product-card">
                    <div class="product-card_image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-card_content">
                        <h3 class="product-card_title">${product.title}</h3>
                        <div class="product-card_price">${product.price}</div>
                        <div class="product-card_actions">
                            <button class="btn btn--outline">Подробнее</button>
                            <button class="btn btn--primary">В корзину</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Отображение всех товаров на странице товаров
    function displayAllProducts() {
        const productsGrid = document.querySelector('.products .products-grid');
        
        if (productsGrid) {
            productsGrid.innerHTML = products.map(product => `
                <div class="product-card" data-category="${product.category.toLowerCase()}">
                    <div class="product-card_image">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="product-card_content">
                        <h3 class="product-card_title">${product.title}</h3>
                        <div class="product-card_category">${product.category}</div>
                        <div class="product-card_price">${product.price}</div>
                        <div class="product-card_actions">
                            <button class="btn btn--outline">Подробнее</button>
                            <button class="btn btn--primary">В корзину</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    // Фильтрация товаров
    function setupFilters() {
        const filterCheckboxes = document.querySelectorAll('.filter-list input[type="checkbox"]');
        
        filterCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                const selectedCategories = Array.from(document.querySelectorAll('.filter-list input[type="checkbox"]:checked'))
                    .map(cb => cb.parentElement.textContent.trim().toLowerCase());
                
                const productCards = document.querySelectorAll('.product-card');
                
                productCards.forEach(card => {
                    const cardCategory = card.dataset.category;
                    
                    if (selectedCategories.includes('все товары') || selectedCategories.includes(cardCategory)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // Инициализация
    displayFeaturedProducts();
    displayAllProducts();
    setupFilters();

    // Обработка формы входа
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Вход выполнен успешно!');
            // В реальном приложении здесь была бы отправка на сервер
        });
    }

    // Обработка формы регистрации
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Регистрация прошла успешно!');
            // В реальном приложении здесь была бы отправка на сервер
        });
    }
});

function showMore(button, id) {
    var content = document.getElementById(id);
    
    if (content.classList.contains("blog-post_hide")) {
        content.classList.remove('blog-post_hide');
        content.classList.add('blog-post_text');
        button.innerText = "Скрыть";
    } else {
        content.classList.remove('blog-post_text');
        content.classList.add('blog-post_hide');
        button.innerText = "Читать далее";
    }
}

function likePost(button, id){
    const counterElement = document.getElementById(id);
    const clickButton = document.getElementById(button);

    let value = counterElement.innerHTML;  
    value++;
    counterElement.innerHTML=value;
}

function createCommetn(id) {
    const comment = document.getElementById('comment').value;
    const commentHTML = `
        <p>
         ${comment}
        </p>
    `;
    id.innerHTML+=commentHTML;
}