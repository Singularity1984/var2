function getRandomInt(min, max) {  
    min = Math.ceil(min);  
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min + 1)) + min;  
}

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
        { title: "Набор акриловых красок Basic (12 цветов)", price: "1200 руб.", category: "Краски", image: "../assets/images/paints/paint1.jpg" },
        { title: "Акриловая краска Premium Gold", price: "350 руб.", category: "Краски", image: "../assets/images/paints/paint2.jpg" },
        { title: "Металлическая краска Silver", price: "400 руб.", category: "Краски", image: "../assets/images/paints/paint3.jpg" },
        { title: "Набор для новичка (6 цветов)", price: "750 руб.", category: "Краски", image: "../assets/images/paints/paint4.jpg" },
        { title: "Краска-спрей Black Primer", price: "600 руб.", category: "Краски", image: "../assets/images/paints/paint5.jpg" },
        { title: "Набор акварельных красок", price: "950 руб.", category: "Краски", image: "../assets/images/paints/paint6.jpg" },
        { title: "Масляная краска Artist Grade", price: "500 руб.", category: "Краски", image: "../assets/images/paints/paint7.jpg" },
        { title: "Флуоресцентная краска Neon", price: "450 руб.", category: "Краски", image: "../assets/images/paints/paint8.jpg" },
        { title: "Набор для миниатюр (16 цветов)", price: "1800 руб.", category: "Краски", image: "../assets/images/paints/paint9.jpg" },
        { title: "Краска с эффектом старения", price: "550 руб.", category: "Краски", image: "../assets/images/paints/paint10.jpg" },
        { title: "Набор акриловых красок Pro (24 цвета)", price: "2500 руб.", category: "Краски", image: "../assets/images/paints/paint11.jpg" },
        { title: "Краска-хамелеон Color Shift", price: "700 руб.", category: "Краски", image: "../assets/images/paints/paint12.jpg" },
        { title: "Набор для диорам (8 цветов)", price: "1100 руб.", category: "Краски", image: "../assets/images/paints/paint13.jpg" },
        { title: "Краска с эффектом ржавчины", price: "480 руб.", category: "Краски", image: "../assets/images/paints/paint14.jpg" },
        { title: "Набор акриловых красок Starter", price: "850 руб.", category: "Краски", image: "../assets/images/paints/paint15.jpg" },
        { title: "Краска для кожи и тканей", price: "420 руб.", category: "Краски", image: "../assets/images/paints/paint16.jpg" },
        { title: "Набор металликов (6 цветов)", price: "1300 руб.", category: "Краски", image: "../assets/images/paints/paint17.jpg" },
        { title: "Краска с эффектом камня", price: "520 руб.", category: "Краски", image: "../assets/images/paints/paint18.jpg" },
        { title: "Набор для военной техники", price: "1600 руб.", category: "Краски", image: "../assets/images/paints/paint19.jpg" },
        { title: "Краска с UV-эффектом", price: "580 руб.", category: "Краски", image: "../assets/images/paints/paint20.jpg" },
    
        // Грунты (10 товаров)
        { title: "Грунт акриловый белый 100мл", price: "350 руб.", category: "Грунты", image: "../assets/images/primers/primer1.jpg" },
        { title: "Грунт акриловый черный 100мл", price: "350 руб.", category: "Грунты", image: "../assets/images/primers/primer2.jpg" },
        { title: "Грунт-спрей серый 400мл", price: "600 руб.", category: "Грунты", image: "../assets/images/primers/primer3.jpg" },
        { title: "Грунт жидкий для пластика", price: "450 руб.", category: "Грунты", image: "../assets/images/primers/primer4.jpg" },
        { title: "Грунт текстурный для диорам", price: "520 руб.", category: "Грунты", image: "../assets/images/primers/primer5.jpg" },
        { title: "Набор грунтов (3 цвета)", price: "900 руб.", category: "Грунты", image: "../assets/images/primers/primer6.jpg" },
        { title: "Грунт-спрей матовый", price: "650 руб.", category: "Грунты", image: "../assets/images/primers/primer7.jpg" },
        { title: "Грунт для металлических поверхностей", price: "480 руб.", category: "Грунты", image: "../assets/images/primers/primer8.jpg" },
        { title: "Грунт прозрачный", price: "400 руб.", category: "Грунты", image: "../assets/images/primers/primer9.jpg" },
        { title: "Грунт-спрей быстросохнущий", price: "700 руб.", category: "Грунты", image: "../assets/images/primers/primer10.jpg" },
    
        // Текстурные пасты (10 товаров)
        { title: "Текстурная паста Rough", price: "450 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture1.jpg" },
        { title: "Паста для создания снега", price: "520 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture2.jpg" },
        { title: "Паста Sandy Desert", price: "480 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture3.jpg" },
        { title: "Текстурный гель Water", price: "550 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture4.jpg" },
        { title: "Паста для создания камней", price: "500 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture5.jpg" },
        { title: "Текстурная паста Mud", price: "470 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture6.jpg" },
        { title: "Набор текстурных паст", price: "1200 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture7.jpg" },
        { title: "Паста для создания трещин", price: "600 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture8.jpg" },
        { title: "Текстурная паста Grass", price: "530 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture9.jpg" },
        { title: "Паста для создания песка", price: "490 руб.", category: "Текстурные пасты", image: "../assets/images/textures/texture10.jpg" },
    
        // Инструменты (10 товаров)
        { title: "Набор кистей Basic", price: "800 руб.", category: "Инструменты", image: "../assets/images/tools/tool1.jpg" },
        { title: "Кисть тонкая №000", price: "250 руб.", category: "Инструменты", image: "../assets/images/tools/tool2.jpg" },
        { title: "Набор инструментов для моделирования", price: "1500 руб.", category: "Инструменты", image: "../assets/images/tools/tool3.jpg" },
        { title: "Аэрограф начального уровня", price: "3500 руб.", category: "Инструменты", image: "../assets/images/tools/tool4.jpg" },
        { title: "Набор шпателей", price: "600 руб.", category: "Инструменты", image: "../assets/images/tools/tool5.jpg" },
        { title: "Кисть плоская №10", price: "300 руб.", category: "Инструменты", image: "../assets/images/tools/tool6.jpg" },
        { title: "Набор для детализации", price: "950 руб.", category: "Инструменты", image: "../assets/images/tools/tool7.jpg" },
        { title: "Мастихин художественный", price: "450 руб.", category: "Инструменты", image: "../assets/images/tools/tool8.jpg" },
        { title: "Набор кистей Pro", price: "2200 руб.", category: "Инструменты", image: "../assets/images/tools/tool9.jpg" },
        { title: "Инструмент для текстурирования", price: "750 руб.", category: "Инструменты", image: "../assets/images/tools/tool10.jpg" },
    
        // Аксессуары (10 товаров)
        { title: "Палитра пластиковая", price: "350 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc1.jpg" },
        { title: "Сумка-переноска для инструментов", price: "1200 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc2.jpg" },
        { title: "Держатель для миниатюр", price: "500 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc3.jpg" },
        { title: "Набор баночек для смешивания", price: "450 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc4.jpg" },
        { title: "Коврик для резки A3", price: "800 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc5.jpg" },
        { title: "Подставка для кистей", price: "650 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc6.jpg" },
        { title: "Лупа с подсветкой", price: "950 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc7.jpg" },
        { title: "Органайзер для красок", price: "1500 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc8.jpg" },
        { title: "Набор стаканов-непроливаек", price: "400 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc9.jpg" },
        { title: "Чехол для аэрографа", price: "750 руб.", category: "Аксессуары", image: "../assets/images/accessories/acc10.jpg" }
    ];
    

    // Отображение товаров на главной странице
    function displayFeaturedProducts() {
        const featured = document.querySelector('.featured .products-grid');
        const newArrivals = document.querySelector('.new-arrivals .products-grid');
        const sales=document.querySelector('.sales .products-grid');
        
        if (featured) {
            // Отображаем 4 популярных товара
            const featuredProducts = products.slice(0, 4);
            featured.innerHTML = featuredProducts.map(product => `
                <div class="product-card">
                    <div class="product-card_image">
                        <img src="${product.image.replace(".", " ")}" alt="${product.title}">
                    </div>
                    <div class="product-card_content">
                        <h3 class="product-card_title">${product.title}</h3>
                        <div class="product-card_price">${product.price}</div>
                        <div class="product-card_actions">
                            <button class="btn btn-outline">Подробнее</button>
                            <button class="btn btn-primary">В корзину</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        if (newArrivals) {
            // Отображаем 4 новинки
            const newProducts = products.slice(4, 8);
            newArrivals.innerHTML = newProducts.map(product => `
                <div class="product-card">
                    <div class="product-card_image">
                        <img src="${product.image.replace(".", " ")}" alt="${product.title}">
                    </div>
                    <div class="product-card_content">
                        <h3 class="product-card_title">${product.title}</h3>
                        <div class="product-card_price">${product.price}</div>
                        <div class="product-card_actions">
                            <button class="btn btn-outline">Подробнее</button>
                            <button class="btn btn-primary">В корзину</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
        if (sales) {
            // Отображаем 4 sales
            const nowSale = products.slice(8, 12);
            sales.innerHTML = nowSale.map(product => `
                <div class="product-card">
                    <div class="product-card_image">
                        <img src="${product.image.replace(".", " ")}" alt="${product.title}">
                    </div>
                    <div class="product-card_content">
                        <h3 class="product-card_title">${product.title}</h3>
                        <div class="product-card_price product-card_sales">${product.price}</div>
                        <div class="product-card_actions">
                            <button class="btn btn-outline">Подробнее</button>
                            <button class="btn btn-primary">В корзину</button>
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
                            <button class="btn btn-outline">Подробнее</button>
                            <button class="btn btn-primary">В корзину</button>
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

    displayFeaturedProducts();
    displayAllProducts();
    setupFilters();

    const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function(e) {
            alert('Вход выполнен успешно!');
        });
    

    const registerForm = document.getElementById('registerForm');
        registerForm.addEventListener('submit', function(e) {
            alert('Регистрация прошла успешно!');
        });
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

function changeName(){
    const newName = prompt('Введите новый никнейм:', document.getElementById('username').textContent);
    document.getElementById('username').textContent = newName;
}
