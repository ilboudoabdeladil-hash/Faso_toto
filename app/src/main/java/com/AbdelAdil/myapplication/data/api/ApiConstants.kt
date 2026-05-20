package com.AbdelAdil.myapplication.data.api

object ApiConstants {
    // Backend Configuration - Flexible pour développement et production
    // Pour développement: utilisez localhost ou l'IP de votre machine locale
    // Pour émulateur Android: utilisez 10.0.2.2 (alias pour localhost de la machine hôte)
    
    // Options de configuration:
    // 1. Localhost (Web sur la même machine): http://localhost:8000/api/
    // 2. Émulateur: http://10.0.2.2:8000/api/ 
    // 3. Appareil physique: http://<your-ip>:8000/api/
    // 4. Wi-Fi local: http://192.168.x.x:8000/api/
    
    const val BASE_URL = "http://10.0.2.2:8000/api/"
    
    // Endpoints de base
    const val AUTH_REGISTER = "auth/inscription"
    const val AUTH_LOGIN = "auth/connexion"
    const val AUTH_LOGOUT = "auth/logout"
    const val AUTH_REFRESH = "auth/refresh"
    
    // Endpoints produits
    const val PRODUCTS = "produits"
    const val PRODUCT_DETAIL = "produits/{id}"
    const val CATEGORIES = "categories"
    const val PRODUCTS_BY_CATEGORY = "produits/categorie/{slug}"
    const val PRODUCTS_BY_SELLER = "produits/vendeur/{id}"
    
    // Endpoints utilisateur
    const val USER_PROFILE = "user/profile"
    const val USER_UPDATE = "user/update"
    
    // Timeout configurations
    const val CONNECT_TIMEOUT = 30L // secondes
    const val READ_TIMEOUT = 30L
    const val WRITE_TIMEOUT = 30L
}
