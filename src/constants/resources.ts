const ERROR_CONTEXT_READING_CART = "reading cart from localStorage";
const ERROR_LOADING = "Failed to load games. Please try again.";
const NO_GAMES_FOUND = "No games found for the selected genre.";
const ERROR_CONTEXT_LOADING_GENRES = "loading genres from API";
const ERROR_CONTEXT_REMOVING_FROM_CART = "removing from cart";
const ERROR_CONTEXT_LOADING_GAMES = "loading games from API";
const ERROR_CONTEXT_ADDING_TO_CART = "adding to cart";
const ERROR_CONTEXT_CLEARING_CART = "clearing cart";
const DEFAULT_API_URL = "http://localhost:3000/api";
const ERROR_FETCH_GENRES = "Failed to fetch genres";
const ERROR_FETCH_GAMES = "Failed to fetch games";
const CONTINUE_SHOPPING = "Continue Shopping";
const BACK_TO_CATALOG = "← Back to Catalog";
const CART_STORAGE_KEY = "gamershop-cart";
const CART_EMPTY = "Your cart is empty";
const ORDER_SUMMARY = "Order Summary";
const CATALOG_TITLE = "Top Sellers";
const PRODUCTION_ENV = "production";
const REMOVE_FROM_CART = "REMOVE";
const ADD_TO_CART = "ADD TO CART";
const ORDER_TOTAL = "Order Total";
const CART_TITLE = "Your Cart";
const TRY_AGAIN = "Try Again";
const APP_NAME = "GamerShop";
const GENRE_LABEL = "Genre:";
const CHECKOUT = "Checkout";
const DEFAULT_GENRE = "All";
const SEE_MORE = "SEE MORE";
const GENRE_PARAM = "genre";
const CART_ITEMS = "items";
const PAGE_PARAM = "page";
const NEW_LABEL = "New";
const INITIAL_PAGE = 1;

export {
  APP_NAME,
  CATALOG_TITLE,
  NO_GAMES_FOUND,
  TRY_AGAIN,
  SEE_MORE,
  ERROR_LOADING,
  DEFAULT_GENRE,
  PAGE_PARAM,
  GENRE_PARAM,
  INITIAL_PAGE,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  NEW_LABEL,
  GENRE_LABEL,
  CART_TITLE,
  CART_EMPTY,
  ORDER_SUMMARY,
  ORDER_TOTAL,
  CHECKOUT,
  BACK_TO_CATALOG,
  CART_ITEMS,
  CONTINUE_SHOPPING,
  DEFAULT_API_URL,
  CART_STORAGE_KEY,
  ERROR_FETCH_GENRES,
  ERROR_FETCH_GAMES,
  ERROR_CONTEXT_READING_CART,
  ERROR_CONTEXT_ADDING_TO_CART,
  ERROR_CONTEXT_REMOVING_FROM_CART,
  ERROR_CONTEXT_CLEARING_CART,
  ERROR_CONTEXT_LOADING_GAMES,
  ERROR_CONTEXT_LOADING_GENRES,
  PRODUCTION_ENV,
};
