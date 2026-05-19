package com.AbdelAdil.myapplication.ui.home

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.AbdelAdil.myapplication.data.models.Category
import com.AbdelAdil.myapplication.data.models.Product
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
    private val _uiState = MutableStateFlow(HomeUiState())
    val uiState: StateFlow<HomeUiState> = _uiState.asStateFlow()

    init {
        loadHomeData()
    }

    private fun loadHomeData() {
        viewModelScope.launch {
            _uiState.value = _uiState.value.copy(isLoading = true)
            // Simulation d'appel API avec des données fictives
            try {
                val mockCategories = listOf(
                    Category(1, "Électronique", "electronique"),
                    Category(2, "Mode", "mode"),
                    Category(3, "Maison", "maison"),
                    Category(4, "Beauté", "beaute")
                )
                val mockProducts = listOf(
                    Product(1, "Smartphone Pro", "Super smartphone", 899.99, 10, emptyList(), "publié", 1, 1),
                    Product(2, "Casque Bluetooth", "Réduction de bruit", 199.99, 5, emptyList(), "publié", 1, 1),
                    Product(3, "Robe d'été", "Robe légère en coton", 49.99, 20, emptyList(), "publié", 2, 2)
                )
                _uiState.value = HomeUiState(
                    categories = mockCategories,
                    popularProducts = mockProducts,
                    isLoading = false
                )
            } catch (e: Exception) {
                _uiState.value = _uiState.value.copy(isLoading = false, error = e.message)
            }
        }
    }
}