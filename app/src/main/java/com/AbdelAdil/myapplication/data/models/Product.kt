package com.AbdelAdil.myapplication.data.models

data class Product(
    val id: Int,
    val nom: String,
    val description: String,
    val prix: Double,
    val stock: Int,
    val images: List<String>? = emptyList(),
    val statut: String,
    val vendeur_id: Int,
    val categorie_id: Int
)