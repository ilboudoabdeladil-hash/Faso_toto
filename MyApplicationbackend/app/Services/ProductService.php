<?php

namespace App\Services;

use App\Models\Product;

class ProductService
{
    public function getAll(array $filters = [])
    {
        $query = Product::with(['categorie', 'vendeur']);

        if (!empty($filters['categorie'])) {
            $query->whereHas('categorie', fn($q) => $q->where('slug', $filters['categorie']));
        }

        if (!empty($filters['vendeur_id'])) {
            $query->where('vendeur_id', $filters['vendeur_id']);
        }

        if (!empty($filters['statut'])) {
            $query->where('statut', $filters['statut']);
        }

        return $query->latest()->paginate(20);
    }

    public function getById(int $id): Product
    {
        return Product::with(['categorie', 'vendeur'])->findOrFail($id);
    }

    public function create(array $data, int $vendeurId): Product
    {
        return Product::create(array_merge($data, ['vendeur_id' => $vendeurId]));
    }

    public function update(Product $product, array $data): Product
    {
        $product->update($data);
        return $product->fresh();
    }

    public function delete(Product $product): void
    {
        $product->delete();
    }
}
