package com.AbdelAdil.myapplication.ui.auth

import android.app.Application
import androidx.lifecycle.AndroidViewModel
import androidx.lifecycle.viewModelScope
import com.AbdelAdil.myapplication.data.local.TokenManager
import com.AbdelAdil.myapplication.data.models.User
import com.AbdelAdil.myapplication.data.repositories.AuthRepository
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

class AuthViewModel(application: Application) : AndroidViewModel(application) {
    private val repository = AuthRepository(TokenManager(application))

    private val _uiState = MutableStateFlow(AuthUiState())
    val uiState: StateFlow<AuthUiState> = _uiState.asStateFlow()

    fun login(email: String, motDePasse: String) {
        viewModelScope.launch {
            _uiState.value = AuthUiState(isLoading = true)
            repository.login(email, motDePasse).fold(
                onSuccess = { user ->
                    _uiState.value = AuthUiState(user = user, isSuccess = true)
                },
                onFailure = { e ->
                    _uiState.value = AuthUiState(error = e.message ?: "Erreur de connexion")
                }
            )
        }
    }

    fun register(nom: String, email: String, motDePasse: String) {
        viewModelScope.launch {
            _uiState.value = AuthUiState(isLoading = true)
            repository.register(nom, email, motDePasse).fold(
                onSuccess = { user ->
                    _uiState.value = AuthUiState(user = user, isSuccess = true)
                },
                onFailure = { e ->
                    _uiState.value = AuthUiState(error = e.message ?: "Erreur d'inscription")
                }
            )
        }
    }

    fun resetState() {
        _uiState.value = AuthUiState()
    }
}
