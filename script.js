// Data for the website
const agentsData = [
    {
        id: "phoenix",
        name: "PHOENIX",
        role: "DUELIST",
        description: "Hailing from the UK, Phoenix's star power shines through in his fighting style.",
        image: "https://s.itl.cat/pngfile/s/314-3145463_sekiro-shadows-die-twice.jpg",
        statName: "Damage",
        statValue: 85
    },
    {
        id: "cypher",
        name: "CYPHER",
        role: "SENTINEL",
        description: "Moroccan information broker, Cypher is a one-man surveillance network.",
        image: "https://media.istockphoto.com/id/1127118054/photo/robot-soldier-runs-through-a-futuristic-sci-fi-tunnel-with-sparks-and-smoke-interior-view-3d.jpg?s=612x612&w=0&k=20&c=Gfjrv6kPH0r6J_C-QAHQvQS5KwauFsd8ruMPZb_OgpQ=",
        statName: "Intel",
        statValue: 98
    },
    {
        id: "sage",
        name: "SAGE",
        role: "SENTINEL",
        description: "American Warrior, Sage primary equipment are double-edged sword with Bloodrage abilities.",
        image: "https://wallpapercave.com/wp/wp6515998.png",
        statName: "Killer",
        statValue: 99.9
    },
    {
        id: "sova",
        name: "SOVA",
        role: "INITIATOR",
        description: "Russian archer, Sova tracks, finds, and eliminates enemies.",
        image: "https://4kwallpapers.com/images/wallpapers/viper-valorant-agent-2048x2048-9539.jpg",
        statName: "Recon",
        statValue: 94
    }
];

const featuredWeapon = {
    id: "vandal",
    name: "VANDAL",
    type: "Assault Rifle",
    price: "2900",
    // image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    image: "./10.jpg",
    description: "The Vandal is a fully automatic assault rifle that rewards trigger discipline with devastating headshots at any range.",
    stats: {
        headDamage: 160,
        bodyDamage: 40,
        fireRate: 9.25,
        magSize: 25
    }
};

const weaponsData = [
    {
        id: "phantom",
        name: "PHANTOM",
        type: "Assault Rifle",
        price: "2900",
        image: "./3.jpg"
    },
    {
        id: "operator",
        name: "OPERATOR",
        type: "Sniper Rifle",
        price: "4700",
        image: "./6.jpg"
    },
    {
        id: "spectre",
        name: "SPECTRE",
        type: "SMG",
        price: "1600",
        image: "./Lucid_Realism_Render_a_highly_detailed_futuristic_sniper_rifle_0.jpg"
    },
    {
        id: "judge",
        name: "JUDGE",
        type: "Shotgun",
        price: "1850",
        image: "./Lucid_Realism_Render_a_highly_detailed_futuristic_sniper_rifle_0.jpg"
    },
    {
        id: "sheriff",
        name: "SHERIFF",
        type: "Sidearm",
        price: "800",
        image: "./sniper.jpg"
    }
];

const mapsData = [
    {
        id: "bind",
        name: "BIND",
        sites: "2 SITES",
        feature: "TELEPORTERS",
        rating: 4.8,
        description: "A tight map with no middle lane, forcing teams through teleporters or long rotates.",
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a95654186704259.6579f8d36e0f1.png"
    },
    {
        id: "haven",
        name: "HAVEN",
        sites: "3 SITES",
        feature: "GARAGE",
        rating: 4.6,
        description: "The only map with three sites, requiring strong team coordination and rotations.",
        image: "https://i.pinimg.com/736x/17/70/ec/1770ec99284e21c7ab592f088ff9e7bb.jpg"
    },
    {
        id: "split",
        name: "SPLIT",
        sites: "2 SITES",
        feature: "ROPES",
        rating: 4.5,
        description: "Vertical gameplay with ropes and elevated positions dominating the map control.",
        image: "https://news.codashop.com/ph/wp-content/uploads/sites/5/2024/06/VALORANT-Abyss-Map.png"
    }
];

const featuredMatch = {
    id: "featured",
    team1: {
        name: "Shadow Warriors",
        abbreviation: "SW",
        score: 13
    },
    team2: {
        name: "Arctic Foxes",
        abbreviation: "AF",
        score: 11
    },
    tournament: "VCT Champions",
    map: "BIND",
    mapNumber: "MAP 3",
    status: "ROUND 25 • 11:14",
    viewers: 247382
};

const upcomingMatches = [
    {
        id: "upcoming1",
        team1: {
            name: "TEAM LIQUID",
            abbreviation: "TL",
            color: "bg-valorant-gold"
        },
        team2: {
            name: "PAPER REX",
            abbreviation: "PRX",
            color: "bg-purple-600"
        },
        map: "ASCENT",
        timeUntil: "In 45 minutes"
    },
    {
        id: "upcoming2",
        team1: {
            name: "G2 ESPORTS",
            abbreviation: "G2",
            color: "bg-blue-600"
        },
        team2: {
            name: "100 THIEVES",
            abbreviation: "100T",
            color: "bg-orange-600"
        },
        map: "HAVEN",
        timeUntil: "In 2 hours"
    }
];

const newsData = [
    {
        id: "news1",
        title: "Patch 7.12 Brings Agent Balance Changes",
        excerpt: "Major updates to Phoenix and Yoru abilities, alongside weapon balance adjustments for the upcoming VCT season.",
        category: "UPDATE",
        timeAgo: "2 hours ago",
        image: "https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250"
    },
    {
        id: "news2",
        title: "VCT Champions 2024 Format Revealed",
        excerpt: "Riot Games announces new tournament structure with expanded regional representation and increased prize pool.",
        category: "ESPORTS",
        timeAgo: "5 hours ago",
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250"
    },
    {
        id: "news3",
        title: "TenZ Discusses New Team Strategies",
        excerpt: "Exclusive interview with Sentinels star player about upcoming meta changes and team preparation methods.",
        category: "INTERVIEW",
        timeAgo: "1 day ago",
        image: "https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=250"
    }
];

// Utility Functions
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMobileMenu();
}

function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('active');
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('active');
}

// Animation Functions
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 500);
    });
}

function animateOnScroll() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate progress bars when stats section comes into view
                if (entry.target.classList.contains('stats-section')) {
                    animateProgressBars();
                }
            }
        });
    }, observerOptions);

    // Observe all sections for animation
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Render Functions
function renderAgents() {
    const agentsGrid = document.getElementById('agents-grid');
    agentsGrid.innerHTML = '';

    agentsData.forEach((agent, index) => {
        const agentCard = document.createElement('div');
        agentCard.className = 'agent-card';
        agentCard.style.animationDelay = `${index * 0.1}s`;
        
        agentCard.innerHTML = `
            <img src="${agent.image}" alt="${agent.name} - ${agent.role}" class="agent-image">
            <div class="agent-info">
                <div class="agent-header">
                    <h3 class="agent-name">${agent.name}</h3>
                    <div class="agent-role">${agent.role}</div>
                </div>
                <p class="agent-description">${agent.description}</p>
                <div class="agent-stats">
                    <div class="stat-row">
                        <span class="stat-name">${agent.statName}</span>
                        <span class="stat-value">${agent.statValue}%</span>
                    </div>
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${agent.statValue}%"></div>
                    </div>
                </div>
                <button class="select-agent-btn" onclick="selectAgent('${agent.id}')">
                    SELECT AGENT
                </button>
            </div>
        `;
        
        agentsGrid.appendChild(agentCard);
    });
}

function renderWeapons() {
    // Render featured weapon
    const featuredWeaponContainer = document.getElementById('featured-weapon');
    featuredWeaponContainer.innerHTML = `
        <img src="${featuredWeapon.image}" alt="${featuredWeapon.name}" class="weapon-image">
        <div class="weapon-header">
            <h3 class="weapon-name">${featuredWeapon.name}</h3>
            <div class="weapon-price">
                <span>${featuredWeapon.price}</span>
                <i class="fas fa-coins"></i>
            </div>
        </div>
        <p class="weapon-description">${featuredWeapon.description}</p>
        <div class="weapon-stats">
            <div class="stat-item">
                <div class="stat-value text-red">${featuredWeapon.stats.headDamage}</div>
                <div class="stat-label">HEAD DAMAGE</div>
            </div>
            <div class="stat-item">
                <div class="stat-value text-teal">${featuredWeapon.stats.bodyDamage}</div>
                <div class="stat-label">BODY DAMAGE</div>
            </div>
            <div class="stat-item">
                <div class="stat-value text-gold">${featuredWeapon.stats.fireRate}</div>
                <div class="stat-label">FIRE RATE</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${featuredWeapon.stats.magSize}</div>
                <div class="stat-label">MAG SIZE</div>
            </div>
        </div>
        <button class="equip-weapon-btn" onclick="equipWeapon('${featuredWeapon.id}')">
            <i class="fas fa-crosshairs"></i>EQUIP WEAPON
        </button>
    `;

    // Render weapons list
    const weaponsList = document.getElementById('weapons-list');
    weaponsList.innerHTML = '';

    weaponsData.forEach((weapon, index) => {
        const weaponItem = document.createElement('div');
        weaponItem.className = 'weapon-item';
        weaponItem.style.animationDelay = `${index * 0.1}s`;
        weaponItem.onclick = () => selectWeapon(weapon.id);
        
        weaponItem.innerHTML = `
            <img src="${weapon.image}" alt="${weapon.name}" class="weapon-item-image">
            <div class="weapon-item-info">
                <h4 class="weapon-item-name">${weapon.name}</h4>
                <p class="weapon-item-type">${weapon.type}</p>
            </div>
            <div class="weapon-item-price">${weapon.price}</div>
        `;
        
        weaponsList.appendChild(weaponItem);
    });
}

function renderMaps() {
    const mapsGrid = document.getElementById('maps-grid');
    mapsGrid.innerHTML = '';

    mapsData.forEach((map, index) => {
        const mapCard = document.createElement('div');
        mapCard.className = 'map-card';
        mapCard.style.animationDelay = `${index * 0.1}s`;
        
        mapCard.innerHTML = `
            <div class="map-image-container">
                <img src="${map.image}" alt="${map.name} tactical map" class="map-image">
                <div class="map-overlay"></div>
                <div class="map-info-overlay">
                    <h3 class="map-name">${map.name}</h3>
                    <div class="map-details">
                        <span class="map-features">${map.sites} • ${map.feature}</span>
                        <span class="map-rating">★ ${map.rating}</span>
                    </div>
                </div>
            </div>
            <div class="map-content">
                <p class="map-description">${map.description}</p>
                <div class="map-actions">
                    <button class="map-btn view-map-btn" onclick="viewMap('${map.id}')">
                        <i class="fas fa-map"></i>VIEW MAP
                    </button>
                    <button class="map-btn callouts-btn" onclick="viewCallouts('${map.id}')">
                        <i class="fas fa-crosshairs"></i>CALLOUTS
                    </button>
                </div>
            </div>
        `;
        
        mapsGrid.appendChild(mapCard);
    });
}

function renderMatches() {
    // Render featured match
    const featuredMatchContainer = document.getElementById('featured-match');
    featuredMatchContainer.innerHTML = `
        <div class="match-header">
            <div class="live-indicator">
                <div class="live-dot"></div>
                <span class="live-text">LIVE NOW</span>
                <span class="tournament-name">${featuredMatch.tournament}</span>
            </div>
            <div class="viewer-count">
                <i class="fas fa-eye text-teal"></i>
                <span>${featuredMatch.viewers.toLocaleString()}</span>
                <span class="text-gray">viewers</span>
            </div>
        </div>
        <div class="teams-container">
            <div class="team">
                <div class="team-logo team1">${featuredMatch.team1.abbreviation}</div>
                <h3 class="team-name">${featuredMatch.team1.name}</h3>
                <div class="team-score">${featuredMatch.team1.score}</div>
            </div>
            <div class="match-info">
                <div class="match-map">${featuredMatch.map} • ${featuredMatch.mapNumber}</div>
                <div class="vs-text">VS</div>
                <div class="match-status">${featuredMatch.status}</div>
            </div>
            <div class="team">
                <div class="team-logo team2">${featuredMatch.team2.abbreviation}</div>
                <h3 class="team-name">${featuredMatch.team2.name}</h3>
                <div class="team-score">${featuredMatch.team2.score}</div>
            </div>
        </div>
        <div class="match-actions">
            <button class="watch-live-btn" onclick="watchLive('${featuredMatch.id}')">
                <i class="fas fa-play"></i>WATCH LIVE
            </button>
            <button class="match-stats-btn" onclick="viewMatchStats('${featuredMatch.id}')">
                <i class="fas fa-chart-line"></i>MATCH STATS
            </button>
        </div>
    `;

    // Render upcoming matches
    const upcomingMatchesContainer = document.getElementById('upcoming-matches');
    upcomingMatchesContainer.innerHTML = '';

    upcomingMatches.forEach((match, index) => {
        const matchCard = document.createElement('div');
        matchCard.className = 'upcoming-match';
        matchCard.style.animationDelay = `${index * 0.2}s`;
        
        matchCard.innerHTML = `
            <div class="upcoming-header">
                <h4 class="upcoming-label">UPCOMING</h4>
                <span class="time-until">${match.timeUntil}</span>
            </div>
            <div class="upcoming-teams">
                <div class="upcoming-team">
                    <div class="upcoming-team-logo ${match.team1.color}">${match.team1.abbreviation}</div>
                    <div class="upcoming-team-name">${match.team1.name}</div>
                </div>
                <div class="upcoming-vs">
                    <div class="upcoming-vs-text">VS</div>
                    <div class="upcoming-map">${match.map}</div>
                </div>
                <div class="upcoming-team">
                    <div class="upcoming-team-logo ${match.team2.color}">${match.team2.abbreviation}</div>
                    <div class="upcoming-team-name">${match.team2.name}</div>
                </div>
            </div>
        `;
        
        upcomingMatchesContainer.appendChild(matchCard);
    });
}

function renderNews() {
    const newsGrid = document.getElementById('news-grid');
    newsGrid.innerHTML = '';

    newsData.forEach((article, index) => {
        const newsCard = document.createElement('article');
        newsCard.className = 'news-article';
        newsCard.style.animationDelay = `${index * 0.1}s`;
        
        const categoryClass = article.category.toLowerCase();
        
        newsCard.innerHTML = `
            <img src="${article.image}" alt="${article.title}" class="news-image">
            <div class="news-content">
                <div class="news-meta">
                    <span class="news-category ${categoryClass}">${article.category}</span>
                    <span class="news-time">${article.timeAgo}</span>
                </div>
                <h3 class="news-title">${article.title}</h3>
                <p class="news-excerpt">${article.excerpt}</p>
                <button class="read-more-btn" onclick="readArticle('${article.id}')">
                    Read More <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        `;
        
        newsGrid.appendChild(newsCard);
    });
}

// Interactive Functions
function selectAgent(agentId) {
    const agent = agentsData.find(a => a.id === agentId);
    if (agent) {
        showNotification(`${agent.name} selected! Master their ${agent.role} abilities.`);
    }
}

function equipWeapon(weaponId) {
    if (weaponId === 'vandal') {
        showNotification(`${featuredWeapon.name} equipped! ${featuredWeapon.stats.headDamage} head damage ready.`);
    }
}

function selectWeapon(weaponId) {
    const weapon = weaponsData.find(w => w.id === weaponId);
    if (weapon) {
        showNotification(`${weapon.name} selected! ${weapon.type} ready for combat.`);
    }
}

function viewMap(mapId) {
    const map = mapsData.find(m => m.id === mapId);
    if (map) {
        showNotification(`Loading ${map.name} tactical overview...`);
    }
}

function viewCallouts(mapId) {
    const map = mapsData.find(m => m.id === mapId);
    if (map) {
        showNotification(`${map.name} callouts loaded! Study the positions.`);
    }
}

function watchLive(matchId) {
    showNotification('Connecting to live match stream...');
}

function viewMatchStats(matchId) {
    showNotification('Loading detailed match statistics...');
}

function readArticle(articleId) {
    const article = newsData.find(a => a.id === articleId);
    if (article) {
        showNotification(`Opening: ${article.title}`);
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--valorant-red);
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        font-family: 'Rajdhani', sans-serif;
        font-weight: 600;
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        box-shadow: 0 0 20px rgba(255, 70, 85, 0.5);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Navbar scroll effect
function handleNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    const scrolled = window.scrollY > 50;
    
    if (scrolled) {
        navbar.style.background = 'rgba(15, 20, 25, 0.95)';
        navbar.style.backdropFilter = 'blur(15px)';
    } else {
        navbar.style.background = 'rgba(15, 20, 25, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
}

// Initialize the website
function init() {
    renderAgents();
    renderWeapons();
    renderMaps();
    renderMatches();
    renderNews();
    animateOnScroll();
    
    // Add scroll listener for navbar
    window.addEventListener('scroll', handleNavbarScroll);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        const mobileMenu = document.getElementById('mobile-menu');
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        
        if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            closeMobileMenu();
        }
    });
    
    // Add smooth scrolling for hero section
    setTimeout(() => {
        const heroSection = document.getElementById('hero');
        heroSection.style.opacity = '1';
        heroSection.style.transform = 'translateY(0)';
    }, 200);
    
    console.log('🎮 VALORANT website initialized successfully!');
}

// Start the application when DOM is loaded
document.addEventListener('DOMContentLoaded', init);