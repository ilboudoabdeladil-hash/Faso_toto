package com.AbdelAdil.myapplication.data.models

import com.google.gson.annotations.SerializedName

data class Product(
    val id: Int,
    val nom: String,
    val description: String,
    val prix: Double,
    val stock: Int,
    val images: List<String>? = null,
    val statut: String? = null,
    val categorie: Category? = null,
    val vendeur: User? = null,
    @SerializedName("date_creation") val dateCreation: String? = null
)
