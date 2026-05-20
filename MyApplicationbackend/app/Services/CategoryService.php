<?php

namespace App\Services;

use App\Models\Category;

class CategoryService
{
    public function getAll()
    {
        return Category::withCount('produits')->latest()->get();
    }

    public function getBySlug(string $slug): Category
    {
        return Category::with(['produits' => fn($q) => $q->with('vendeur')->where('statut', 'actif')])
            ->withCount('produits')
            ->where('slug', $slug)
            ->firstOrFail();
    }

    public function create(array $data): Category
    {
        return Category::create($data);
    }

    public function update(Category $category, array $data): Category
    {
        $category->update($data);
        return $category->fresh();
    }

    public function delete(Category $category): void
    {
        $category->delete();
    }
}
