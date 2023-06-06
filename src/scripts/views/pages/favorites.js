import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorites = {
  async render() {
    return `
    <main id="mainContent" tabindex="0">
    <div class="content">
    <h2 class="content__heading">Favorites Restaurant</h2>
    <div class="restaurants" id="restaurants">
    </div>
    </div>
  </main>`;
  },

  async afterRender() {
  // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    const mainContainer = document.querySelector('#mainContent');

    if (!restaurants.length) {
      mainContainer.innerHTML += `
      <div class="#mainContent">
        <p class="notification-alert__content">belum ada restaurant favorit</p>
      </div>
    `;
    }

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Favorites;
