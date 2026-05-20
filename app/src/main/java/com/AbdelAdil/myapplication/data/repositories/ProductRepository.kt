package com.AbdelAdil.myapplication.data.repositories

import com.AbdelAdil.myapplication.data.api.RetrofitClient
import com.AbdelAdil.myapplication.data.models.Product

class ProductRepository {

    private val api get() = RetrofitClient.instance

    suspend fun getAll(): Result<List<Product>> {
        return try {
            val response = api.getProducts()
            val body = response.body()
            if (response.isSuccessful && body != null && body.success) {
                Result.success(body.data)
            } else {
                Result.failure(Exception("Erreur chargement produits"))
            }
        } catch (e: Exception) {
            Result.failure(Exception("Erreur réseau: ${e.message}"))
        }
    }

    suspend fun getById(id: Int): Result<Product> {
        return try {
            val response = api.getProductById(id)
            val body = response.body()
            if (response.isSuccessful && body != null && body.success && body.data != null) {
                Result.success(body.data)
            } else {
                Result.failure(Exception("Produit introuvable"))
            }
        } catch (e: Exception) {
            Result.failure(Exception("Erreur réseau: ${e.message}"))
        }
    }

    suspend fun getByCategory(slug: String): Result<List<Product>> {
        return try {
            val response = api.getProductsByCategory(slug)
            val body = response.body()
            if (response.isSuccessful && body != null && body.success) {
                Result.success(body.data)
            } else {
                Result.failure(Exception("Erreur chargement produits"))
            }
        } catch (e: Exception) {
            Result.failure(Exception("Erreur réseau: ${e.message}"))
        }
    }
}
