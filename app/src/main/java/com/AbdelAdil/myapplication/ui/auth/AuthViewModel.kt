package com.AbdelAdil.myapplication.ui.auth

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.AbdelAdil.myapplication.data.api.RetrofitClient
import com.AbdelAdil.myapplication.data.models.LoginRequest
import com.AbdelAdil.myapplication.data.models.RegisterRequest
import com.AbdelAdil.myapplication.data.models.User
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch

data class AuthUiState(
    val isLoading: Boolean = false,
    val user: User? = null,
    val error: String? = null,
    val isSuccess: Boolean = false
)

class AuthViewModel : ViewModel() {
    private val _uiState = MutableStateFlow(AuthUiState())
    val uiState: StateFlow<AuthUiState> = _uiState.asStateFlow()

    fun login(email: String, motDePasse: String) {
        viewModelScope.launch {
            _uiState.value = AuthUiState(isLoading = true)
            try {
                val response = RetrofitClient.instance.login(LoginRequest(email, motDePasse))
                if (response.success && response.data != null) {
                    _uiState.value = AuthUiState(user = response.data.user, isSuccess = true)
                } else {
                    _uiState.value = AuthUiState(error = response.message ?: "Erreur de connexion")
                }
            } catch (e: Exception) {
                _uiState.value = AuthUiState(error = "Impossible de contacter le serveur: ${e.message}")
            }
        }
    }

    fun register(nom: String, email: String, motDePasse: String) {
        viewModelScope.launch {
            _uiState.value = AuthUiState(isLoading = true)
            try {
                val response = RetrofitClient.instance.register(RegisterRequest(nom, email, motDePasse))
                if (response.success && response.data != null) {
                    _uiState.value = AuthUiState(user = response.data.user, isSuccess = true)
                } else {
                    _uiState.value = AuthUiState(error = response.message ?: "Erreur d'inscription")
                }
            } catch (e: Exception) {
                _uiState.value = AuthUiState(error = "Erreur réseau: ${e.message}")
            }
        }
    }
    
    fun resetState() {
        _uiState.value = AuthUiState()
    }
}