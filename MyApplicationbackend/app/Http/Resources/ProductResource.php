<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nom' => $this->nom,
            'description' => $this->description,
            'prix' => (float) $this->prix,
            'stock' => (int) $this->stock,
            'images' => $this->images,
            'statut' => $this->statut,
            'categorie' => new CategoryResource($this->whenLoaded('categorie')),
            'vendeur' => new UserResource($this->whenLoaded('vendeur')),
            'date_creation' => $this->created_at,
        ];
    }
}
