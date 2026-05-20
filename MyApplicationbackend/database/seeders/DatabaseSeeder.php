<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $vendeur = User::factory()->vendeur()->create([
            'name' => 'Vendeur Test',
            'email' => 'vendeur@faso.toto',
        ]);

        User::factory()->create([
            'name' => 'Acheteur Test',
            'email' => 'test@faso.toto',
        ]);

        $categories = Category::factory(5)->create();

        Product::factory(20)->create([
            'vendeur_id' => $vendeur->id,
            'categorie_id' => fn() => $categories->random()->id,
        ]);
    }
}
