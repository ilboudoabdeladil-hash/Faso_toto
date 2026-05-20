<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('categories', function (Blueprint $table) {
            $table->string('nom')->after('id');
            $table->string('slug')->unique()->after('nom');
            $table->string('image')->nullable()->after('slug');
        });

        Schema::table('products', function (Blueprint $table) {
            $table->string('nom')->after('id');
            $table->text('description')->after('nom');
            $table->decimal('prix', 10, 2)->after('description');
            $table->integer('stock')->default(0)->after('prix');
            $table->json('images')->nullable()->after('stock');
            $table->string('statut')->default('actif')->after('images');
            $table->foreignId('vendeur_id')->constrained('users')->cascadeOnDelete()->after('statut');
            $table->foreignId('categorie_id')->constrained('categories')->cascadeOnDelete()->after('vendeur_id');
        });
    }

    public function down(): void
    {
        Schema::table('products', function (Blueprint $table) {
            $table->dropForeign(['vendeur_id']);
            $table->dropForeign(['categorie_id']);
            $table->dropColumn(['nom', 'description', 'prix', 'stock', 'images', 'statut', 'vendeur_id', 'categorie_id']);
        });

        Schema::table('categories', function (Blueprint $table) {
            $table->dropColumn(['nom', 'slug', 'image']);
        });
    }
};
