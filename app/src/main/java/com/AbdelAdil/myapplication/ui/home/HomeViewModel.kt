package com.AbdelAdil.myapplication.ui.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.AbdelAdil.myapplication.data.models.Category
import com.AbdelAdil.myapplication.data.models.Product
import com.AbdelAdil.myapplication.data.repositories.CategoryRepository
import com.AbdelAdil.myapplication.data.repositories.ProductRepository
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

data class HomeUiState(
    val isLoading: Boolean = false,
    val categories: List<Category> = emptyList(),
    val popularProducts: List<Product> = emptyList(),
    val error: String? = null
)

class HomeViewModel : ViewModel() {
    private val productRepository = ProductRepository()
    private val categoryRepository = CategoryRepository()

    private val _uiState = MutableStateFlow(HomeUiState())
    val uiState: StateFlow<HomeUiState> = _uiState.asStateFlow()

    init {
        loadHomeData()
    }

    private fun loadHomeData() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true)

            categoryRepository.getAll().fold(
                onSuccess = { categories ->
                    _uiState.value = _uiState.value.copy(categories = categories)
                },
                onFailure = { e ->
                    _uiState.value = _uiState.value.copy(error = e.message)
                }
            )

            productRepository.getAll().fold(
                onSuccess = { products ->
                    _uiState.value = _uiState.value.copy(
                        popularProducts = products.filter { it.statut == "actif" }.take(10)
                    )
                },
                onFailure = { e ->
                    _uiState.value = _uiState.value.copy(error = e.message)
                }
            )

            _uiState.value = _uiState.value.copy(isLoading = false)
        }
    }

    fun refresh() {
        loadHomeData()
    }
}
