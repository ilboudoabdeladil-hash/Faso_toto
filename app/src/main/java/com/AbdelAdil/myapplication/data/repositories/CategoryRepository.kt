package com.AbdelAdil.myapplication.data.repositories

import com.AbdelAdil.myapplication.data.api.RetrofitClient
import com.AbdelAdil.myapplication.data.models.Category

class CategoryRepository {

    private val api get() = RetrofitClient.instance

    suspend fun getAll(): Result<List<Category>> {
        return try {
            val response = api.getCategories()
            val body = response.body()
            if (response.isSuccessful && body != null && body.success) {
                Result.success(body.data)
            } else {
                Result.failure(Exception("Erreur chargement catégories"))
            }
        } catch (e: Exception) {
            Result.failure(Exception("Erreur réseau: ${e.message}"))
        }
    }
}
