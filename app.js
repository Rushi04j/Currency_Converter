// Currency data with flags and country names
const currencies = {
  USD: { name: "US Dollar", country: "United States", flag: "🇺🇸" },
  EUR: { name: "Euro", country: "European Union", flag: "🇪🇺" },
  GBP: { name: "British Pound", country: "United Kingdom", flag: "🇬🇧" },
  JPY: { name: "Japanese Yen", country: "Japan", flag: "🇯🇵" },
  AUD: { name: "Australian Dollar", country: "Australia", flag: "🇦🇺" },
  CAD: { name: "Canadian Dollar", country: "Canada", flag: "🇨🇦" },
  CHF: { name: "Swiss Franc", country: "Switzerland", flag: "🇨🇭" },
  CNY: { name: "Chinese Yuan", country: "China", flag: "🇨🇳" },
  SEK: { name: "Swedish Krona", country: "Sweden", flag: "🇸🇪" },
  NZD: { name: "New Zealand Dollar", country: "New Zealand", flag: "🇳🇿" },
  MXN: { name: "Mexican Peso", country: "Mexico", flag: "🇲🇽" },
  SGD: { name: "Singapore Dollar", country: "Singapore", flag: "🇸🇬" },
  HKD: { name: "Hong Kong Dollar", country: "Hong Kong", flag: "🇭🇰" },
  NOK: { name: "Norwegian Krone", country: "Norway", flag: "🇳🇴" },
  KRW: { name: "South Korean Won", country: "South Korea", flag: "🇰🇷" },
  TRY: { name: "Turkish Lira", country: "Turkey", flag: "🇹🇷" },
  RUB: { name: "Russian Ruble", country: "Russia", flag: "🇷🇺" },
  INR: { name: "Indian Rupee", country: "India", flag: "🇮🇳" },
  BRL: { name: "Brazilian Real", country: "Brazil", flag: "🇧🇷" },
  ZAR: { name: "South African Rand", country: "South Africa", flag: "🇿🇦" },
  PLN: { name: "Polish Zloty", country: "Poland", flag: "🇵🇱" },
  DKK: { name: "Danish Krone", country: "Denmark", flag: "🇩🇰" },
  CZK: { name: "Czech Koruna", country: "Czech Republic", flag: "🇨🇿" },
  HUF: { name: "Hungarian Forint", country: "Hungary", flag: "🇭🇺" },
  ILS: { name: "Israeli Shekel", country: "Israel", flag: "🇮🇱" },
  CLP: { name: "Chilean Peso", country: "Chile", flag: "🇨🇱" },
  PHP: { name: "Philippine Peso", country: "Philippines", flag: "🇵🇭" },
  AED: { name: "UAE Dirham", country: "United Arab Emirates", flag: "🇦🇪" },
  COP: { name: "Colombian Peso", country: "Colombia", flag: "🇨🇴" },
  SAR: { name: "Saudi Riyal", country: "Saudi Arabia", flag: "🇸🇦" },
  MYR: { name: "Malaysian Ringgit", country: "Malaysia", flag: "🇲🇾" },
  RON: { name: "Romanian Leu", country: "Romania", flag: "🇷🇴" },
  THB: { name: "Thai Baht", country: "Thailand", flag: "🇹🇭" },
  BGN: { name: "Bulgarian Lev", country: "Bulgaria", flag: "🇧🇬" },
  HRK: { name: "Croatian Kuna", country: "Croatia", flag: "🇭🇷" },
  ISK: { name: "Icelandic Krona", country: "Iceland", flag: "🇮🇸" },
  EGP: { name: "Egyptian Pound", country: "Egypt", flag: "🇪🇬" },
  QAR: { name: "Qatari Riyal", country: "Qatar", flag: "🇶🇦" },
  KWD: { name: "Kuwaiti Dinar", country: "Kuwait", flag: "🇰🇼" },
  BHD: { name: "Bahraini Dinar", country: "Bahrain", flag: "🇧🇭" },
  OMR: { name: "Omani Rial", country: "Oman", flag: "🇴🇲" },
  JOD: { name: "Jordanian Dinar", country: "Jordan", flag: "🇯🇴" },
  LBP: { name: "Lebanese Pound", country: "Lebanon", flag: "🇱🇧" },
  PKR: { name: "Pakistani Rupee", country: "Pakistan", flag: "🇵🇰" },
  LKR: { name: "Sri Lankan Rupee", country: "Sri Lanka", flag: "🇱🇰" },
  BDT: { name: "Bangladeshi Taka", country: "Bangladesh", flag: "🇧🇩" },
  NPR: { name: "Nepalese Rupee", country: "Nepal", flag: "🇳🇵" },
  AFN: { name: "Afghan Afghani", country: "Afghanistan", flag: "🇦🇫" },
  MMK: { name: "Myanmar Kyat", country: "Myanmar", flag: "🇲🇲" },
  VND: { name: "Vietnamese Dong", country: "Vietnam", flag: "🇻🇳" },
  LAK: { name: "Lao Kip", country: "Laos", flag: "🇱🇦" },
  KHR: { name: "Cambodian Riel", country: "Cambodia", flag: "🇰🇭" },
  IDR: { name: "Indonesian Rupiah", country: "Indonesia", flag: "🇮🇩" },
  BND: { name: "Brunei Dollar", country: "Brunei", flag: "🇧🇳" },
  TWD: { name: "Taiwan Dollar", country: "Taiwan", flag: "🇹🇼" },
  MOP: { name: "Macanese Pataca", country: "Macau", flag: "🇲🇴" },
  KZT: { name: "Kazakhstani Tenge", country: "Kazakhstan", flag: "🇰🇿" },
  UZS: { name: "Uzbekistani Som", country: "Uzbekistan", flag: "🇺🇿" },
  KGS: { name: "Kyrgyzstani Som", country: "Kyrgyzstan", flag: "🇰🇬" },
  TJS: { name: "Tajikistani Somoni", country: "Tajikistan", flag: "🇹🇯" },
  TMT: { name: "Turkmenistani Manat", country: "Turkmenistan", flag: "🇹🇲" },
  AZN: { name: "Azerbaijani Manat", country: "Azerbaijan", flag: "🇦🇿" },
  GEL: { name: "Georgian Lari", country: "Georgia", flag: "🇬🇪" },
  AMD: { name: "Armenian Dram", country: "Armenia", flag: "🇦🇲" },
  BYN: { name: "Belarusian Ruble", country: "Belarus", flag: "🇧🇾" },
  UAH: { name: "Ukrainian Hryvnia", country: "Ukraine", flag: "🇺🇦" },
  MDL: { name: "Moldovan Leu", country: "Moldova", flag: "🇲🇩" },
  ALL: { name: "Albanian Lek", country: "Albania", flag: "🇦🇱" },
  MKD: { name: "Macedonian Denar", country: "North Macedonia", flag: "🇲🇰" },
  RSD: { name: "Serbian Dinar", country: "Serbia", flag: "🇷🇸" },
  BAM: { name: "Bosnia-Herzegovina Convertible Mark", country: "Bosnia and Herzegovina", flag: "🇧🇦" },
  NGN: { name: "Nigerian Naira", country: "Nigeria", flag: "🇳🇬" },
  GHS: { name: "Ghanaian Cedi", country: "Ghana", flag: "🇬🇭" },
  KES: { name: "Kenyan Shilling", country: "Kenya", flag: "🇰🇪" },
  UGX: { name: "Ugandan Shilling", country: "Uganda", flag: "🇺🇬" },
  TZS: { name: "Tanzanian Shilling", country: "Tanzania", flag: "🇹🇿" },
  ETB: { name: "Ethiopian Birr", country: "Ethiopia", flag: "🇪🇹" },
  MAD: { name: "Moroccan Dirham", country: "Morocco", flag: "🇲🇦" },
  TND: { name: "Tunisian Dinar", country: "Tunisia", flag: "🇹🇳" },
  DZD: { name: "Algerian Dinar", country: "Algeria", flag: "🇩🇿" },
  LYD: { name: "Libyan Dinar", country: "Libya", flag: "🇱🇾" },
  SDG: { name: "Sudanese Pound", country: "Sudan", flag: "🇸🇩" },
  ZWL: { name: "Zimbabwean Dollar", country: "Zimbabwe", flag: "🇿🇼" },
  BWP: { name: "Botswanan Pula", country: "Botswana", flag: "🇧🇼" },
  NAD: { name: "Namibian Dollar", country: "Namibia", flag: "🇳🇦" },
  SZL: { name: "Swazi Lilangeni", country: "Eswatini", flag: "🇸🇿" },
  LSL: { name: "Lesotho Loti", country: "Lesotho", flag: "🇱🇸" },
  MWK: { name: "Malawian Kwacha", country: "Malawi", flag: "🇲🇼" },
  ZMW: { name: "Zambian Kwacha", country: "Zambia", flag: "🇿🇲" },
  MZN: { name: "Mozambican Metical", country: "Mozambique", flag: "🇲🇿" },
  MGA: { name: "Malagasy Ariary", country: "Madagascar", flag: "🇲🇬" },
  MUR: { name: "Mauritian Rupee", country: "Mauritius", flag: "🇲🇺" },
  SCR: { name: "Seychellois Rupee", country: "Seychelles", flag: "🇸🇨" },
  ARS: { name: "Argentine Peso", country: "Argentina", flag: "🇦🇷" },
  UYU: { name: "Uruguayan Peso", country: "Uruguay", flag: "🇺🇾" },
  PYG: { name: "Paraguayan Guarani", country: "Paraguay", flag: "🇵🇾" },
  BOB: { name: "Bolivian Boliviano", country: "Bolivia", flag: "🇧🇴" },
  PEN: { name: "Peruvian Sol", country: "Peru", flag: "🇵🇪" },
  VES: { name: "Venezuelan Bolívar", country: "Venezuela", flag: "🇻🇪" },
  GYD: { name: "Guyanese Dollar", country: "Guyana", flag: "🇬🇾" },
  SRD: { name: "Surinamese Dollar", country: "Suriname", flag: "🇸🇷" },
  FJD: { name: "Fijian Dollar", country: "Fiji", flag: "🇫🇯" },
  PGK: { name: "Papua New Guinean Kina", country: "Papua New Guinea", flag: "🇵🇬" },
  SBD: { name: "Solomon Islands Dollar", country: "Solomon Islands", flag: "🇸🇧" },
  VUV: { name: "Vanuatu Vatu", country: "Vanuatu", flag: "🇻🇺" },
  WST: { name: "Samoan Tala", country: "Samoa", flag: "🇼🇸" },
  TOP: { name: "Tongan Paʻanga", country: "Tonga", flag: "🇹🇴" },
}

const popularCurrencies = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "CHF", "CNY"]

// DOM elements
const amountInput = document.getElementById("amount")
const fromCurrencySelect = document.getElementById("fromCurrency")
const toCurrencySelect = document.getElementById("toCurrency")
const swapButton = document.getElementById("swapButton")
const convertButton = document.getElementById("convertButton")
const converterForm = document.getElementById("converterForm")
const loading = document.getElementById("loading")
const error = document.getElementById("error")
const result = document.getElementById("result")
const resultAmount = document.getElementById("resultAmount")
const resultDetails = document.getElementById("resultDetails")
const exchangeRate = document.getElementById("exchangeRate")
const popularCurrenciesContainer = document.getElementById("popularCurrencies")

// Initialize the app
function init() {
  populateCurrencySelects()
  populatePopularCurrencies()
  setDefaultCurrencies()
  attachEventListeners()
}

// Create custom dropdown for better flag and country display
function createCustomDropdown(selectElement, containerId) {
  const container = document.createElement("div")
  container.className = "currency-dropdown-custom"
  container.id = containerId

  const selectedDisplay = document.createElement("div")
  selectedDisplay.className = "selected-currency"
  selectedDisplay.innerHTML = `
        <span class="currency-flag">🌍</span>
        <div class="currency-info">
            <div class="currency-code">Select currency...</div>
            <div class="currency-name">Choose from available currencies</div>
        </div>
    `

  const dropdownOptions = document.createElement("div")
  dropdownOptions.className = "dropdown-options"

  // Add search input
  const searchInput = document.createElement("input")
  searchInput.type = "text"
  searchInput.className = "search-input"
  searchInput.placeholder = "Search currencies..."
  dropdownOptions.appendChild(searchInput)

  // Populate options
  const sortedCurrencies = Object.keys(currencies).sort()
  sortedCurrencies.forEach((code) => {
    const currency = currencies[code]
    const option = document.createElement("div")
    option.className = "dropdown-option"
    option.dataset.value = code
    option.innerHTML = `
            <div class="currency-option-content">
                <span class="currency-flag">${currency.flag}</span>
                <div class="currency-info">
                    <div class="currency-code">${code}</div>
                    <div class="currency-name">${currency.name} - ${currency.country}</div>
                </div>
            </div>
        `

    option.addEventListener("click", () => {
      selectCurrency(code, selectedDisplay, dropdownOptions, selectElement)
    })

    dropdownOptions.appendChild(option)
  })

  // Toggle dropdown
  selectedDisplay.addEventListener("click", () => {
    dropdownOptions.classList.toggle("show")
    if (dropdownOptions.classList.contains("show")) {
      searchInput.focus()
    }
  })

  // Search functionality
  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase()
    const options = dropdownOptions.querySelectorAll(".dropdown-option")

    options.forEach((option) => {
      const code = option.dataset.value
      const currency = currencies[code]
      const searchText = `${code} ${currency.name} ${currency.country}`.toLowerCase()

      if (searchText.includes(searchTerm)) {
        option.style.display = "block"
      } else {
        option.style.display = "none"
      }
    })
  })

  // Close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!container.contains(e.target)) {
      dropdownOptions.classList.remove("show")
    }
  })

  container.appendChild(selectedDisplay)
  container.appendChild(dropdownOptions)

  // Replace original select
  selectElement.style.display = "none"
  selectElement.parentNode.insertBefore(container, selectElement.nextSibling)

  return { selectedDisplay, dropdownOptions }
}

function selectCurrency(code, selectedDisplay, dropdownOptions, selectElement) {
  const currency = currencies[code]

  selectedDisplay.innerHTML = `
        <span class="currency-flag">${currency.flag}</span>
        <div class="currency-info">
            <div class="currency-code">${code}</div>
            <div class="currency-name">${currency.name} - ${currency.country}</div>
        </div>
    `

  selectElement.value = code
  dropdownOptions.classList.remove("show")

  // Clear search
  const searchInput = dropdownOptions.querySelector(".search-input")
  searchInput.value = ""

  // Show all options
  const options = dropdownOptions.querySelectorAll(".dropdown-option")
  options.forEach((option) => {
    option.style.display = "block"
    option.classList.remove("selected")
    if (option.dataset.value === code) {
      option.classList.add("selected")
    }
  })
}

// Update the populateCurrencySelects function
function populateCurrencySelects() {
  // Keep original selects for form submission but hide them
  const sortedCurrencies = Object.keys(currencies).sort()

  sortedCurrencies.forEach((code) => {
    const currency = currencies[code]
    const option = document.createElement("option")
    option.value = code
    option.textContent = `${code} - ${currency.name}`

    fromCurrencySelect.appendChild(option.cloneNode(true))
    toCurrencySelect.appendChild(option)
  })

  // Create custom dropdowns
  const fromDropdown = createCustomDropdown(fromCurrencySelect, "fromCurrencyCustom")
  const toDropdown = createCustomDropdown(toCurrencySelect, "toCurrencyCustom")

  // Store references for later use
  window.fromDropdown = fromDropdown
  window.toDropdown = toDropdown
}

// Update setDefaultCurrencies function
function setDefaultCurrencies() {
  fromCurrencySelect.value = "USD"
  toCurrencySelect.value = "EUR"

  // Update custom dropdowns
  setTimeout(() => {
    if (window.fromDropdown) {
      selectCurrency(
        "USD",
        window.fromDropdown.selectedDisplay,
        window.fromDropdown.dropdownOptions,
        fromCurrencySelect,
      )
    }
    if (window.toDropdown) {
      selectCurrency("EUR", window.toDropdown.selectedDisplay, window.toDropdown.dropdownOptions, toCurrencySelect)
    }
  }, 100)
}

// Update swapCurrencies function
function swapCurrencies() {
  const fromValue = fromCurrencySelect.value
  const toValue = toCurrencySelect.value

  if (fromValue && toValue) {
    // Update hidden selects
    fromCurrencySelect.value = toValue
    toCurrencySelect.value = fromValue

    // Update custom dropdowns
    if (window.fromDropdown && window.toDropdown) {
      selectCurrency(
        toValue,
        window.fromDropdown.selectedDisplay,
        window.fromDropdown.dropdownOptions,
        fromCurrencySelect,
      )
      selectCurrency(fromValue, window.toDropdown.selectedDisplay, window.toDropdown.dropdownOptions, toCurrencySelect)
    }

    // Trigger conversion if both currencies are selected
    handleConvert(new Event("submit"))
  }
}

// Update populatePopularCurrencies function to show country names
function populatePopularCurrencies() {
  popularCurrencies.forEach((code) => {
    const currency = currencies[code]
    const card = document.createElement("div")
    card.className = "currency-card"
    card.innerHTML = `
            <div class="flag">${currency.flag}</div>
            <div class="code">${code}</div>
            <div class="country" style="font-size: 0.7rem; color: #666; margin-top: 2px;">${currency.country}</div>
        `
    card.addEventListener("click", () => {
      fromCurrencySelect.value = code
      if (window.fromDropdown) {
        selectCurrency(
          code,
          window.fromDropdown.selectedDisplay,
          window.fromDropdown.dropdownOptions,
          fromCurrencySelect,
        )
      }
    })
    popularCurrenciesContainer.appendChild(card)
  })
}

// Attach event listeners
function attachEventListeners() {
  converterForm.addEventListener("submit", handleConvert)
  swapButton.addEventListener("click", swapCurrencies)
  amountInput.addEventListener("input", validateAmount)
}

// Validate amount input
function validateAmount() {
  const amount = Number.parseFloat(amountInput.value)
  if (isNaN(amount) || amount < 0) {
    amountInput.setCustomValidity("Please enter a valid positive number")
  } else {
    amountInput.setCustomValidity("")
  }
}

// Handle currency conversion
async function handleConvert(e) {
  e.preventDefault()

  const amount = Number.parseFloat(amountInput.value)
  const fromCurrency = fromCurrencySelect.value
  const toCurrency = toCurrencySelect.value

  // Validation
  if (!amount || amount <= 0) {
    showError("Please enter a valid amount")
    return
  }

  if (!fromCurrency || !toCurrency) {
    showError("Please select both currencies")
    return
  }

  if (fromCurrency === toCurrency) {
    showError("Please select different currencies")
    return
  }

  try {
    showLoading(true)
    hideError()
    hideResult()

    const exchangeData = await fetchExchangeRate(fromCurrency, toCurrency)
    const convertedAmount = amount * exchangeData.rate

    displayResult(amount, fromCurrency, convertedAmount, toCurrency, exchangeData.rate)
    showLoading(false)
  } catch (err) {
    showLoading(false)
    showError("Failed to fetch exchange rates. Please try again.")
    console.error("Conversion error:", err)
  }
}

// Fetch exchange rate from API
async function fetchExchangeRate(from, to) {
  // Using exchangerate-api.com (free tier)
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)

  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates")
  }

  const data = await response.json()

  if (!data.rates[to]) {
    throw new Error("Currency not supported")
  }

  return {
    rate: data.rates[to],
    date: data.date,
  }
}

// Display conversion result
function displayResult(amount, fromCurrency, convertedAmount, toCurrency, rate) {
  const fromCurrencyData = currencies[fromCurrency]
  const toCurrencyData = currencies[toCurrency]

  resultAmount.innerHTML = `
        ${toCurrencyData.flag} ${formatNumber(convertedAmount)} ${toCurrency}
    `

  resultDetails.innerHTML = `
        ${fromCurrencyData.flag} ${formatNumber(amount)} ${fromCurrency} = 
        ${toCurrencyData.flag} ${formatNumber(convertedAmount)} ${toCurrency}
    `

  exchangeRate.innerHTML = `
        <strong>Exchange Rate:</strong> 1 ${fromCurrency} = ${formatNumber(rate)} ${toCurrency}<br>
        <small>Rates are updated regularly</small>
    `

  result.classList.add("show")
}

// Format number with appropriate decimal places
function formatNumber(num) {
  if (num >= 1) {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  } else {
    return num.toLocaleString("en-US", {
      minimumFractionDigits: 4,
      maximumFractionDigits: 6,
    })
  }
}

// Show loading state
function showLoading(show) {
  if (show) {
    loading.classList.add("show")
    convertButton.disabled = true
    convertButton.textContent = "Converting..."
  } else {
    loading.classList.remove("show")
    convertButton.disabled = false
    convertButton.textContent = "Convert Currency"
  }
}

// Show error message
function showError(message) {
  error.textContent = message
  error.classList.add("show")
  setTimeout(() => {
    error.classList.remove("show")
  }, 5000)
}

// Hide error message
function hideError() {
  error.classList.remove("show")
}

// Hide result
function hideResult() {
  result.classList.remove("show")
}

// Initialize the app when DOM is loaded
document.addEventListener("DOMContentLoaded", init)
