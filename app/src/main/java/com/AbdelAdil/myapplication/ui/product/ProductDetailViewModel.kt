package com.AbdelAdil.myapplication.ui.product

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.AbdelAdil.myapplication.data.local.CartManager
import com.AbdelAdil.myapplication.data.models.Product
import com.AbdelAdil.myapplication.data.repositories.ProductRepository
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
    private val repository = ProductRepository()

    private val _uiState = MutableStateFlow(ProductDetailUiState())
    val uiState: StateFlow<ProductDetailUiState> = _uiState.asStateFlow()

    fun loadProduct(id: Int) {
        viewModelScope.launch {
            _uiState.value = ProductDetailUiState(isLoading = true)
            repository.getById(id).fold(
                onSuccess = { product ->
                    _uiState.value = ProductDetailUiState(product = product)
                },
                onFailure = { e ->
                    _uiState.value = ProductDetailUiState(error = e.message)
                }
            )
        }
    }

    fun addToCart(product: Product) {
        CartManager.addItem(product)
    }
}
