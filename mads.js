let categories = [
  {
    name: 'Core',
    img:
      'assets/mads/core.svg',
    apps: [
      {
        name: 'AppStore',
        brand: 'Rey',
        icon:
        './assets/mads/1-Core-1-AppStore.svg'
      },
      {
        name: 'Settings',
        brand: 'N4no.com',
        icon:
        './assets/mads/1-Core-2-Settings.svg'
      },
      {
        name: 'Support',
        brand: 'Sashalab',
        icon:
        './assets/mads/1-Core-3-Support.svg'
      },
      {
        name: 'HeyMADS!',
        brand: 'Christian Waadt',
        icon:
        './assets/mads/1-Core-4-HeyMADS.svg'
      }
    ]
  },
  {
    name: 'Productivity',
    img:
      'assets/mads/Productivity.svg',
    apps: [
      {
        name: 'Dashboards',
        brand: 'Rey',
        icon:
        './assets/mads/2-Productivity-1-Dashboards.svg'
      },
      {
        name: 'Digital Twin',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-2-Digital-Twin.svg'
      },
      {
        name: 'Task Organiser',
        brand: 'Sashalab',
        icon:
        './assets/mads/2-Productivity-3-Task-Organiser.svg'
      },
      {
        name: 'Report Wizard',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-4-Report-Wizard.svg'
      },
      {
        name: 'Alerts-n-Reminders',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-5-Alerts-Reminders.svg'
      },
      {
        name: 'Madsbook',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-6-Madsbook.svg'
      },
      {
        name: 'VR Simulator',
        brand: 'N4no.com',
        icon:
        './assets/mads/2-Productivity-7-VR-Simulator.svg'
      }
      
    ]
  },
  {
    name: 'Management',
    img:
      'assets/mads/Management.svg',
    apps: [
      {
        name: 'File Manager',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-1-File-Manager.svg'
      },
      {
        name: 'IoT Manager',
        brand: 'N4no.com',
        icon:
        './assets/mads/3-Management-2-IoT-Manager.svg'
      },
      {
        name: 'Role Manager',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-3-Role-Manager.svg'
      },
      {
        name: 'Entity Manager',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-4-Entity-Manager.svg'
      },
      {
        name: 'Tool Manager',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-5-Tool-Manager.svg'

      },
      {
        name: 'Widget Manager',
        brand: 'Rey',
        icon:
        './assets/mads/3-Management-6-Widget-Manager.svg'

      },

    ]
  },
  {
    name: 'Analytics',
    img:
      'assets/mads/Analytics.svg',
    apps: [
      {
        name: 'Data Cruncher',
        brand: 'Rey',
        icon:
        './assets/mads/4-Analytics-1-Data-Cruncher.svg'
      },
      {
        name: 'AI Engine',
        brand: 'Rey',
        icon:
        './assets/mads/4-Analytics-2-AI-Engine.svg'
      },
      {
        name: 'Usage Analyser',
        brand: 'Rey',
        icon:
        './assets/mads/4-Analytics-3-Usage-Analyser.svg'
      }
      
    ]
  },
  {
    name: 'Security',
    img:
      'assets/mads/Security.svg',
    apps: [
      {
        name: 'MADS Secure',
        brand: 'Rey',
        icon:
        './assets/mads/5-Smart-1-MADS-Secure.svg'
      },
      {
        name: 'Login Tracker',
        brand: 'N4no.com',
        icon:
        './assets/mads/5-Smart-2-Login-Tracker.svg'
      },
      {
        name: 'Network Analyser',
        brand: 'Sashalab',
        icon:
        './assets/mads/5-Smart-3-Network-Analyser.svg'
      },
      {
        name: 'Secure Share',
        brand: 'N4no.com',
        icon:
        './assets/mads/5-Smart-4-Secure-Share.svg'
      },
      {
        name: 'App Locker',
        brand: 'N4no.com',
        icon:
        './assets/mads/5-Smart-5-App-Locker.svg'
      },
      {
        name: 'Password Manager',
        brand: 'N4no.com',
        icon:
        './assets/mads/5-Smart-6-Password-Manager.svg'

      }

    ]
  },
  {
    name: 'General',
    img:
      'assets/mads/General.svg',
    apps: [
      {
        name: 'Calendar',
        brand: 'Rey',
        icon:
        './assets/mads/6-General-1-Calendar.svg'
      },
      {
        name: 'Calculator',
        brand: 'N4no.com',
        icon:
        './assets/mads/6-General-2-Calculator.svg'
      },
      {
        name: 'Chat App',
        brand: 'Rey',
        icon:
          './assets/mads/6-General-3-Chat-App.svg'
      },
    ]
  }
]

let catContainer = document.querySelector(
  '.apps .container .apps-details .wrapper .categories'
)

let appsContainer = document.querySelector(
  '.apps .container .apps-details .category-apps'
)

let selectedAppCatIndex = 1

// render categories

const renderCategories = () => {
  for (let i = 0; i < categories.length; i++) {
    let indiCat = document.createElement('div')
    indiCat.classList.add('indi-cat')
    indiCat.innerHTML = `
    <div class="wrapper ${selectedAppCatIndex === i ? 'active-cat' : ''}">
    <div class="cat-icon-container">
      <img
        src=${categories[i].img}
        alt="cat-icon"
        class="cat-icon"
      />
    </div>
  </div>
  <div class="cat-name  ${selectedAppCatIndex === i ? 'apps-count-active' : ''}">${categories[i].name}</div>
  <div class="apps-count ${
    selectedAppCatIndex === i ? 'apps-count-active' : ''
  }">
    ${categories[i].apps.length} ${
      categories[i].apps.length > 1 ? 'Apps' : 'App'
    }
  </div>
    `
    indiCat.addEventListener('click', () => {
      selectedAppCatIndex = i
      catContainer.innerHTML = null
      appsContainer.innerHTML = null
      renderCategories()
      renderApps()
    })

    catContainer.appendChild(indiCat)
  }
}

renderCategories()

// render apps of a particular category

const renderApps = () => {
  for (let i = 0; i < categories[selectedAppCatIndex].apps.length; i++) {
    let indiApp = document.createElement('div')
    indiApp.classList.add('app-detail')
    indiApp.classList.add('wow')
    indiApp.classList.add('bounceInUp')
    indiApp.classList.add('slow')
    indiApp.innerHTML = `
            <div class="upper">
                <div class="app-icon">
                <img
                    src=${categories[selectedAppCatIndex].apps[i].icon}
                    class="icon"
                    alt="icon"
                />
                </div>
                <div class="main-details">
                <!-- 
                <h4 class="cat-name">
                  ${categories[selectedAppCatIndex].name}
                </h4>
                -->
                <h4 class="app-name">${categories[selectedAppCatIndex].apps[i].name}</h4>
                <!-- 
                <div class="company-name">${categories[selectedAppCatIndex].apps[i].brand}</div>
                -->
                </div>
            </div>
            <!-- 
            <p class="detail">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
            </p>
            -->
        `

    appsContainer.appendChild(indiApp)
  }
}

renderApps()

// carousel
let leftClick = document.querySelector(
  '.apps .container .apps-details .wrapper .left'
)

let rightClick = document.querySelector(
  '.apps .container .apps-details .wrapper .right'
)

leftClick.addEventListener('click', () => {
  let newArr = []
  for (let i = 0; i < categories.length; i++) {
    if (i === categories.length - 1) {
      newArr[0] = categories[i]
    } else {
      newArr[i + 1] = categories[i]
    }
  }
  categories = newArr
  catContainer.innerHTML = null
  appsContainer.innerHTML = null
  renderCategories()
  renderApps()
})

rightClick.addEventListener('click', () => {
  let newArr = []
  for (let i = 0; i < categories.length; i++) {
    if (i === 0) {
      newArr[categories.length - 1] = categories[i]
    } else {
      newArr[i - 1] = categories[i]
    }
  }

  categories = newArr
  catContainer.innerHTML = null
  appsContainer.innerHTML = null
  renderCategories()
  renderApps()
})

var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById('nav').style.boxShadow = '0 7px 12px -12px #666';
		document.getElementById('nav').style.transition = '0.8s';
		// document.getElementById("nav").style.height = "60px";
		// document.getElementById("logo").style.maxWidth = "100px";
		document.getElementById('req-demo-btn').style.color = '#000000';
		document.getElementById('req-demo-btn').style.borderColor = '#000000';
		document.getElementById('nav').style.backgroundColor = '#FFFFFF';
    for (let i = 0; i <= 1; i++) {
      document.getElementsByClassName("item-dropdown")[i].style.backgroundColor = "#fff";
    }
    for (let i = 0; i <= 5; i++) {
      let actTab = document.getElementsByClassName("act-tab")[i]
      if(actTab){
        actTab.style.color = "#000";
      }
      if (document.getElementsByClassName("item-drop-element")[i]) {
        document.getElementsByClassName("item-drop-element")[i].style.color = "#000";
      }
    }
    document.getElementsByClassName("menu")[0].setAttribute("src", "./assets/menu-black.png");
  } else {
 		// document.getElementById("nav").style.height = "100px";
		// document.getElementById("nav").classList.remove("fadeInUp")
		// document.getElementById("logo").style.maxWidth = "150px";
		document.getElementById('nav').style.backgroundColor = '#000';
		document.getElementById('req-demo-btn').style.color = '#ffffff';
		document.getElementById('req-demo-btn').style.borderColor = '#ffffff';
		document.getElementById('nav').style.transition = '0.8s';
    for (let i = 0; i <= 1; i++) {
      document.getElementsByClassName("item-dropdown")[i].style.backgroundColor = "#000";
    }
    for (let i = 0; i <= 5; i++) {
      let actTab = document.getElementsByClassName("act-tab")[i]
      if(actTab){
        actTab.style.color = "#fff";
      }
      if (document.getElementsByClassName("item-drop-element")[i]) {
        document.getElementsByClassName("item-drop-element")[i].style.color = "#fff";
      }
    }  
    document.getElementsByClassName("menu")[0].setAttribute("src", "./assets/menu-white.png");
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
