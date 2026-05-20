package com.AbdelAdil.myapplication.data.repositories

import com.AbdelAdil.myapplication.data.api.RetrofitClient
import com.AbdelAdil.myapplication.data.local.TokenManager
import com.AbdelAdil.myapplication.data.models.AuthResponse
import com.AbdelAdil.myapplication.data.models.LoginRequest
import com.AbdelAdil.myapplication.data.models.RegisterRequest
import com.AbdelAdil.myapplication.data.models.User

class AuthRepository(private val tokenManager: TokenManager) {

    private val api get() = RetrofitClient.instance

    suspend fun login(email: String, password: String): Result<User> {
        return try {
            val response = api.login(LoginRequest(email, password))
            val body = response.body()
            if (response.isSuccessful && body != null && body.success && body.data != null) {
                tokenManager.saveToken(body.data.token)
                RetrofitClient.authToken = body.data.token
                Result.success(body.data.user)
            } else {
                Result.failure(Exception(body?.message ?: "Erreur de connexion"))
            }
        } catch (e: Exception) {
            Result.failure(Exception("Impossible de contacter le serveur: ${e.message}"))
        }
    }

    suspend fun register(nom: String, email: String, password: String): Result<User> {
        return try {
            val response = api.register(RegisterRequest(nom, email, password))
            val body = response.body()
            if (response.isSuccessful && body != null && body.success && body.data != null) {
                tokenManager.saveToken(body.data.token)
                RetrofitClient.authToken = body.data.token
                Result.success(body.data.user)
            } else {
                Result.failure(Exception(body?.message ?: "Erreur d'inscription"))
            }
        } catch (e: Exception) {
            Result.failure(Exception("Erreur réseau: ${e.message}"))
        }
    }

    suspend fun logout() {
        try {
            api.logout()
        } catch (_: Exception) {}
        tokenManager.deleteToken()
        RetrofitClient.authToken = null
    }
}
