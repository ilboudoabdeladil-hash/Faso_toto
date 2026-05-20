<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProductFactory extends Factory
{
    public function definition(): array
    {
        return [
            'nom' => fake()->unique()->words(3, true),
            'description' => fake()->paragraphs(3, true),
            'prix' => fake()->randomFloat(2, 500, 50000),
            'stock' => fake()->numberBetween(0, 100),
            'images' => [fake()->imageUrl(640, 480, 'product')],
            'statut' => fake()->randomElement(['actif', 'actif', 'actif', 'inactif']),
        ];
    }
}
