package com.AbdelAdil.myapplication.ui.product

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.AbdelAdil.myapplication.data.local.CartManager
import com.AbdelAdil.myapplication.data.models.Product
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

data class ProductDetailUiState(
    val isLoading: Boolean = false,
    val product: Product? = null,
    val error: String? = null
)

class ProductDetailViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(ProductDetailUiState())
    val uiState: StateFlow<ProductDetailUiState> = _uiState.asStateFlow()

    fun loadProduct(productId: Int) {
        viewModelScope.launch {
            _uiState.value = ProductDetailUiState(isLoading = true)
            // Simulation
            try {
                val mockProduct = Product(
                    id = productId,
                    nom = "Smartphone Premium $productId",
                    description = "Une description détaillée du produit qui explique toutes ses fonctionnalités incroyables et pourquoi vous devriez l'acheter immédiatement.",
                    prix = 999.99,
                    stock = 5,
                    images = listOf("https://via.placeholder.com/400"),
                    statut = "publié",
                    vendeur_id = 1,
                    categorie_id = 1
                )
                _uiState.value = ProductDetailUiState(product = mockProduct)
            } catch (e: Exception) {
                _uiState.value = ProductDetailUiState(error = e.message)
            }
        }
    }

    fun addToCart() {
        _uiState.value.product?.let {
            CartManager.addProduct(it)
        }
    }
}