export const formatCurrency = (amount, currency = "USD", locale = "en-US") => {
  if (currency === "TRY") {
    locale = "tr-TR"
  }

  if (typeof amount !== "number" || isNaN(amount)) {
    console.warn("Amount must be a valid number");
    return amount;
  }

  try {
    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
    }).format(amount);
  } catch (error) {
    console.error("Error formatting currency:", error.message);
    return amount;
  }
};

export const DEFAULT_CURRENCY_SETTINGS = {
  locale: "en-US",
  currency: "USD",
};